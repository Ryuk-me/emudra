import React,{useContext} from 'react'
import { Helmet } from 'react-helmet'
import a from './pictures/homelayer10.webp'
import petrol from './pictures/petrol.webp'
import corn from './pictures/corn.webp'
import medicine from './pictures/medicine.webp'
import whitemedicine from './pictures/whitemedicine.png'
import './home.css'
import Transaction from './transactions/transaction.js'
import user from './pictures/user.png'
import welcome from "../Check";
import { TransactionContext } from '../context/TransactionContext';






const Home = (props) => {
  const {getAllTransactions,connectWallet} = useContext(TransactionContext) ; 
  return (
    <div className="home-container">
      <Helmet>
        <title>eMudra</title>
        <meta property="og:title" content="" />
      </Helmet>
      <div className="home-rectangle15">
        <span className="home-text">
          <span>Powering India and Indians</span>
        </span>
        <img
          alt="Layer10259"
          src={a}
          className="home-layer10"
        />
        <div className="home-rectangle6">
          <input type="text" className="home-textinput input" id='wid'/>
          <input
            type="text"
            placeholder="0"
            className="home-textinput1 input"
            id='amount'
          />
          <input type="checkbox" value="x" className="home-checkbox" id='check' />
          <span className="home-text02">
            <span>Enter Wallet ID:</span>
          </span>
          <span className="home-text04">
            <span>Enter Amount:</span>
          </span>
          <span className="home-text06">
            <span>Select Cause:</span>
          </span>
          <span className="home-text08">
            <span>I accept terms and conditions</span>
          </span>
          <select className="home-select" id='cause'>
            <option value="v1" selected>
              Fuel
            </option>
            <option value="v2">Food</option>
            <option value="v3">Medicine</option>
          </select>

          <button className="home-button button">PAY NOW</button>

        </div>
        <div className="home-subtract">
          <span className="home-text10">
            <span>Current Balance</span>
          </span>
          <div className="home-rectangle9">
            <img
              src={petrol}
              alt="Layer8256"
              className="home-layer8"
            />
          </div>
          <div className="home-rectangle7">
            <img
              src={corn}
              alt="Layer4255"
              className="home-layer4"
            />
          </div>
          <div className="home-rectangle8">
            <img
              src={medicine}
              alt="Layer6257"
              className="home-layer6"
            />
          </div>
          <span className="home-text12">
            <span>x4</span>
          </span>
          <span className="home-text14">
            <span>x4</span>
          </span>
          <span className="home-text16">
            <span>x4</span>
          </span>
        </div>
        <button className='connectwallet button' name='wallet' onClick={connectWallet}> Connect your wallet </button>
{/*         
        {currentAccount && (
          <><span className="home-text18">
          <span>Address:</span>
        </span>
        <span className="home-text20">
          <span class='wid'></span>
        </span></>
        )} */}
        
        
        <span className="home-image20">
          <span><img src={user}  style={{height:'86px'}}></img></span>
        </span>
        <span className="home-text22">
          <span>Recent Transactions:</span>
        </span>


        
        <div className="home-container1">
          {/* <div className="home-rectangle11">
            <img
              src={whitemedicine}
              alt="IMAGE1241"
              className="home-i-m-a-g-e1"
            />
            <span className="home-text24">
              <span>-2</span>
            </span>
            <span className="home-text26">
              <span>Nov 18, 2022 12:30 PM</span>
            </span>
          </div> */}

          <Transaction/>
          <Transaction/>
          <Transaction/>
          
          

          {/* <div className="home-rectangle111">
            <img
              src={whitemedicine}
              alt="IMAGE1241"
              className="home-i-m-a-g-e11"
            />
            <span className="home-text28">+6</span>
            <span className="home-text29">
              <span>Nov 18, 2022 12:30 PM</span>
            </span>
          </div> */}

          <span className="home-text31">
            <span>Load more...</span>
          </span>
        </div>




      </div>
    </div>
  )
}

export default Home
