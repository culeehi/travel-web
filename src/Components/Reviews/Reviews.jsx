import React from 'react';
import '../Reviews/Reviews.css';

import { AiFillStar } from 'react-icons/ai';

import avatar1 from '../../assets/img/avatar/1.png';
import avatar2 from '../../assets/img/avatar/2.png';
import avatar3 from '../../assets/img/avatar/3.png';
import avatar4 from '../../assets/img/avatar/4.png';
import avatar6 from '../../assets/img/avatar/6.jpg';

const Reviews = () => {
   return (
      <div className="review section container">
         <div className="secContainer grid">
            <div className="textDiv">
               <span className="redText">FROM OUR CLIENTS</span>
               <h3>Real Travel History Form Our Beloved Clients</h3>
               <p>
                  By choosing us as their tour agency customer can expect an
                  enriching and enjoyable travel experience, filled width
                  unforgetable memories that will last a lifeetime
               </p>
               <span className="stars flex">
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
                  <AiFillStar className="icon" />
               </span>
               <div className="clientsImages flex">
                  <img src={avatar1} alt="" />
                  <img src={avatar2} alt="" />
                  <img src={avatar3} alt="" />
                  <img src={avatar4} alt="" />
               </div>
            </div>

            <div className="imgDiv">
               <img src={avatar6} alt="" />
            </div>
         </div>
      </div>
   );
};

export default Reviews;
