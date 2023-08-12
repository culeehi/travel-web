import React, { useState } from 'react';
import '../Navbar/Navbar.css';

import { BiLogoMediumOld } from 'react-icons/bi';
import { AiFillCloseCircle } from 'react-icons/ai';
import { PiDotsNineBold } from 'react-icons/pi';

const Navbar = () => {
   const [navBar, setNavBar] = useState('menu');

   const showNavBar = () => {
      setNavBar('menu showNavBar');
   };

   const removeNavBar = () => {
      setNavBar('menu');
   };

   return (
      <div className="navBar">
         <div className="lodoDiv">
            <BiLogoMediumOld className="icon" />
            <span>OU-Trips</span>
         </div>

         <div className={navBar}>
            <ul>
               <li className="navList">Destination</li>
               <li className="navList">About Us</li>
               <li className="navList">Testimonial</li>
               <li className="navList">Gallery</li>
            </ul>

            <AiFillCloseCircle className="icon closeIcon" onClick={removeNavBar} />
         </div>

         <button className="signInBtn btn">Sign Up</button>

         <PiDotsNineBold className="icon menuIcon" onClick={showNavBar} />
      </div>
   );
};

export default Navbar;
