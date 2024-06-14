const previousBooking=[
  {id:'001',userId:188801,bookingDate:"2024-06-05",from:"Hebbal",to:"Rajarajeswarinagar",Offer:"NA"},
  {id:'002',userId:188802,bookingDate:"2024-03-05",from:"T Dasarahalli",to:"Tummkuru",Offer:"20% discount"},
  {id:'003',userId:188803,bookingDate:"2024-06-10",from:"Peenya",to:"Magdi Road",Offer:"NA"},
  {id:'004',userId:188804,bookingDate:"2024-03-30",from:"Yelanka",to:"Mejestic",Offer:"10% discount"},

]

const showBooking = (req,res)=>{
  res.status(200).send(previousBooking)
}

module.exports = {showBooking}