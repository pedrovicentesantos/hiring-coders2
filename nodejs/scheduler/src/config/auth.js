import dotenv from 'dotenv';

dotenv.config();
const authConfig = {
  HASH: process.env.HASH,
  expiresIn: '1h'
};

export default authConfig;
