import React from 'react';
import './Foote.css';
import { BiLogoMediumOld } from 'react-icons/bi';
import { AiFillFacebook } from 'react-icons/ai';
import { AiFillTwitterCircle } from 'react-icons/ai';
import { AiFillInstagram } from 'react-icons/ai';

const Foote = () => {
   return (
      <div className="footer">
         <div className="secContainer container grid">
            <div className="logoDiv">
               <div className="footerLogo">
                  <BiLogoMediumOld className="icon" />
                  <span>OU-Trips</span>
               </div>
               <div className="socials flex">
                  <AiFillFacebook className="icon" />
                  <AiFillTwitterCircle className="icon" />
                  <AiFillInstagram className="icon" />
               </div>
            </div>
            <div className="footerLinks">
               <span className="linkTitle">Infomation</span>
               <li>
                  <a href="#">Home</a>
               </li>

               <li>
                  <a href="#">Explore</a>
               </li>
               <li>
                  <a href="#">Travel</a>
               </li>
               <li>
                  <a href="#">Blog</a>
               </li>
            </div>
            <div className="footerLinks">
               <span className="linkTitle">Helpful Links</span>
               <li>
                  <a href="#">Destination</a>
               </li>
               <li>
                  <a href="#">Support</a>
               </li>
               <li>
                  <a href="#">Travel & Condition</a>
               </li>
               <li>
                  <a href="#">Privacy</a>
               </li>
            </div>
            <div className="footerLinks">
               <span className="linkTitle">Contact Details</span>
               <span className="phone"> 0869163113</span>
               <span className="email">thanhdongtran77@gmail.com</span>
            </div>
         </div>
      </div>
   );
};

export default Foote;
