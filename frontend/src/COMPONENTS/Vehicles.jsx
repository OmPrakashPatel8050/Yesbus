import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { FaStar } from "react-icons/fa";
import { IoPeopleSharp } from "react-icons/io5";

function App() {
  
  const [dat,setDat]=useState([])
 
  useEffect(()=>{
  setTimeout(()=>{
axios.get("/vehicles")
.then((res)=>{
  setDat(res.data)
})
    },1000)
  },[])



  return (
    <div className='bg-gray-100'>
<center>     <h1 className='text-2xl text-red-600'>Available Cabs</h1>
</center>

      { 
      dat.map((d,i)=>{
        return (
          <div key={i} className='96 w-3/5 bg-green-400 mt-4 flex justify-between flex-wrap rounded-3xl ml-72'>
            <div className='flex flex-col space-y-4 mt-2 mb-2 ml-4'>
            <h1 className='text-2xl text-gray-900'>Car : {d.name}</h1>
            <h1 className='text-2xl text-gray-900' >Seats: {d.Seats}</h1>
            <h1 className='text-2xl text-gray-900'>Arriving_Time : {d.Arriving_Time}</h1>
            <h1 className='text-2xl text-gray-900'>Waitingcharge : {d.Waitingcharge}</h1>
            
            </div>
            <div className='mt-6 space-y-6'>
            <div className='h-8 w-16 bg-blue-500 flex justify-evenly text-2xl text-gray-100 rounded-2xl '><h1>{d.reviews}</h1><FaStar className='mt-1' /></div>
            <div className='flex  text-gray-200 '>
              <IoPeopleSharp className='text-3xl' />
              <h1 className='text-2xl pl-2'>{d.people}</h1>
            </div>
            </div>
            <div className='flex flex-col space-y-4 mt-2 mb-2 mr-4'>
            <h1 className='text-2xl text-gray-900'>Driver: {d.driver.name}</h1>
            <h1 className='text-2xl text-gray-900'>Age: {d.driver.Age}</h1>

            <h1 className='text-2xl text-gray-900 '>Contact:{d.driver.contact}</h1>
             <button  className='text-2xl font-semibold text-white bg-red-600 rounded-full w-36 py-1'>Book Cab</button>
            </div>

            </div>
        )
      })    
    }
<hr/>
      </div>
  );
      }

export default App;
