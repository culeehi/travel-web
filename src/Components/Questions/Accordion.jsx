import React, { useState } from 'react';
import '../Questions/Questions.css';

import { BsArrowDownCircle } from 'react-icons/bs';
import { BsArrowUpCircle } from 'react-icons/bs';

const Accordion = ({ title, desc }) => {
   const [show, setShow] = useState(true);

   return (
      <div className="accordionContainer">
         <span className="title  flex">
            {title}
            <span onClick={() => setShow(!show, 'hleo')}>
               {show === true ? <BsArrowDownCircle className="icon" /> : <BsArrowUpCircle className="icon" />}
            </span>
         </span>
         {show === false ? <p className="destination ">{desc}</p> : <p className="hide">{desc}</p>}
      </div>
   );
};

export default Accordion;
