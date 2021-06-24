'use strict'

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define('Users', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true,
      },
      unique: true,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  })

  User.associate = (models) => {
    User.hasMany(models.Categories, {
      foreignKey: {
        name: 'userId',
        allowNull: false,
      },
      as: 'user',
    })
    User.hasMany(models.Products, {
      foreignKey: {
        name: 'categoryId',
        allowNull: false,
      },
      as: 'category',
    })
  }

  return User
}
