import React from 'react';
import '../Destinations/Destinations.css';

import { MdLocationOn } from 'react-icons/md';
import { BsFillCreditCardFill } from 'react-icons/bs';
import { BsFillCalendarDateFill } from 'react-icons/bs';
import { BiSearch } from 'react-icons/bi';
import { TiLocationOutline } from 'react-icons/ti';

import img1 from '../../assets/img/1.jpg';
import img2 from '../../assets/img/2.jpg';
import img3 from '../../assets/img/3.jpg';
import img4 from '../../assets/img/4.jpg';
import img5 from '../../assets/img/5.jpg';
import img6 from '../../assets/img/6.jpg';
import img7 from '../../assets/img/7.jpg';
import img8 from '../../assets/img/8.jpg';

const destinations = [
   {
      id: 1,
      img: img1,
      name: 'Ba Vi',
      location: 'Nhu Thanh',
      ranting: 4,
   },
   {
      id: 2,
      img: img2,
      name: 'Quan Son',
      location: 'Quan Hoa',
      ranting: 4.2,
   },
   {
      id: 3,
      img: img3,
      name: 'Muong Lat',
      location: 'Quan Chieu',
      ranting: 5,
   },
   {
      id: 4,
      img: img4,
      name: 'Sapa',
      location: 'Lao Cai',
      ranting: 4.6,
   },
   {
      id: 5,
      img: img5,
      name: 'Ha gia',
      location: 'Lua Chin',
      ranting: 4.5,
   },
   {
      id: 6,
      img: img6,
      name: 'Hoa Binh',
      location: 'Thung Lung',
      ranting: 4.4,
   },
   {
      id: 7,
      img: img7,
      name: 'Meo vac',
      location: 'Lang Son',
      ranting: 4.6,
   },
   {
      id: 8,
      img: img8,
      name: 'Seychelles Island',
      location: 'Indian Ocean',
      ranting: 4.7,
   },
];

const Destinations = () => {
   return (
      <div className="destination section container">
         <div className="secContainer">
            <div className="">
               <span className="redText"> EXPLORE NOW </span>
               <h3>Find Your Dream Destination</h3>
               <p>
                  Fill in the fields below to find the best sport for your next
                  tour
               </p>
            </div>

            <div className="searchField grid">
               <div className="inputField flex">
                  <MdLocationOn className="icon" />
                  <input type="text" placeholder="Location" />
               </div>

               <div className="inputField flex">
                  <BsFillCreditCardFill className="icon" />
                  <input type="text" placeholder="Budget" />
               </div>

               <div className="inputField flex">
                  <BsFillCalendarDateFill className="icon" />
                  <input type="text" placeholder="Date" />
               </div>

               <button className="btn flex">
                  <BiSearch className="icon" />
                  Sreach
               </button>
            </div>

            <div className="secMenu">
               <ul className="flex">
                  <li className="active">All</li>
                  <li>Recommended</li>
                  <li>Beach</li>
                  <li>Park</li>
                  <li>Nature</li>
                  <li>Mountain</li>
               </ul>
            </div>

            <div className="destinationContainer grid">
               {destinations.map((destination) => {
                  return (
                     <div className="singleDestination" key={destination.id}>
                        <div className="imgDiv">
                           <img src={destination.img} alt="" />
                           <div className="descInfo flex">
                              <div className="text">
                                 <span className="name">
                                    {destination.name}
                                 </span>
                                 <p className="flex">
                                    <TiLocationOutline className="icon" />
                                    {destination.location}
                                 </p>
                              </div>
                              <span className="rating">
                                 {destination.ranting}
                              </span>
                           </div>
                        </div>
                     </div>
                  );
               })}
            </div>
         </div>
      </div>
   );
};

export default Destinations;
