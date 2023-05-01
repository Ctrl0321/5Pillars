import React from 'react';
import '../Css/Loader.css';
// import moon from '../images/mooon.png';
import PacmanLoader from "react-spinners/PacmanLoader";

function Loader() {
  return (
    <div className="loader-container">
      {/* <div className="loader"></div> */}
      {/* <img src={moon} className='Loader'></img> */}
       <PacmanLoader
        color={'#d89f55'}
        size={50}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
      
    </div>
  );
}

export default Loader;
