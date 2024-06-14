const express = require('express')
const router = express.Router()

const {getallvehicles,getvehiclebyname,} = require('../CONTROLLERS/vehicles')

router.route('/Vehicles').get(getallvehicles)

router.route('/vehicles/:name').get(getvehiclebyname)



module.exports = router

