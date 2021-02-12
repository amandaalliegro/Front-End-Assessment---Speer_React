import Black from "./sections/Black";
import BlackScnd from "./sections/BlackScnd";
import Blue from "./sections/Blue"
import Footer from "./sections/Footer";
import SidebarNavs from "./sections/Menu";
import Menu from "./sections/Menu";
import Red from "./sections/Red"
import Slider from "./sections/Slider"
import Yellow from "./sections/Yellow"


function Landing(props){
  return (
  <div className='landing'>
    <SidebarNavs />
    <Slider />
    <Red />
    <Yellow />
    <Black />
    <Blue />
    <BlackScnd />
    <Footer/>
  </div>
  );
}

export default Landing