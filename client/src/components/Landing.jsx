import Blue from "./sections/Blue"
import Footer from "./sections/Footer";
import Red from "./sections/Red"
import Slider from "./sections/Slider"
import Yellow from "./sections/Yellow"


function Landing(props){
  return (
  <div className='landing'>
    <Slider />
    <Red />
    <Yellow />
    <Blue />
    <Footer/>
  </div>
  );
}

export default Landing