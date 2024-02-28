const {Driver, Team, driverTeams}= require("../db")

const createDriver= async () =>{

const newDriver= await Driver.create({})


}


module.exports= createDriver;