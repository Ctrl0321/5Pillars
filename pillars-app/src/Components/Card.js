import React, { Component } from 'react';
import '../Css/Card.css'

function Card(Props){
    return(
        <>
         <div className='container'>
            <div className='header'>
              <img src={Props.photo} alt='quraan'></img>
              <div className='overlayer'>
                <h3>{Props.over}</h3>
              </div>
            </div>
            <div className='text'>
               <h1>{Props.heading}</h1>
               <p>{Props.body}</p>
            </div>
         </div>
        </>
    )

}
export default Card;