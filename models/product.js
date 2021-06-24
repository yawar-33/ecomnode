'use strict'

module.exports = function (sequelize, DataTypes) {
  const Product = sequelize.define('Products', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    price: DataTypes.STRING,
    image: DataTypes.STRING,
    units: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER,
  })

  // Product.associate = (models) => {
  //   Product.belongsTo(models.Users, {
  //     foreignKey: {
  //       name: 'userId',
  //       allowNull: false,
  //     },
  //     as: 'user',
  //   })
  // }

  return Product
}
