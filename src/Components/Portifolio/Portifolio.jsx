import React from 'react';
import '../Portifolio/Portifolio.css';

import icon2 from '../../assets/img/icons/2.jpg';
import icon3 from '../../assets/img/icons/3.jpg';
import icon4 from '../../assets/img/icons/4.jpg';
import icon5 from '../../assets/img/icons/5.jpg';

const Portifolio = () => {
   return (
      <div>
         <div className="portifolio section container">
            <div className="secContainer grid">
               <div className="leftContent">
                  <div className="secHeading">
                     <h3>Why Should You Choose Us</h3>
                     <p>
                        We have extendsive knowledge and experience in th travel
                        industry
                     </p>
                  </div>

                  <div className="grid">
                     <div className="singlePortifolio flex">
                        <div className="iconDiv">
                           <img src={icon5} alt="" />
                        </div>

                        <div className="info">
                           <h4>Safety and support</h4>
                           <p>
                              Our top priority is the safety and well-being of
                              our clients. we maintain high safety standards and
                              have emergency support available during the trip.
                           </p>
                        </div>
                     </div>

                     <div className="singlePortifolio flex">
                        <div className="iconDiv">
                           <img src={icon2} alt="" />
                        </div>

                        <div className="info">
                           <h4>Diverse Range of Destinations</h4>
                           <p>
                              whetther it's a domestic tour or an international
                              adventure, we cover a wide range of destinations
                              to cater to different interest and preferences
                           </p>
                        </div>
                     </div>

                     <div className="singlePortifolio flex">
                        <div className="iconDiv">
                           <img src={icon3} alt="" />
                        </div>

                        <div className="info">
                           <h4>24/7 Customer Support</h4>
                           <p>
                              Our dedicated customer support team is available
                              round the clock to address any queries or concerns
                              before, during and after the trip
                           </p>
                        </div>
                     </div>
                  </div>
               </div>

               <div className="rightContent">
                  <img src={icon4} alt="" />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Portifolio;
