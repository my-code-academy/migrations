const Sequelize = require('sequelize');


const sequelize = new Sequelize('Hemant_Sriteja', 'Hemant_Sriteja', '', {
  host: 'localhost',
  dialect: 'postgres',

  operatorsAliases: false,
});

sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  }).catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

const User = sequelize.define('user', {
  username: Sequelize.STRING,
  birthday: Sequelize.DATE,
});

sequelize.sync()
  .then(() => User.create({
    username: 'janedoe',
    birthday: new Date(1980, 6, 20),
  }));

module.exports = { User, sequelize };
