import React, { useState,useEffect } from 'react';
import Navbar from './Navbar';
import '../Css/Home.css';
import'../App.css'
import myImage from '../images/img.jpg'
import { FaPhone } from 'react-icons/fa';
import Loader from './Loader';

function Home(){
const [isLoading, setIsLoading] = useState(true);

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
      <FaPhone size={30} />

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
  </div>
</div>
<div className='register'>

</div>
        </>
      )}
   

</>
)
}
export default Home