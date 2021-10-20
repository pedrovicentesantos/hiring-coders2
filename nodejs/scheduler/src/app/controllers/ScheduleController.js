import * as Yup from 'yup';
import parseISO from 'date-fns/parseISO';
import { Op } from 'sequelize';
import Appointment from '../models/Appointment';
import User from '../models/User';
import File from '../models/File';
import { endOfDay, startOfDay } from 'date-fns';

const PAGE_SIZE = 20;

class ScheduleController {
  async index(req, res) {
    const { userId } = req;
    const { date, page = 1 } = req.query;

    const isCollaborator = await User.findOne({
      where: {
        id: userId,
        provider: true
      }
    });

    if (!isCollaborator) {
      return res.status(401).json({ error: 'User is not a provider' });
    }

    const parseDate = parseISO(date);

    const appointments = await Appointment.findAll({
      where: {
        collaborator_id: userId,
        cancelled_at: null,
        date: {
          [Op.between]: [startOfDay(parseDate), endOfDay(parseDate)]
        }
      },
      order: ['date'],
      attributes: ['id', 'date'],
      limit: PAGE_SIZE,
      offset: (page - 1) * PAGE_SIZE,
      include: [
        {
          model: User,
          as: 'user',
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

export default new ScheduleController();
