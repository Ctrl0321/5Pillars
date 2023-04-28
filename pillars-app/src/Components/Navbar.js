import React, { useState } from 'react';
import { Link,BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import '../App.css';
import{FaBars} from 'react-icons/fa'
import{ImCross} from 'react-icons/im'
import logo from '../images/Logo-1.png'

function Navbar(){
    const [mobile,setMobile]=useState(false)
 return(
    <>
     <nav className='navbar' style={{zIndex: 1}}>
        {/* <div className='container'> */}
        <img className='logo' src={logo}></img>
        <ul  className={mobile? "nav-links-mobile":"nav-links"} onClick={()=>setMobile(false)}>
         <Link to='/' style={{textDecoration:'none'}}><li>Home</li></Link>
         <Link to='/' style={{textDecoration:'none'}}><li>Package</li></Link>
         <Link to='/' style={{textDecoration:'none'}}><li>About</li></Link>
         <Link to='/' style={{textDecoration:'none'}}><li>Register</li></Link>
        </ul>
        <button className="mobile-menu-icon" onClick={()=>setMobile(!mobile)}>
            {mobile? <ImCross/>:<FaBars/>}
           
        </button>
        {/* </div> */}
     </nav>
    </>
 )
}
export default Navbar