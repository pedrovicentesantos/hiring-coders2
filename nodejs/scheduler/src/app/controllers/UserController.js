import * as Yup from 'yup';
import User from '../models/User';

class UserController {
  async store(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(6)
    });

    const validBody = await schema.isValid(req.body);

    if (!validBody) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }

    const { name, email, password } = req.body;

    const userExists = await User.findOne({
      where: {
        email
      }
    });

    if (userExists) {
      return res.status(400).json({ error: 'User already exists' });
    }

    const user = await User.create({
      name,
      email,
      password
    });

    const {
      id: createdId,
      name: createdName,
      email: createdEmail,
      provider: createdProvider
    } = user.dataValues;

    res.json({
      id: createdId,
      name: createdName,
      email: createdEmail,
      provider: createdProvider
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      name: Yup.string(),
      email: Yup.string().email(),
      oldPassword: Yup.string().min(6),
      password: Yup.string()
        .min(6)
        .when('oldPassword', (oldPassword, field) =>
          oldPassword ? field.required() : field
        ),
      confirmPassword: Yup.string().when('password', (password, field) =>
        password ? field.required().oneOf([Yup.ref('password')]) : field
      ),
      photo_id: Yup.number(),
      provider: Yup.boolean()
    });

    const validBody = await schema.isValid(req.body);

    if (!validBody) {
      return res.status(400).json({ error: 'Invalid parameters' });
    }

    const { userId } = req;
    const {
      email: newEmail,
      oldPassword,
      name,
      password: newPassword,
      photo_id,
      provider
    } = req.body;

    const user = await User.findByPk(userId);

    if (newEmail && newEmail !== user.email) {
      const emailExists = await User.findOne({
        where: {
          email: newEmail
        }
      });

      if (emailExists) {
        return res.status(400).json({ error: 'Email already exists' });
      }
    }

    if (oldPassword) {
      const correctPassword = await user.checkPassword(oldPassword);
      if (!correctPassword) {
        return res.status(401).json({ error: 'Incorrect password' });
      }
    }

    const {
      id,
      name: updatedName,
      email: updatedEmail,
      provider: updatedProvider
    } = await user.update(
      {
        email: newEmail,
        name,
        password: newPassword,
        photo_id,
        provider
      },
      {
        returning: true
      }
    );

    res.json({
      id,
      name: updatedName,
      email: updatedEmail,
      provider: updatedProvider
    });
  }
}

export default new UserController();
