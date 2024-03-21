const { Driver, Team, DriverTeam } = require("../db");

const createDriver = async (req, res) => {
    const { driverData, teamData } = req.body;

    try {

        transaction = await Driver.sequelize.transaction();

        const driver = await Driver.create(driverData, { transaction });
        const team = await Team.create(teamData, { transaction });

        await DriverTeam.create(
            {
                DriverId: driver.id,
                TeamId: team.id,
            },
            { transaction }
        );
        await transaction.commit();

        res.status(201).json({ message: "Conductor creado exitosamente" });
    } catch (error) {
        if (transaction) await transaction.rollback();

        console.error("Error al crear conductor:", error);
        res.status(500).json({ error: "Error al crear conductor" });
    }
};

module.exports = createDriver;
