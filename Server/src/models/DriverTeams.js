const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('DriverTeam', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: true,
      autoIncrement: true,
    },
    DriverId: {
      type: DataTypes.UUID,
      allowNull: false,
      references: {
        model: 'Drivers',
        key: 'id',
      },
    },
    TeamId: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'Teams',
        key: 'id',
      },
    },
  }, { timestamps: false });
};
