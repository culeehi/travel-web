import React from 'react';
import '../Home/Home.css';

import { AiOutlineSwapRight } from 'react-icons/ai';

import Video from '../../assets/video/home1.mp4';

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
               <h1>Popular Places</h1>
               <div className="images flex">
                  <img src="" alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Home;
