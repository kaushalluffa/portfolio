import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.scss";
const Navbar = () => {
  const [show, setShow] = useState(false)
  function openMenu(){
    setShow(!show)
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <span className="text">Kaushal</span>
        </div>
        <div className="navbar__navitems">
          <Link to="/">HOME</Link>
          <Link to="/">WORK</Link>
          <Link to="/">ABOUT</Link>
        </div>
        <div className="bars" onClick={openMenu}>
          <FaBars />
        </div>
      </div>
      <div className={`menu ${show ? 'show': ''}`}>
        <Link to="/">HOME</Link>
        <Link to="/">WORK</Link>
        <Link to="/">ABOUT</Link>
      </div>
    </>
  );
};

export default Navbar;
