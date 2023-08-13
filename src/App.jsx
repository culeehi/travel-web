import './App.css';

import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import Middle from './Components/Middie/Middie';
import Destinations from './Components/Destinations/Destinations';
import Portifolio from './Components/Portifolio/Portifolio';
import Questions from './Components/Questions/Questions';
import Reviews from './Components/Reviews/Reviews';
import Subscribe from './Components/Subscribe/Subscribe';
import Foote from './Components/Foote/Foote';

function App() {
   return (
      <div>
         <Navbar></Navbar>

         <Home></Home>
         <Middle></Middle>
         <Destinations></Destinations>
         <Portifolio></Portifolio>

         <Reviews></Reviews>
         {/* <Questions></Questions>

         <Subscribe></Subscribe>
         <Foote></Foote> */}
      </div>
   );
}

export default App;
