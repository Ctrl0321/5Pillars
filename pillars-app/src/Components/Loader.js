import React from 'react';
import '../Css/Loader.css';
import moon from '../images/mooon.png'

function Loader() {
  return (
    <div className="loader-container">
      <div className="loader"></div>
      {/* <img src={moon} className='Loader'></img> */}
    </div>
  );
}

export default Loader;
