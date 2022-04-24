import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div className='navbar'>
        <div className='logo'>
            OurLogo
        </div>
        <ul className='nav-links'>
            <li> <Link to='/'>Home</Link> </li>
            <li> <Link to='/products'>Products</Link> </li>
            <li> <Link to='/about'>About Us</Link> </li>
            <li> <Link to='/contact'>Contact</Link> </li>
        </ul>
    </div>
  )
}

export default Navbar