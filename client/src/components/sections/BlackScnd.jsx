import { Link } from "react-router-dom";

import './blackScnd.scss'

function BlackScnd(props){
  return (
    <section class='black-scnd'>
      <div class='boxes-container'>
        <div class='title-box'>
          <h1 class='title-box-red'>Get exp|con now</h1>
          <p id='txt-black'>Purchase and download the app.</p>
        </div>
        <div id='btn-try-center-mix'>
          <form action="/tryit" method="get" target="_blank">
            <button type="submit" class='try-btn-mix-noborder' id='tryIt-btn-multi-color-slider'> TRY IT NOW</button>
          </form>
        </div> 
      </div>
       
    </section>
  );
}

export default BlackScnd