import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Nav from './COMPONENTS/Nav'
import Vehicles from './COMPONENTS/Vehicles'
import CabBooking from './COMPONENTS/CabBooking'
import PreviousBooking from './COMPONENTS/PreviousBooking'
import Offers from './COMPONENTS/Offers'
import Wallet from './COMPONENTS/Wallet'


const App = () => {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
    <Route path='/' element={<CabBooking></CabBooking>} ></Route>
        <Route path='/Vehicles' element={<Vehicles></Vehicles>}></Route>
        <Route path='/PreviousBooking' element={<PreviousBooking></PreviousBooking>}></Route>
        <Route path='/Offers' element={<Offers></Offers>}></Route>
        <Route path='/Wallet' element={<Wallet></Wallet>}></Route>
    </Routes>
    </BrowserRouter>
  )
}

export default App
