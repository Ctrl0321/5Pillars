import React, { useState, useRef } from "react";
import { Link, BrowserRouter as Router } from "react-router-dom";
import "../Css/Navbar.css";
import { FaBars } from "react-icons/fa";
import { ImCross } from "react-icons/im";
import logo from "../images/Logo-1.png";

function Navbar() {
  const [mobile, setMobile] = useState(false);

  const navRef = useRef(null);

  //   useEffect(() => {
  //     // Add event listener to detect clicks outside of the nav menu
  //     function handleClickOutsideNav(event) {
  //       if (navRef.current && !navRef.current.contains(event.target)) {
  //         setMobile(false);
  //       }
  //     }

  //     // Attach the event listener
  //     window.addEventListener("click", handleClickOutsideNav);

  //     // Clean up the event listener when the component unmounts
  //     return () => {
  //       window.removeEventListener("click", handleClickOutsideNav);
  //     };
  //   }, []);
  return (
    <>
      <nav className="navbar" ref={navRef}>
        {/* <div className='container'> */}
        <img className="logo" src={logo}></img>
        <ul
          className={mobile ? "nav-links-mobile" : "nav-links"}
          onClick={() => setMobile(false)}
        >
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Home</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>Package</li>
          </Link>
          <Link to="/" style={{ textDecoration: "none" }}>
            <li>About</li>
          </Link>
          <Link to="/register" style={{ textDecoration: "none" }}>
            <li>Register</li>
          </Link>
        </ul>
        <button className="mobile-menu-icon" onClick={() => setMobile(!mobile)}>
          {mobile ? <ImCross /> : <FaBars />}
        </button>
        {/* </div> */}
      </nav>
    </>
  );
}
export default Navbar;
