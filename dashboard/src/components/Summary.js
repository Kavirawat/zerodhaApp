import React, { useState, useEffect } from "react";
import axios from "axios";
import { BACKEND_URL } from "../config";

const Summary = () => {
  const [holdings, setHoldings] = useState([]);
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    
    const savedUser = localStorage.getItem("zerodha_user");
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error("Failed to parse user", e);
      }
    }

    axios
      .get(`${BACKEND_URL}/allHoldings`)
      .then((res) => setHoldings(res.data))
      .catch((err) => console.error("Error fetching holdings for summary:", err));
  }, []);

  const totalInvestment = holdings.reduce(
    (acc, stock) => acc + (stock.avg || 0) * (stock.qty || 0),
    0
  );

  const currentValue = holdings.reduce(
    (acc, stock) => acc + (stock.price || 0) * (stock.qty || 0),
    0
  );

  const totalPL = currentValue - totalInvestment;
  const plPercentage =
    totalInvestment > 0 ? ((totalPL / totalInvestment) * 100).toFixed(2) : "0.00";

  return (
    <>
      <div className="username">
        <h6>Hi, {currentUser ? currentUser.username : "Trader"}!</h6>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Equity</p>
        </span>

        <div className="data">
          <div className="first">
            <h3>₹25.00k</h3>
            <p>Margin available</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Margins used <span>₹0.00</span>{" "}
            </p>
            <p>
              Opening balance <span>₹25.00k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>

      <div className="section">
        <span>
          <p>Holdings ({holdings.length})</p>
        </span>

        <div className="data">
          <div className="first">
            <h3 className={totalPL >= 0 ? "profit" : "loss"}>
              {totalPL >= 0 ? "+" : ""}₹{(totalPL / 1000).toFixed(2)}k{" "}
              <small>({totalPL >= 0 ? "+" : ""}{plPercentage}%)</small>
            </h3>
            <p>P&L</p>
          </div>
          <hr />

          <div className="second">
            <p>
              Current Value <span>₹{(currentValue / 1000).toFixed(2)}k</span>{" "}
            </p>
            <p>
              Investment <span>₹{(totalInvestment / 1000).toFixed(2)}k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="divider" />
      </div>
    </>
  );
};

export default Summary;
