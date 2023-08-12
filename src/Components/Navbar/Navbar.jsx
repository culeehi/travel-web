import React from 'react';
import '../Navbar/Navbar.css';

import { BiLogoMediumOld } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

const Navbar = () => {
   return (
      <div className="navBar">
         <div className="lodoDiv">
            <BiLogoMediumOld className="icon" />
            <span>OU-Trips</span>
         </div>

         <div className="menu">
            <ul>
               <li className="navList">Destination</li>
               <li className="navList">About Us</li>
               <li className="navList">Testimonial</li>
               <li className="navList">Gallery</li>
            </ul>

            <AiFillCloseCircle className="icon closeIcon" />
         </div>
         <button className="signInBtn btn">Sign Up</button>

         <PiDotsNineBold className="icon" />
      </div>
   );
};

export default Navbar;
