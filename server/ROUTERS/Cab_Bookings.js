const express = require('express')
const router = express.Router()

const {getCabBookings,CreateCabBookings} = require('../CONTROLLERS/Cab_bookings')

router.route('/cab_bookings').get(getCabBookings)

router.route('/cab_Bookings').post(CreateCabBookings)

module.exports = router