import Mail from "../../public/assets/mail.png"
import { Link } from "react-router-dom";
import './footer.scss'

function Footer(props){
  return ( 
    <section className='landing blue'>
      <div class='container-botton'>
        <div class='contact-box' id='contact'>
          <p id='contact'><span ><img id='mail'src={Mail}/>  support@experienceconcerts.co</span></p>
        </div>
        <div id='brand-footer'>
        
          <p id='brand-footer-link'>EXP|CON</p>
          
        </div>
        <p id='footer-f'>2019 All Rights Reserved | Speer Technologies Incorporated</p> 
      </div>
      
    </section>
    
    
  );
}

export default Footer