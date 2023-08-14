import React from 'react';
import '../Subscribe/Subscribe.css';

import img from '../../assets/img/subber.jpg';

const Subscribe = () => {
   return (
      <div className="subscribe section container">
         <div className="secContainer grid">
            <img src={img} alt="" />
            <div className="textDiv">
               <h4>Best Way To Start Your Journey</h4>
               <p>We offer personalized itineraries tailored to individual preferences and intersts</p>
               <button className="btn">Start Here</button>
            </div>
         </div>
      </div>
   );
};

export default Subscribe;
