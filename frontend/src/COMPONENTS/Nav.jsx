import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {
  return (
    <div>
        <div className='d2'>
            <Link to='/'><div className='d1'>CabBooking</div></Link>
            <Link to='/Vehicles'><div className='d1'>Vehicle</div></Link>
            <Link to='/PreviousBooking'><div className='d1'>History</div></Link>
            <Link to='/Offers'><div className='d1'>Offers</div></Link>
            <Link to='/Wallet'><div className='d1'>Balance</div></Link>
            
        </div>
    </div>
  )
}

export default Nav
