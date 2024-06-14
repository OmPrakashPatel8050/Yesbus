import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Offers = () => {
  const [dat, setDat] = useState([])
  const [id, setid] = useState('')
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [validTill, setValidTill] = useState('');
  const [condition, setcondition] = useState('')


  useEffect(() => {
    axios.get('/offers')
      .then((res) => {
        setDat(res.data)
      })
  })

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newOffer = { id,title, description, validTill, condition };

    try {
      await axios.post('/offers', newOffer);
      alert('Offer created successfully!');
      setid('');
      setTitle('');
      setDescription('');
      setValidTill('');
      setcondition('');
    } catch (error) {
      console.error('There was an error creating the offer!', error);
    }
  };

  return (
    <>
    <center>
      <h1 className='text-2xl text-red-600'>Offers</h1>
      <p className='text-1xl text-gray-800'>POST API</p>
    </center>
      <form onSubmit={handleSubmit}
        className='h-94 w-96 bg-gray-200 rounded-3xl ml-96 mt-4' id='o2' >
          <div className='text-2xl relative pt-4'>
          <center>
            <label>Title:</label> <br />
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
              className='w-80 bg-burlywood-700 border-b border-black' />
          </center>
        </div>
        <div className='text-2xl relative pt-4'>
          <center>
            <label>ID:</label> <br />
            <input
              type="text"
              value={id}
              onChange={(e) => setid(e.target.value)}
              required
              className='w-80 bg-burlywood-700 border-b border-black' />
          </center>
        </div>
        <div className='text-2xl relative mt-4'>
          <center>       
            <label>Description:</label>
            <input
              type="text"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required  className='w-80 bg-burlywood-700 border-b border-black'
            /></center>
        </div>
        <div className='text-2xl  relative mt-4'>
         <center>
         <label>Valid Till:</label> <br />
          <input
            type="date"
            value={validTill}
            onChange={(e) => setValidTill(e.target.value)}
            required  className='w-80 bg-burlywood-700 border-b border-black'
          />
         </center>
        </div>
       
        <button type="submit" className='text-2xl text-gray-300 border-red-400 py-2 px-6 bg-red-600 rounded-full mt-4 mb-4 ml-24'>Create Offer</button>
      </form>
    <div className='flex flex-wrap '>
    {
        dat.map((d, i) => {
          return (
             <div key={i}  className='h-70 w-60 bg-gray-700 text-white mt-4 ml-4 text-2xl rounded-2xl flex space-y-2 flex-col items-center' id='o1' >
              <center>
              <h1 className='pt-4' >{d.id}</h1>

              <h1 className='pt-4' >{d.title}</h1>
              <h1 className='pt-2' >{d.description}</h1>
              <h1 className='pt-2' >Valid : <span className='text-red-300'>{d.validTill}</span></h1>
              <h1 className='pt-4' >Condition: {d.condition}</h1>

              </center>
            </div>
          )
        })
      }
    </div>
    <hr />
    </>
  );
};

export default Offers;
