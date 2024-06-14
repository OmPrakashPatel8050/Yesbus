const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors');

const app = express()
app.use(bodyParser.json());



let CorsOption={
  origin:"http://localhost:5000",
  methods:"GET,POST,Put,DELETE",
  Credential:true
}

app.use(cors(CorsOption));

const PORT = process.env.PORT || 5000


const Cab_booking_router = require("./ROUTERS/Cab_Bookings")
const vehicles_route = require('./ROUTERS/Vehicle_route')
const previousBooking_route = require('./ROUTERS/previousbooking')
const Offers_route = require('./ROUTERS/offers')
const wallet_route = require('./ROUTERS/wallet')

app.listen(PORT, (req, res) => {
  console.log("Server Started");
})

app.get('/', (req, res) => {
  res.send("Server is Running")
})

app.use('/',Cab_booking_router)

app.use('/', vehicles_route)

app.use('/', previousBooking_route)

app.use('/',Offers_route)

app.use('/', wallet_route)


