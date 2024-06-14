import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { MdOutlineDoubleArrow } from "react-icons/md";

const PreviousBooking = () => {
  const [dat,setDat]=useState([])

  useEffect(()=>{
    axios.get("/previousBooking")
    .then((res)=>{
      setDat(res.data)
    })
  })

  return (
  <div className='relative'>
  <center>
    <h1 className='text-2xl text-red-600'>Cab History</h1>
  </center>
      {
        dat.map((d,i)=>{
          return (
            <div key={i} className='h-40 w-2/6 bg-purple-400 mt-4 text-yellow-100 rounded-2xl ml-[450px]'>
              <h1 className='pt-2 pl-2 text-1xl'>ID : {d.id}</h1>
              <h1 className='pt-0 pl-2 text-1xl'>User ID : {d.userId}</h1>
              <h1 className='pl-2'>{d.bookingDate}</h1>
              <h1 className=' pl-2 text-1xl'>Offer : {d.Offer}</h1>

             <div className='flex  text-2xl  pl-2 space-x-8'>
             <h1 className=''>{d.from}</h1>
             <MdOutlineDoubleArrow className='text-2xl mt-2 text-yellow-900'  />
             <h1 className=''>{d.to}</h1>
             </div>
              </div>

          )
        })
      }
      <hr />
    </div>
  )
}

export default PreviousBooking
