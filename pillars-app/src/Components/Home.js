import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import '../Css/Home.css';
import'../App.css'
import myImage from '../images/img.jpg'
import { FaPhone } from 'react-icons/fa';
import Loader from './Loader';
import { FaArrowCircleRight } from "react-icons/fa";
import { FaUserLock } from "react-icons/fa";
import CountUp from'react-countup';
import ScrollTigger from 'react-scroll-trigger'



function Home(){
const [isLoading, setIsLoading] = useState(true);
const [counteOn,setCounterOn]=useState(false)


  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  
  }, []);
return(
 <>
 {isLoading ? (
        <Loader />
      ) : (
        <>
        <div className="floating-icon">
    <a href='https://wa.me/447756393994'>
      <FaPhone size={25} />

    </a>
    </div>
<Navbar/>
<div className="image-container">
  <div className="overlay">
    <h1>EARN THE QURAN <span>ONLINE </span></h1>
    <h1> ANYWHERE, ANYTIME</h1>
    <hr className='my-hr'/>
    <p>BESPOKE ONE TO ONE LESSONS WITH HIGHLY EXPERIENCED AND QUALIFIED TUTORS IN</p>
    <p>TAJWEED, RECITATION, HIFZ, AND ISLAMIC STUDIES.</p>

    <div className='btn'>
      <button>Register <FaUserLock/></button>
      <button>Learn More <FaArrowCircleRight/> </button>
    </div>
    
  </div>
  
</div>
<div className='course'>

</div>
<ScrollTigger onEnter={()=>setCounterOn(true)} onExit={()=>setCounterOn(false)}>
  <div className='count'>
     <div className='count-in'>
      <h3>
     {counteOn &&  <CountUp start={0} end={493} duration={2} delay={0}/>}
       + <br/>
     </h3>
     <p> Registered Student</p>
     </div>
     <div className='count-in'>
      <h3>
     {counteOn &&  <CountUp start={0} end={76} duration={2} delay={0}/>}
       + <br/>
     </h3>
     <p> Available Tutors</p>
     </div>
     <div className='count-in'>
      <h3>
     {counteOn &&  <CountUp start={0} end={2763} duration={2} delay={0}/>}
       + <br/>
     </h3>
     <p> Hours Studied</p>
     </div>
     <div className='count-in'>
      <h3>
     {counteOn &&  <CountUp start={0} end={5} duration={2} delay={1}/>}
       + <br/>
     </h3>
     <p> Countries Served</p>
     </div>
     
</div>
</ScrollTigger>
        </>
      )}
   

</>
)
}
export default Home