import User from '../models/User';
import Notifications from '../schema/Notifications';

class NotificationController {
  async index(req, res) {
    const { userId } = req;

    const isCollaborator = await User.findOne({
      where: {
        id: userId,
        provider: true
      }
    });

    if (!isCollaborator) {
      return res.status(401).json({ error: 'User is not a provider' });
    }

    const notifications = await Notifications.find({
      user: userId
    })
      .sort({
        createdAt: 'desc'
      })
      .limit(20);

    res.json(notifications);
  }

  async update(req, res) {
    const { id } = req.params;
    const notifications = await Notifications.findByIdAndUpdate(
      id,
      {
        read: true
      },
      { new: true }
    );

    res.json(notifications);
  }
}

export default new NotificationController();
