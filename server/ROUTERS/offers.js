const express = require('express')
const router = express.Router()

const {getalloffers,createanoffer} = require('../CONTROLLERS/Offers')

router.route('/offers').get(getalloffers)

router.route('/offers').post(createanoffer)

module.exports = router