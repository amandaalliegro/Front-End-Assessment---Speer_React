import { Link } from "react-router-dom";

import './yellow.scss'

function Yellow(props){
  return (
    <section className='landing yellow-section'>
    <div id='btn-try-right'>
      <form action="/tryit" method="get" target="_blank">
      <button type='submit' class='select-btn-white' id='sel-white-yellow-float'> 
        <span>TRY IT NOW</span>
      </button>
    </form>
    </div> 
    <div class='img-bckgrnd'>
    <div class='front-row-container'>
      <div class='front-box' id='front-box-double-img'>

      </div>
      <div class='front-box' id='front-box-double-img-scd'>

      </div>
      <div class='front-box'>
        <h1 id='front-ttl'>front row seats</h1>
        <p id='front-txt'>Experience concerts up close and personal</p>
        <button class='select-btn-white' id='sel-white-yellow'> 
          <span>SEE DEMO</span>
        </button>
    </div>
    <div class='front-box' id='front-box-single-img'>
    </div>
    </div>
  </div>    
      
  </section>
  );
}

export default Yellow