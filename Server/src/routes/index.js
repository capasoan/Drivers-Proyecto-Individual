const { Router } = require("express");
const router = Router();

const allDrivers = require('../Controllers/allDrivers');
const driverD= require('../Controllers/driversD');


router.get("/drivers", allDrivers)
router.get("/drivers/:idDriver", driverD)

module.exports = router;

