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
          <h1 class='title-box-black'>PERKS</h1>
        </div>
        <div class='boxes-black'>
          <div class='box-benefits-black'>
            <hr id='bnf-red-line'/>
            <h4 class='box-benefits-black' id='box-benefits-red-black'>Subscription Payment Model</h4>
            <p class='benefits-txt-white'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
          <div class='box-benefits-black'>
            <hr id='bnf-blue-line'/>
            <h4 class='box-benefits-black' id='box-benefits-blue-black'>No Fee Cancelation Policy</h4>
            <p class='benefits-txt-white'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
          <div class='box-benefits-black'>
            <hr id='bnf-yellow-line'/>
            <h4 class='box-benefits-black' id='box-benefits-yellow-black'>Subscription Payment Model</h4>
            <p class='benefits-txt-white'>No commitment, cancel anytime. Never worry about forgetting a payment again!</p>
          </div>
        </div>
      </div> 
    </section>
  );
}

export default Black