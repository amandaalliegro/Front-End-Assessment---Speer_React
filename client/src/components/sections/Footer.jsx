import './footer.scss'

function Footer(props){
  return ( 
    <section className='landing blue'>
      <div class='container-botton'>
        <div class='contact-box' id='contact'>
          <p id='contact'> <span class="glyphicon glyphicon-envelope">  support@experienceconcerts.co</span></p>
        </div>
        <div id='brand'>
          <p id='brand'>EXP|CON</p>
        </div>
      </div>
      <footer id='footer'>2019 All Rights Reserved | Speer Technologies Incorporated</footer> 
    </section>
    
  );
}

export default Footer