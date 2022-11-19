import React, { useContext } from "react";
import { Helmet } from "react-helmet";
import a from "./pictures/homelayer10.webp";
import petrol from "./pictures/petrol.webp";
import corn from "./pictures/corn.webp";
import medicine from "./pictures/medicine.webp";
import whitemedicine from "./pictures/whitemedicine.png";
import "./home.css";
import Transaction from "./transactions/transaction.js";
import user from "./pictures/user.png";
import welcome from "../Check";
import { TransactionContext } from "../context/TransactionContext";
import { isHexString } from "ethers/lib/utils";
import { shortenAddress } from "../utils/constant";
const { ethereum } = window;
const Home = (props) => {
  const { getAllTransactions, connectWallet, currentAccount } =
    useContext(TransactionContext);
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
        <img alt="Layer10259" src={a} className="home-layer10" />
        <div className="home-rectangle6">
          <input
            type="text"
            className="home-textinput input"
            id="wid"
            value={shortenAddress("0x5b32534a891c1ad6a00a73d3b2d54215c82d98e7")}
            disabled
            style={{
              cursor: "not-allowed",
              color: "black",
              fontWeight: "bold",
            }}
          />
          <input
            type="text"
            placeholder="0"
            className="home-textinput1 input"
            id="amount"
          />
          <input
            type="checkbox"
            value="x"
            className="home-checkbox"
            id="check"
          />
          <span className="home-text02">
            <span>Payee Address:</span>
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
          <select className="home-select" id="cause">
            <option value="v1" selected>
              Fuel
            </option>
            <option value="v2">Food</option>
            <option value="v3">Medicine</option>
          </select>

          <button
            className="home-button button"
            id='btx'
            style={{
              cursor: isHexString(currentAccount) ? "auto" : "not-allowed",
            }
          }
          >
            PAY NOW
          </button>
        </div>
        {isHexString(currentAccount) && (
          <div className="home-subtract">
            <span className="home-text10">
              <span>Current Balance</span>
            </span>
            <div className="home-rectangle9">
              <img src={petrol} alt="Layer8256" className="home-layer8" />
            </div>
            <div className="home-rectangle7">
              <img src={corn} alt="Layer4255" className="home-layer4" />
            </div>
            <div className="home-rectangle8">
              <img src={medicine} alt="Layer6257" className="home-layer6" />
            </div>
            <span className="home-text12">
              <span>x2</span>
            </span>
            <span className="home-text14">
              <span>x1</span>
            </span>
            <span className="home-text16">
              <span>x</span><span id="change">2</span>
            </span>
          </div>
        )}
        {!isHexString(currentAccount) && (
          <button
            className="connectwallet button"
            name="wallet"
            onClick={connectWallet}
          >
            {" "}
            Connect your wallet{" "}
          </button>
        )}
        {isHexString(currentAccount) && (
          <>
            <span className="home-image20">
              <span className="home-text30">
                {shortenAddress(currentAccount)}
              </span>
              <span>
                <img src={user} style={{ height: "86px" }}></img>
              </span>
            </span>
            <span className="home-text22">
              <span>Recent Transactions:</span>
            </span>
          </>
        )}

        {/* {currentAccount && (
          <><span className="home-text18">
          <span>Address:</span>
        </span>
        <span className="home-text20">
          <span class='wid'></span>
        </span></>
        )} */}

        {isHexString(currentAccount) && (
          <div className="home-container1">
            <Transaction />
            <Transaction />
            <Transaction />

            <span className="home-text31">
              {/* <span>Load more...</span> */}
            </span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
