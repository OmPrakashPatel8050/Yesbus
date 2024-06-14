import React, { useState } from 'react'
import axios from 'axios';

const CabBooking = () => {
  const [formData, setFormData] = useState({
    id:'',
    name: '',
    age:'',
    pickupLocation: '',
    dropoffLocation: '',
    time: ''
});

const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
        ...formData,
        [name]: value
    });
};

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const response = await axios.post('/cab_bookings', formData);
        console.log(response.data);
    } catch (error) {
        console.error(error);
    }
};

  return (
    <div className='d3'>
    <center>
        <h3>Details for Cab Booking</h3>
    </center>
    <form onSubmit={handleSubmit}>
        <div>
            <label className='l1'>Id</label>
            <input type="text" name='Id' value={formData.Id} onChange={handleChange} className='i1' />
            <label className='l2'>Name</label>
            <input type="text" name='Name' value={formData.name} onChange={handleChange} className='i2' />
            <label className='l3'>Age</label>
            <input type="text" name='Age' value={formData.Age} onChange={handleChange} className='i3' />
            <label className='l4'>Pickuplocation</label>
            <input type="text" name='PickupLocation' value={formData.pickupLocation} onChange={handleChange} className='i4' />
            <label className='l5'>Droplocation</label>
            <input type="text" name='DropoffLocation' value={formData.dropoffLocation} onChange={handleChange} className='i5' />
            <center>
                <button type="submit" className='b1'>Book Cab</button>
            </center>
        </div>
    </form>
</div>
  )
}

export default CabBooking
