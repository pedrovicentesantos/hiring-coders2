import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore, format } from 'date-fns';
import Appointment from '../models/Appointment';
import User from '../models/User';
import File from '../models/File';
import Notifications from '../schema/Notifications';

const PAGE_SIZE = 20;

class AppointmentController {
  async store(req, res) {
    const schema = Yup.object().shape({
      collaborator_id: Yup.number().required(),
      date: Yup.date().required()
    });

    const validBody = await schema.isValid(req.body);

    if (!validBody) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }

    const { userId } = req;
    const { collaborator_id, date } = req.body;

    const isCollaborator = await User.findOne({
      where: {
        id: collaborator_id,
        provider: true
      }
    });

    if (!isCollaborator) {
      return res
        .status(401)
        .json({ error: 'User not found or is not a collaborator' });
    }

    const startHour = startOfHour(parseISO(date));
    const isBeforeNow = isBefore(startHour, new Date());

    if (isBeforeNow) {
      return res
        .status(400)
        .json({ error: `Can't schedule a appointment to the past` });
    }

    const previousAppointment = await Appointment.findOne({
      where: {
        collaborator_id,
        cancelled_at: null,
        date: startHour
      }
    });

    if (previousAppointment) {
      return res.status(400).json({
        error: `Can't schedule a appointment to the same date as another`
      });
    }

    const appointment = await Appointment.create({
      user_id: userId,
      collaborator_id,
      date: startHour
    });

    const appointmentUser = await User.findByPk(userId);
    const formattedDate = format(startHour, "MMMM dd yyyy 'at' H:mm");

    await Notifications.create({
      content: `New appointment for user ${appointmentUser.name} on ${formattedDate}`,
      user: collaborator_id
    });

    res.json(appointment);
  }

  async index(req, res) {
    const { userId } = req;
    const { page } = req.query;

    const appointments = await Appointment.findAll({
      where: {
        user_id: userId,
        cancelled_at: null
      },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: PAGE_SIZE,
      offset: (page - 1) * PAGE_SIZE,
      include: [
        {
          model: User,
          as: 'collaborator',
          attributes: ['id', 'name'],
          include: [
            {
              model: File,
              as: 'photo',
              attributes: ['id', 'path', 'url']
            }
          ]
        }
      ]
    });

    res.json(appointments);
  }
}

export default new AppointmentController();
