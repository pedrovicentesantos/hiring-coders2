import jwt from 'jsonwebtoken';
import authConfig from '../../config/auth';

export default (req, res, next) => {
  const authHeaders = req.headers.authorization;

  if (!authHeaders) {
    res.status(401).json({ error: 'User not logged in' });
  }

  const token = authHeaders.slice(7);

  try {
    const decoded = jwt.verify(token, authConfig.HASH);
    req.userId = decoded.id;
    next();
  } catch {
    res.status(401).json({ error: 'Invalid Token' });
  }
};
