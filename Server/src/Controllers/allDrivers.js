const fs = require('fs');
const path = require('path')


const URL = path.resolve(__dirname, "../../api/db.json");

const allDrivers = async (req, res) => {

    try {
        const data = await fs.readFileSync(URL, 'utf-8');
        const drivers = JSON.parse(data);
        //console.log(data);
        res.status(200).json(drivers);
        } catch (error) {
        res.status(404).json({ error: "Driver not found" });

    }
}


module.exports = allDrivers;


// const { Driver } = require('../db.js');

// const allDrivers = async (req, res) => {

//       try {
//         const drivers = await Driver.findAll();
//         if (!drivers) {
//           res.status(404).json({ error: "Lista no encontrada" });
//         } else {
//           res.status(200).json(drivers);
//         }
//       } catch (error) {
//         console.error("ERROR:", error);
//         res.status(500).json({ error: error.message });
//       }
//     }
    
//     module.exports = allDrivers;



