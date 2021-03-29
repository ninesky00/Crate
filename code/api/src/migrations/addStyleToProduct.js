module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.addColumn('products', 'style', {
      type: Sequelize.STRING
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('products', 'style');
  }
}
