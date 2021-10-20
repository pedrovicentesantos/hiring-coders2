const dotenv = require('dotenv');

dotenv.config();

module.exports = {
  dialect: 'postgres',
  host: 'localhost',
  username: 'postgres',
  password: process.env.POSTGRES_PASSWORD,
  database: 'scheduler',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true
  }
};
