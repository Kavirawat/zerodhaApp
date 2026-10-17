import React, { useState, useContext } from "react";
import axios from "axios";

import GeneralContext from "./GeneralContext";
import { BACKEND_URL } from "../config";
import "./BuyActionWindow.css";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = async () => {
    if (stockQuantity <= 0) {
      alert("Please enter a valid quantity (minimum 1)");
      return;
    }
    if (stockPrice < 0) {
      alert("Please enter a valid price");
      return;
    }

    try {
      setIsSubmitting(true);
      const res = await axios.post(`${BACKEND_URL}/newOrder`, {
        name: uid,
        qty: Number(stockQuantity),
        price: Number(stockPrice),
        mode: "BUY",
      });

      alert(res.data.message || "Order placed successfully!");
      if (closeBuyWindow) {
        closeBuyWindow();
      }
    } catch (err) {
      console.error("Error while placing order:", err);
      alert("Failed to place order. Please check that the backend server is running.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancelClick = () => {
    if (closeBuyWindow) {
      closeBuyWindow();
    }
  };

  return (
    <div className="container" id="buy-window" draggable="true">
      <div className="regular-order">
        <h4 style={{ margin: "0 0 10px 0", color: "#4184f3" }}>Buy {uid}</h4>
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              name="qty"
              id="qty"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              name="price"
              id="price"
              step="0.05"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              min="0"
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        <span>Margin required ₹{(Number(stockQuantity) * Number(stockPrice || 140.65)).toFixed(2)}</span>
        <div>
          <button
            className="btn btn-blue"
            onClick={handleBuyClick}
            disabled={isSubmitting}
            style={{ border: "none", cursor: "pointer" }}
          >
            {isSubmitting ? "Placing..." : "Buy"}
          </button>
          <button
            className="btn btn-grey"
            onClick={handleCancelClick}
            style={{ border: "none", cursor: "pointer", marginLeft: "8px" }}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;