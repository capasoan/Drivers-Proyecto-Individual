const { Driver} = require('../db');
const { Op } = require('sequelize');

const driverName = async (req, res) => {
  const { name } = req.query;

  try {
    const conductor = await Driver.findAll({ 

      Nombre: { [Op.iLike]: `%${name}%` },
      limit: 15
    });

    if (!conductor) {
      return res.status(404).json({ error: "no se encontro al conductor" });
    }

    res.status(200).json(conductor);
  } catch (error) {
    console.error('Error al obtener la información del conductor:', error);
    res.status(500).json({ error: "Ocurrió un error al obtener la información del conductor" });
  }
};



  module.exports= driverName;