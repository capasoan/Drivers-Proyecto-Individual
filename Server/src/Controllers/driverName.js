const { Driver, Team, DriverTeam } = require('../db');

const driverName = async (req, res) => {
  const { nombre } = req.query;

  try {
    const conductores = await Driver.findAll({
      where: {
        Nombre: nombre
      },
      attributes: ['Nombre', 'Apellido', 'Descripcion', 'Imagen', 'Nacionalidad', 'FechadeNacimiento', 'id'],
      limit: 15
    });

    if (!conductores || conductores.length === 0) {
      console.log('Conductor no encontrado');
      return res.status(404).json({ error: "Conductor no encontrado" });
    }

    const conductoresIds = conductores.map(conductor => conductor.id);

    const driverTeamRs = await DriverTeam.findAll({
      where: { DriverId: conductoresIds },
    });

    if (!driverTeamRs || driverTeamRs.length === 0) {
      return res.status(404).json({ error: "El conductor no está asociado a ningún equipo" });
    }

    // Construir un objeto para almacenar los conductores y sus equipos asociados
    const conductoresEquipos = conductores.map(conductor => {
      const equipos = driverTeamRs
        .filter(driverTeam => driverTeam.DriverId === conductor.id)
        .map(driverTeam => ({
          id: driverTeam.TeamId,
          Nombre: '' // Nombre del equipo, será rellenado más adelante
        }));
      return {
        ...conductor.toJSON(), // Convertir el conductor a objeto plano
        equipos
      };
    });

    // Obtener los nombres de los equipos para cada conductor
    for (let i = 0; i < conductoresEquipos.length; i++) {
      for (let j = 0; j < conductoresEquipos[i].equipos.length; j++) {
        const equipo = await Team.findByPk(conductoresEquipos[i].equipos[j].id);
        conductoresEquipos[i].equipos[j].Nombre = equipo.Nombre;
      }
    }

    res.status(200).json({ conductores: conductoresEquipos });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: "Error 500" });
  }
};

module.exports = driverName;



