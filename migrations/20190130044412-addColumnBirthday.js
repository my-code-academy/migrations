

module.exports = {
  up: (queryInterface, Sequelize) => {
    
      // logic for transforming into the new state
      return queryInterface.addColumn(
        'Users',
        'birthday',
       Sequelize.DATE,
      )
  },

  down: (queryInterface, Sequelize) =>  {
    return queryInterface.removeColumn(
      'Users',
      'birthday',
    );
  },
};
