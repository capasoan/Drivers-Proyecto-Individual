const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('DriverTeam', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    DriverId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Drivers',
        key: 'id',
      },
      foreignKey: true,
    },
    TeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Teams',
        key: 'id',
      },
      foreignKey: true,
    },
  }, { timestamps: false });
};
