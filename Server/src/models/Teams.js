const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('Team', {

    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
    },

    Nombre: {
      type: DataTypes.STRING,
      allowNull: true
    },
  }, { timestamps: false });
};