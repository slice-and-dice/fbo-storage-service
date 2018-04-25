const Sequelize = require('sequelize');
const winston = require('winston');

const sequelize = new Sequelize(`${process.env.DATABASE_URL}?ssl=true`);

sequelize
  .authenticate()
  .then(() => {
    winston.info('Connection has been established successfully.');
  })
  .catch(err => {
    winston.error('Unable to connect to the database:', err);
  });


module.exports = sequelize;

// RiskScores
// PriorityScores