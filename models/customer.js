'use strict'

module.exports = function (sequelize, DataTypes) {
  const Customer = sequelize.define('Customers', {
    firstName: DataTypes.STRING,
    lastName: DataTypes.STRING,
    email: DataTypes.STRING,
    address: DataTypes.STRING,
    city: DataTypes.STRING,
    postalCode: DataTypes.STRING,
    country: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  })

  // Customer.associate = (models) => {
  //   Customer.belongsTo(models.Users, {
  //     foreignKey: {
  //       name: 'userId',
  //       allowNull: false,
  //     },
  //     as: 'user',
  //   })
  // }

  return Customer
}
