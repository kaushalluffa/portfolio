import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='navbar'>
        <div className="navbar__logo">Kaushal</div>
        <div className="navbar__navitems">
            <Link to="/">HOME</Link>
            <Link to="/work">WORK</Link>
            <Link to="/about">ABOUT</Link>
        </div>
    </div>
  )
}

export default Navbar