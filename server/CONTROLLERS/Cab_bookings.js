const bookings = [
  {
    id: 1,
    name: "Omprakash",
    age:"22",
    pickupLocation: "Bengaluru",
    dropoffLocation: "Hubbli",
    time: "2024-06-10T06:30:00"
  }
];

// To Get all Bookings
const getCabBookings = (req, res) => {
  res.json(bookings);
};

// To create a new booking
const CreateCabBookings = (req, res) => {
  const newBooking = {
      id: bookings.length + 1,
      name: req.body.name,
      age: req.body.age,
      pickupLocation: req.body.pickupLocation,
      dropoffLocation: req.body.dropoffLocation,
      time: req.body.time
  };
  bookings.push(newBooking);
  res.status(201).json(newBooking);
};

module.exports = {getCabBookings,CreateCabBookings}