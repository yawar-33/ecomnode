'use strict'

module.exports = function (sequelize, DataTypes) {
  const Category = sequelize.define('Categories', {
    name: DataTypes.STRING,
    description: DataTypes.STRING,
    userId: DataTypes.INTEGER,
  })

  // Category.associate = (models) => {
  //   Category.belongsTo(models.Users, {
  //     foreignKey: {
  //       name: 'userId',
  //       allowNull: false,
  //     },
  //     as: 'user',
  //   })
  // }

  return Category;
}
