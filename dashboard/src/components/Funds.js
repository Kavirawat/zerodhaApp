import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  const handleAddFunds = (e) => {
    e.preventDefault();
    alert("Add Funds via UPI (GPay/PhonePe/Paytm) simulated: ₹10,000 added to trading balance!");
  };

  const handleWithdraw = (e) => {
    e.preventDefault();
    alert("Withdrawal request initiated: Amount will be credited to your linked primary bank account in 24 hours.");
  };

  return (
    <>
      <div className="funds">
        <p>Instant, zero-cost fund transfers with UPI </p>
        <Link to="#" onClick={handleAddFunds} className="btn btn-green">
          Add funds
        </Link>
        <Link to="#" onClick={handleWithdraw} className="btn btn-blue">
          Withdraw
        </Link>
      </div>

      <div className="row">
        <div className="col">
          <span>
            <p>Equity</p>
          </span>

          <div className="table">
            <div className="data">
              <p>Available margin</p>
              <p className="imp colored">₹25,043.10</p>
            </div>
            <div className="data">
              <p>Used margin</p>
              <p className="imp">₹3,757.30</p>
            </div>
            <div className="data">
              <p>Available cash</p>
              <p className="imp">₹25,043.10</p>
            </div>
            <hr />
            <div className="data">
              <p>Opening Balance</p>
              <p>₹25,043.10</p>
            </div>
            <div className="data">
              <p>Payin</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>SPAN</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Delivery margin</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Exposure</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Options premium</p>
              <p>₹0.00</p>
            </div>
            <hr />
            <div className="data">
              <p>Collateral (Liquid funds)</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Collateral (Equity)</p>
              <p>₹0.00</p>
            </div>
            <div className="data">
              <p>Total Collateral</p>
              <p>₹0.00</p>
            </div>
          </div>
        </div>

        <div className="col">
          <div className="commodity">
            <p>You don't have a commodity account</p>
            <Link
              to="#"
              onClick={(e) => {
                e.preventDefault();
                alert("MCX Commodity segment activation initiated!");
              }}
              className="btn btn-blue"
            >
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
