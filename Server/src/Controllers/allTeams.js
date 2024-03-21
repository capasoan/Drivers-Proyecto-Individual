
const fs = require('fs');
const path = require('path')


const URL = path.resolve(__dirname, "../../api/db.json");

const allTeams = async (req, res) => {

    try {

        const data = await fs.readFileSync(URL, 'utf-8');
        const driversData = JSON.parse(data);
        const teams = driversData.drivers.map(driver => driver.teams);

        console.log(teams);
        res.status(200).json(teams);
        } catch ( error) {

        console.log(error, "Error al traer a los equipos" )
        res.status(404).json({ error: error});

    }
}


module.exports = allTeams;