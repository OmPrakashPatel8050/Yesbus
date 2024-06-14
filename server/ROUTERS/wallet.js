const express = require('express')
const router = express.Router()

const {getwallet,updatewalletbalance} = require('../CONTROLLERS/wallet')

router.route('/wallet').get(getwallet)


router.route('/wallet').put(updatewalletbalance)

module.exports = router