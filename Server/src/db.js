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
//     const data = JSON.parse(fs.readFileSync('./api/db.json', 'utf8')).drivers;
//     //console.log(data);
//     const drivers = await Driver.findAll();
//     //console.log(drivers);

//     const driverTeams = [];

//     for (const driver of drivers) {
//       //console.log(`Nombre: ${driver.Nombre}, Apellido: ${driver.Apellido}`);
//      const matchingDriver = data.find(jsonDriver => {
//       const namesMatch = jsonDriver.name.forename === driver.Nombre && jsonDriver.name.surname === driver.Apellido;
//       const dobMatch = jsonDriver.dob === driver.FechadeNacimiento;
//       return namesMatch && dobMatch;
//   });
  
      
//   //console.log(matchingDriver);
    
//       if (matchingDriver) {
//         if (matchingDriver.teams) {
//           const teamsForDriver = matchingDriver.teams.split(',').map(team => team.trim());
          
//           for (const teamName of teamsForDriver) {
//             const matchingTeam = await Team.findOne({ where: { Nombre: teamName } });
            
//             if (matchingTeam) {
//               driverTeams.push({
//                 DriverId: driver.id, 
//                 TeamId: matchingTeam.id 
//               });

//             } else {
//              // console.log(`No se encontró el equipo "${teamName}" en la base de datos.`);
//             }}} else {
//           //console.log(`El conductor ${driver.Nombre} ${driver.Apellido} en el archivo JSON no tiene equipos asociados.`);
//         }} else {
//        // console.log(`No se encontró el conductor ${driver.Nombre} ${driver.Apellido} en el archivo JSON.`);
//       }
//     }
    
//   console.log(driverTeams)
//  await DriverTeam.bulkCreate(driverTeams);
//     console.log('¡Relaciones cargadas exitosamente!');
//   } catch (error) {
//     console.error('Error al cargar relaciones:', error);
//   }
// };

// cargarRelaciones();






// const cargarDatosTeam = async () => {
//   try {
//     const URL = JSON.parse(fs.readFileSync('./api/db.json', 'utf8'));


//      const equiposUnicos = {};
//     let contadorId = 1; // Inicializamos el contador de ID

//     // Iteramos sobre los datos originales para encontrar equipos únicos
//     URL.drivers.forEach(driverData => {
//       if (driverData.teams) { // Verificamos que la propiedad 'teams' exista
//         driverData.teams.split(',').forEach(team => {
//           const equipo = team.trim();
//           if (!equiposUnicos[equipo]) {
//             equiposUnicos[equipo] = {
//               id: contadorId++, // Asignamos un ID único y luego incrementamos el contador
//               Nombre: equipo
//             };
//           }
//         });
//       }
//     });


//     const datosFinales = Object.values(equiposUnicos);

//     console.log(datosFinales);
//     await Team.bulkCreate(datosFinales);
//     console.log('Datos cargados exitosamente en la base de datos');
//   } catch (error) {
//     console.error('Error al cargar los datos:', error);
//   }
// };

// cargarDatosTeam();




// // //DATOS CON LA URL DE LA IMAGEN POR DEFECTO


// const cargarDatos = async () => {
//   try {
//     const URL = JSON.parse(fs.readFileSync('./api/db.json', 'utf8'));
//     const data = URL.drivers.map(driverData => {
//       const name = driverData.name;
//       const image = driverData.image;
//       let imageUrl = 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Carlos_Sainz_2014_Dakar.jpg/250px-Carlos_Sainz_2014_Dakar.jpg'; 
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
  
