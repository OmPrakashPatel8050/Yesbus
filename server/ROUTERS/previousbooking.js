const express = require('express')
const router = express.Router()

const {showBooking}= require('../CONTROLLERS/previousbooking')

router.route('/previousBooking').get(showBooking)

module.exports = router