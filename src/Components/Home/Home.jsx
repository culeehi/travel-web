import React from 'react';
import '../Home/Home.css';

import { AiOutlineSwapRight } from 'react-icons/ai';

import Video from '../../assets/video/home1.mp4';

import home1 from '../../assets/img/home1.jpg';
import home2 from '../../assets/img/home2.jpg';
import home3 from '../../assets/img/home3.jpg';
import home4 from '../../assets/img/home4.jpg';

const Home = () => {
   return (
      <div className="home">
         <div className="videoBg">
            <video src={Video} autoPlay loop muted></video>
         </div>

         <div className="sectionText">
            <h1>Unlock Your Travel Dream With Us</h1>
            <p>Discover the world'a most adventurous nature life is so short for a trip</p>
            <button className="btn flex">
               GET STRATED <AiOutlineSwapRight className="icon" />
            </button>
         </div>

         <div className="popularPlaces">
            <div className="content">
               <h3>Popular Places</h3>
               <div className="images flex">
                  <img src={home1} alt="" />
                  <img src={home2} alt="" />
                  <img src={home3} alt="" />
                  <img src={home4} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
