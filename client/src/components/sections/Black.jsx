import { Link } from "react-router-dom";

import './black.scss'

function Black(props){
  return (
    <section class='black'>
      <div id='btn-try-right-mix'>
        <Link to="/plans">
          <button type='submit' href="/plans"class='try-btn-mix-noborder' id='tryIt-btn-mix'> 
            <span>TRY IT NOW</span>
          </button>
        </Link>
      </div> 
      <div class='container-black'>
        <div class='title-box'>
          <h1 class='title-box'>PERKS</h1>
        </div>
        <div class='boxes'>
          <div class='box-benefits'>
            <hr id='bnf-red-line'/>
            <h4 class='box-benefits' id='box-benefits-red'>Subscription Payment Model</h4>
            <p class='benefits-txt-white'>No commitment, cancel anytime. Never worry about forgetting a payment again</p>
          </div>
          <div class='box-benefits'>
            <hr id='bnf-blue-line'/>
            <h4 class='box-benefits' id='box-benefits-blue'>No Fee Cancelation Policy</h4>
            <p class='benefits-txt-white'>No commitment, cancel anytime. Never worry about forgetting a payment again</p>
          </div>
          <div class='box-benefits'>
            <hr id='bnf-yellow-line'/>
            <h4 class='box-benefits' id='box-benefits-yellow'>Subscription Payment Model</h4>
            <p class='benefits-txt-white'>No commitment, cancel anytime. Never worry about forgetting a payment again</p>
          </div>
        </div>
      </div> 
    </section>
  );
}

export default Black