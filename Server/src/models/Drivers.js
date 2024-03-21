const { DataTypes } = require('sequelize');


module.exports = (sequelize) => {

  sequelize.define('Driver', {

    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4, 

    },

    Nombre: {
      type: DataTypes.JSONB,
      allowNull: true
    },

    Apellido: {
      type: DataTypes.JSONB,
      allowNull: true
    },

    Descripcion: {
      type: DataTypes.TEXT,
      allowNull: true,

    },
    Imagen: {
      type: DataTypes.JSONB,
      allowNull: true
    },

    Nacionalidad: {
      type: DataTypes.STRING(1000),

    },
    FechadeNacimiento: {
      type: DataTypes.STRING(1000),

    },
    
  }, { timestamps: false });
};
