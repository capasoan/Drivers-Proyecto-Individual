const { Router } = require("express");
const router = Router();

const allDrivers = require('../Controllers/allDrivers');
const driverD= require('../Controllers/driversD');
const driverName =require('../Controllers/driverName')
const createDriver= require('../Controllers/createDriver')
const allTeams= require('../Controllers/allTeams')

router.get("/drivers", allDrivers)
router.get("/teams", allTeams)
router.get("/drivers/name", driverName)
router.get("/drivers/:idDriver", driverD)
router.post("/drivers" , createDriver )



module.exports = router;

