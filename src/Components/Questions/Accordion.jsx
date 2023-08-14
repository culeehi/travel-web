// import React from 'react';
// import '../Questions/Questions.css';

// import { BsArrowDownCircle } from 'react-icons/bs';
// import { BsArrowUpCircle } from 'react-icons/bs';

// const Accordion = ({ title, desc, active, setActive }) => {
//    const showTitle = () => {
//       setActive(title);
//       console.log('hel');
//    };

//    return (
//       <div className="accordionContainer">
//          <span
//             className={
//                (active === title ? 'activeTitle' : '') || 'title' + 'flex'
//             }
//          >
//             {title}
//             <span onClick={showTitle()}>
//                {active === title ? (
//                   <BsArrowDownCircle className="icon" />
//                ) : (
//                   <BsArrowUpCircle className="icon" />
//                )}
//             </span>
//          </span>

//          <p className={(active === title ? 'show' : '') + 'description'}>
//             {desc}
//          </p>
//       </div>
//    );
// };

// export default Accordion;

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
