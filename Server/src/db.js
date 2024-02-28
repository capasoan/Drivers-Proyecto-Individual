require("dotenv").config();
const { Sequelize } = require('sequelize');
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const Drivers = require('./models/Drivers.js')
const Teams = require('./models/Teams.js')
const DriversTeams=  require('./models/DriverTeams.js')
//const { v4: uuidv4 } = require('uuid');



const fs = require('fs');
const path = require('path');


const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/drivers`, {
  logging: false, 
  native: false, 
});


Drivers(sequelize);
Teams(sequelize);
DriversTeams(sequelize);


const { Driver, Team, DriverTeam} = sequelize.models; 

Driver.belongsToMany(Team , {through: DriverTeam});
Team.belongsToMany(Driver , {through: DriverTeam});





// const cargarRelaciones = async () => {
//   try {

//     const drivers = await Driver.findAll();
//     const teams = await Team.findAll();

    
//     const relaciones = [];

   
//     for (const driver of drivers) {
//       for (const team of teams) {
//         relaciones.push({ DriverId: driver.id, TeamId: team.id });
//       }
//     }
// console.log(relaciones);
//     await sequelize.models.DriverTeam.bulkCreate(relaciones);

//     console.log('Carga de relaciones exitosa');
//   } catch (error) {
//     console.error('Error al cargar relaciones:', error);
//   }
// }


// cargarRelaciones();










// const cargarDatosTeam = async () => {
//   try {
//     const URL = JSON.parse(fs.readFileSync('./api/db.json', 'utf8'));
//     const data = URL.drivers.map(driverData => {
//       return {
//         id: driverData.id,
//         Nombre: driverData.teams,
//       };
//     });
//     console.log(data);
//     await Team.bulkCreate(data);
//     console.log('Datos cargados exitosamente en la base de datos');
//   } catch (error) {
//     console.error('Error al cargar los datos:', error);
//   }
// };

// cargarDatosTeam();







// const cargarDatos = async () => {
//   try {
//     const URL = JSON.parse(fs.readFileSync('./api/db.json', 'utf8'));
//     const data = URL.drivers.map(driverData => {
//       const name = driverData.name;
//       const image = driverData.image;
//       let imageUrl = '';
//       if (image.url && image.url.length > 0) {
//         imageUrl = image.url;
//       }
//       const forname = `${name.forename}`;
//       const lastName = `${name.surname}`;

//       const id = uuidv4();

//       const descripcion = driverData.description ? driverData.description : ''; 
//       return {
//         id: id,
//         Nombre: forname,
//         Apellido: lastName,
//         Descripcion: descripcion,
//         Imagen: { url: imageUrl },
//         Nacionalidad: driverData.nationality,
//         FechadeNacimiento: driverData.dob, 
//       };
//     });
//     // console.log(data)
//     await Driver.bulkCreate(data);
//     console.log('Datos cargados exitosamente en la base de datos');
//   } catch (error) {
//     console.error('Error al cargar los datos:', error);
    
//   }
// };

// cargarDatos();



module.exports = {
  Driver,
  Team,
  DriverTeam,
   
    ...sequelize.models, 
    conn: sequelize, 
    
  };
  
