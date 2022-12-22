import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.scss'
const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__logo">Kaushal</div>
        <div className="navbar__navitems">
            <Link to="/">HOME</Link>
            <Link to="/">WORK</Link>
            <Link to="/">ABOUT</Link>
        </div>
    </div>
  )
}

export default Navbar