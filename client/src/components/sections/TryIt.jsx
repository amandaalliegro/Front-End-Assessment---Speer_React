import './tryIt.scss'
import Footer from './Footer'

function TryIt(props){
  return (
  <body>
    <main>
      <section class='plans-container'>
        <div class='container'>
          <div id='pricing'>
            <h1 id='pricing-ttl'>PRICING</h1>
            <p class='pricing-txt'>Test our app today! Choose from three subscription</p>
            <p class='pricing-txt'>Based payment models.</p>
          </div>
          <div class='boxes-plans'>
            <div class='box'>
              <div class='plan-ttl-box'>
              <h4 class='plan-ttl'>BASIC</h4>
              <hr id='red-line'/>
              <h4 class='plan-ttl-period'>MONTHLY</h4>
              </div>
              <p class='plan-ttl-price'>$9</p>
              <ul id='fnt-white'>
                <li> Very good</li>
                <li> Amazing</li>
                <li> Perfect Job</li>
                <li> Love this</li>
                <li> It's so good</li>
                <li> Features</li>
              </ul>
                <button class='select-btn' id='sel-red'> SELECT</button>
              </div>
              <div class='box'>
                <div class='plan-ttl-box'>
                <h4 class='plan-ttl' id='fnt-yellow'>ADVANCED</h4>
                <hr id='yellow-line'/>
                <h4 class='plan-ttl-period' id='fnt-yellow'>YEARLY</h4>
              </div>
                <p class='plan-ttl-price'id='fnt-yellow'>$99</p>
                <ul id='fnt-white'>
                  <li> Very very good</li>
                  <li> Even Amazing</li>
                  <li> Perfect Job</li>
                  <li> Love this more</li>
                  <li> It's so so good</li>
                  <li> More Features</li>
                </ul>
                <button class='select-btn'id='sel-yellow'> SELECT</button>
              </div>
              <div class='box'>
                <div class='plan-ttl-box'>
                <h4 class='plan-ttl' id='fnt-blue'>PRO</h4>
                <hr id='blue-line'/>
                <h4 class='plan-ttl-period' id='fnt-blue'>YEARLY</h4>
                </div> 
                <p class='plan-ttl-price' id='fnt-blue'>$120</p>
                <ul id='fnt-white'>
                  <li> Very very good</li>
                  <li> Even more</li>
                  <li> Perfect Job</li>
                  <li> Love this more</li>
                  <li> It's so so good</li>
                  <li> More Features</li>
                </ul>
                <button class='select-btn'id='sel-blue'> SELECT</button>
              </div>
            </div>
          </div>
      </section>
      <section class='red'>
          <div class='container'>
            <div class='title-box-perks'>
              <h1 class='title-box-perks' >PERKS</h1>
            </div>
            <div class='boxes-perks'>
            <div class='box-benefits-perks'>
              <hr id='white-line'/>
              <h4 class='box-benefits-ttl'>Subscription Payment Model</h4>
              <p class='benefits-txt-perks'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </div>
            
            <div class='box-benefits-perks'>
              <hr id='white-line'/>
              <h4 class='box-benefits-ttl'>No Fee Cancelation Policy</h4>
              <p class='benefits-txt-perks'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </div>
            
            <div class='box-benefits-perks'>
              <hr id='white-line'/>
              <h4 class='box-benefits-ttl'>Subscription Payment Model</h4>
              <p class='benefits-txt-perks'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
            </div>
          </div>
          </div>
      </section>
      <Footer/>
    </main>
    
  </body>

)
}

export default TryIt
