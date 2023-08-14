import React, { useState } from 'react';
import '../Questions/Questions.css';
import Accordion from './Accordion.jsx';

const Questions = () => {
   const [active, setActive] = useState(false);

   return (
      <div className="questions section container">
         <div className="secHeading">
            <h3>Frequently Asked Questions</h3>
         </div>
         <div className="secContainer grid">
            <div className="accordion grid">
               <Accordion
                  title="Research destinations that align "
                  desc="Consider your interests budget, desired experiences, and the type of
            enviroment you enjoy. Research destinations that align with your
            preferences and offer attractions or activitiwa you find appealing."
                  active={active}
                  setActive={setActive}
               />
               <Accordion
                  title="Research destinations that align"
                  desc="Consider your interests budget, desired experiences, and the type of
            enviroment you enjoy. Research destinations that align with your
            preferences and offer attractions or activitiwa you find appealing."
                  active={active}
                  setActive={setActive}
               />
               <Accordion
                  title="Research destinations that align"
                  desc="Consider your interests budget, desired experiences, and the type of
            enviroment you enjoy. Research destinations that align with your
            preferences and offer attractions or activitiwa you find appealing."
                  active={active}
                  setActive={setActive}
               />
               <Accordion
                  title="Research destinations that align"
                  desc="Consider your interests budget, desired experiences, and the type of
            enviroment you enjoy. Research destinations that align with your
            preferences and offer attractions or activitiwa you find appealing."
                  active={active}
                  setActive={setActive}
               />
            </div>
            <div className="form">
               <div className="secHeading">
                  <h4>Do you have any specific question?</h4>
                  <p>Please fill the form below and our dedicated team will get intouch with you as soon as posiable</p>
               </div>

               <div className="formContent grid">
                  <input type="Email" placeholder="Enter email address" />
                  <textarea placeholder="Enter question here"></textarea>
                  <button className="btn">Submit Inquiry</button>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Questions;
