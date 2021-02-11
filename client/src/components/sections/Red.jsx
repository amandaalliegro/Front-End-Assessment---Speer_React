

import './red.scss'
import sound from "../../public/assets/sound1.png"
import { Link } from "react-router-dom";

import Music from './Music';

function Red(props){
  return ( 
    <section className='landing fade-in-red'>
      <div id='btn-try-right'>
        <Link to="/plans">
          <form action="/plans" method="get" target="_blank">
            <button type='submit' class='select-btn-white' id='sel-white-float'> 
              <span>TRY IT NOW</span>
            </button>
          </form>
        </Link>
      </div>
        <div class='fade-in-container-sound'>
          <div class='sound-box'>
            <h1 id='sound-ttl'>SUPERIOR SOUND</h1>
            <p id='sound-txt'>Experience live versions of your favourite songs</p>
            <button class='select-btn-white'  id='sel-white'> 
              <span>SEE DEMO</span>
            </button>
          </div>
          <div class='sound-img' id='play'>
            <Music src='https://mp3trial.s3-sa-east-1.amazonaws.com/music.mp3'>
            <img id='sound' src={sound} alt='sound'/>
            </Music>
          </div>
        </div>
    </section>
  );
    
 
}

export default Red