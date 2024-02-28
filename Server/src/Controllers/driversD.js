const { Driver, Team, DriverTeam } = require('../db');

const driverD = async (req, res) => {
  const { idDriver } = req.params;

  try {
    const conductor = await Driver.findByPk(idDriver);

    if (!conductor) {
      return res.status(404).json({ error: "Conductor no encontrado" });
    }

    const driverTeamEntry = await DriverTeam.findOne({
      where: { DriverId: idDriver },
    });

    if (!driverTeamEntry) {
      return res.status(404).json({ error: "El conductor no está asociado a ningún equipo" });
    }

    const equipo = await Team.findByPk(driverTeamEntry.TeamId);

    if (!equipo) {
      return res.status(404).json({ error: "Equipo no encontrado" });
    }

    res.status(200).json({ conductor, equipo });
  } catch (error) {
    console.error('Error al obtener la información del conductor y del equipo:', error);
    res.status(500).json({ error: "Ocurrió un error al obtener la información del conductor y del equipo" });
  }
};

module.exports = driverD;
