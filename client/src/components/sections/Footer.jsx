import './footer.scss'

function Footer(props){
  return ( 
    <section className='landing blue'>
      <div class='container-botton'>
        <div class='contact-box' id='contact'>
          <p id='contact'> <span class="glyphicon glyphicon-envelope">  support@experienceconcerts.co</span></p>
        </div>
        <div id='brand-footer'>
          <p id='brand-footer'>EXP|CON</p>
        </div>
        <p id='footer-f'>2019 All Rights Reserved | Speer Technologies Incorporated</p> 
      </div>
      
    </section>
    
    
  );
}

export default Footer