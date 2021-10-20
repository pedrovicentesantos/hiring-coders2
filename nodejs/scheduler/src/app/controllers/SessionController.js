import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';

import User from '../models/User';

class SessionController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string().email().required(),
      password: Yup.string().required()
    });

    const validBody = await schema.isValid(req.body);

    if (!validBody) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }

    const { email, password } = req.body;

    const user = await User.findOne({
      where: {
        email
      }
    });

    if (!user) {
      return res.status(401).json({ error: 'User not found' });
    }

    const correctPassword = await user.checkPassword(password);

    if (!correctPassword) {
      return res.status(401).json({ error: 'Password incorrect' });
    }

    const { id, name } = user;

    return res.json({
      user: {
        id,
        name,
        email
      },
      token: jwt.sign({ id }, authConfig.HASH, {
        expiresIn: authConfig.expiresIn
      })
    });
  }
}

export default new SessionController();
