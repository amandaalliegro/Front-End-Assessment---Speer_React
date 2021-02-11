import './red.scss'

function Red(props){
  return ( 
    <section className='landing fade-in-red'>
      <div id='btn-try-right'>
        <form action="/tryit" method="get" target="_blank">
        <button type='submit' class='select-btn-white' id='sel-white-float'> 
          <span>TRY IT NOW</span>
        </button>
      </form>
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
            <img id='sound' src="../../public/assets/sound1.png" alt='sound'/>
          </div>
        </div>
    </section>
  );
    
 
}

export default Red