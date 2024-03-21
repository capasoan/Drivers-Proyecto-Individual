const { Driver, DriverTeam, Team } = require('../db');

const driverD = async (req, res) => {
  try {
    const { idDriver } = req.params;

    const driver = await Driver.findByPk(idDriver);

    if (!driver) {
      return res.status(404).json({ error: 'Conductor no encontrado' });
    }

    const driverTeams = await DriverTeam.findAll({ where: { DriverId: idDriver } });
//console.log("driverTeams",driverTeams)
    const teamsId = driverTeams.map(driverTeam => driverTeam.TeamId);
    //console.log("teamsId",teamsId)
    const teams = await Team.findAll({ where: { id: teamsId } });
   // console.log("teams",teams)

    res.status(200).json({ driver, teams });

  } catch (error) {
    res.status(500).json({ error: 'Error 500' });
  }
}

module.exports = driverD;






// const fs = require('fs');
// const path = require('path');

// const URL = path.resolve(__dirname, "../../api/db.json");

// const driverDAPI = async(req, res) => {
// try{

//     const { idDriver } = req.params;
//     const data = await fs.promises.readFile(URL, 'utf-8');
//     const drivers = JSON.parse(data).drivers;
    
//     const driver = drivers.find(driver => driver.id === parseInt(idDriver));

//     if(!driver){
//         res.status(400).json({error: "conductor no encontrado"})
//     }else{
//       return  res.status(200).json(driver)
//     }


// }catch(error){
//     console.log("ERROR", error);
//     res.status(500).json({error:"Error 500"})
// }
   
    
// }
// module.exports = driverDAPI;
