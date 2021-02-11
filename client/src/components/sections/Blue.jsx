import { Link } from "react-router-dom";
import soundBox from "../../public/assets/BlackOne.png"

import './blue.scss'

function Blue(props){
  return (
    <section className='landing blue-marine'> 
      <div id='btn-try-right'>
        <form action="/tryit" method="get" target="_blank">
          <button type='submit'class='select-btn-white' id='sel-white-blue-float'> 
            <span>TRY IT NOW</span>
          </button>
        </form>
      </div>
      <div class='big-container'>
        <div class='img-box'>
          <img id='sound-1' src={soundBox} alt='sound'/>
          <img id='sound-2' src={soundBox} alt='sound'/>
        </div>
        <div class='container-blue-marine'>
          <div class='title-box-marine'>
            <h1 class='title-box-white'>reviews</h1>
          </div>
          <div class='boxes'>
            <div class='box-benefits'>
              <h4 id='stars'>★★★★★</h4>
              <h4 class='box-benefits' id='box-benefits'>ARTIST</h4>
              <p class='benefits-txt'>"Love it. It's the Best! I can't live without it!"</p>
            </div>
            <div class='box-benefits'>
              <h4 id='stars'>★★★★★</h4>
              <h4 class='box-benefits' id='box-benefits'>PRODUCER</h4>
              <p class='benefits-txt'>"Love it. It's the Best! I can't live without it!"</p>
            </div>
            <div class='box-benefits'>
              <h4 id='stars'>★★★★★</h4>
              <h4 class='box-benefits' id='box-benefits'>MUSIC FAN</h4>
              <p class='benefits-txt'>"Love it. It's the Best! I can't live without it!"</p>
            </div>
          </div>
        </div> 
      </div> 
    </section>
  );
}

export default Blue