import File from '../models/File';
import User from '../models/User';

class CollaboratorController {
  async index(req, res) {
    const collaborators = await User.findAll({
      where: {
        provider: true
      },
      attributes: ['id', 'name', 'email', 'photo_id', 'provider'],
      include: [
        {
          model: File,
          as: 'photo',
          attributes: ['name', 'path', 'url']
        }
      ]
    });

    return res.json(collaborators);
  }
}

export default new CollaboratorController();
