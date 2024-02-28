const { Router } = require("express");
const router = Router();

const allDrivers = require('../Controllers/allDrivers');
const driverD= require('../Controllers/driversD');
const driverName =require('../Controllers/driverName')

router.get("/drivers", allDrivers)
router.get("/drivers/name", driverName); 
router.get("/drivers/:idDriver", driverD)


module.exports = router;

