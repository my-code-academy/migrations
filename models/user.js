
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    username: DataTypes.STRING,
    birthday: DataTypes.DATE,
  }, {});
  User.generate = (username, birthday) => User.create({ username, birthday });
  User.getAllUsers = () => User.findAll();
  return User;
};
