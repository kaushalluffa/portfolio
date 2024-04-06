import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import "./Navbar.scss";
const Navbar = ({ developerData }) => {
  const [show, setShow] = useState(false);
  function openMenu() {
    setShow(!show);
  }
  return (
    <>
      <div className="navbar">
        <div className="navbar__logo">
          <Link to="/" className="text">
            {developerData?.name ?? ""}
          </Link>
        </div>
        <div className="navbar__navitems">
          <Link to="/">HOME</Link>
          <Link to="/works">WORK</Link>
          <Link to="/about">ABOUT</Link>
        </div>
        <div className="bars" onClick={openMenu}>
          <FaBars />
        </div>
      </div>
      <div className={`menu ${show ? "show" : ""}`}>
        <Link
          to="/"
          onClick={() => {
            setShow(false);
          }}
        >
          HOME
        </Link>
        <Link
          onClick={() => {
            setShow(false);
          }}
          to="/works"
        >
          WORK
        </Link>
        <Link
          onClick={() => {
            setShow(false);
          }}
          to="/about"
        >
          ABOUT
        </Link>
      </div>
    </>
  );
};

export default Navbar;
