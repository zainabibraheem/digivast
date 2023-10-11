import React, { useState } from 'react'
import './navbar.css'
import {RxCross2} from 'react-icons/rx' 
import {FiMenu} from 'react-icons/fi'
import { Link } from 'react-router-dom'

function Navbar() {
const [toggle, settoggle] = useState(false)

const toggleNavbar = () => {
  settoggle(prevSetToggle => !prevSetToggle)
}

  return (
    <nav>
      <div className='nav'>
      <div className='nav-logo'>DIGI<span>VAST</span></div>
      <div className='nav-links-div'>
        <ul className= {toggle? 'nav-links-toggle' : 'nav-links'}>
      
          <li><a href='#'>Home</a></li>
          <li><a href='#'>About Us</a></li>
          <li><a href='#'>Services</a></li>
          <li><a href='#'>Our packages</a></li>
          <li><a href='#'>Reviews</a></li>
          <li><button className='link-btn'>Join Us</button></li>
        </ul>

        
      </div>
      
      <button onClick={toggleNavbar} className='menu-button'>{toggle? <RxCross2 size={30}/> : <FiMenu size={30}/>} </button>
      
      
    </div>
    </nav>
  )
}

export default Navbar
