import React, { useState, useEffect } from "react";
import axios from "axios";
import Menu from "./Menu";
import { BACKEND_URL } from "../config";

const TopBar = () => {
  const [indices, setIndices] = useState({
    nifty: { price: 23146.15, change: 148.85, percent: 0.65, isLoss: false },
    sensex: { price: 74729.27, change: 413.67, percent: 0.56, isLoss: false },
  });

  useEffect(() => {
    const fetchIndices = () => {
      axios
        .get(`${BACKEND_URL}/liveMarket`)
        .then((res) => {
          if (res.data && res.data.items) {
            const niftyItem = res.data.items.find((i) => i.symbol === "^NSEI");
            const sensexItem = res.data.items.find((i) => i.symbol === "^BSESN");

            setIndices({
              nifty: {
                price: niftyItem ? niftyItem.price : 23146.15,
                change: niftyItem ? niftyItem.change : 148.85,
                percent: niftyItem ? niftyItem.changePercent : 0.65,
                isLoss: niftyItem ? niftyItem.isLoss : false,
              },
              sensex: {
                price: sensexItem ? sensexItem.price : 74729.27,
                change: sensexItem ? sensexItem.change : 413.67,
                percent: sensexItem ? sensexItem.changePercent : 0.56,
                isLoss: sensexItem ? sensexItem.isLoss : false,
              },
            });
          }
        })
        .catch((err) => {
          console.error("TopBar live indices fetch error:", err);
        });
    };

    fetchIndices();
    const interval = setInterval(fetchIndices, 30000); 
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="topbar-container">
      <div className="indices-container">
        <div className="nifty">
          <p className="index">NIFTY 50</p>
          <p className="index-points">
            {indices.nifty.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </p>
          <p className={`percent ${indices.nifty.isLoss ? "loss" : "profit"}`} style={{ fontSize: "11px", marginLeft: "6px" }}>
            {indices.nifty.isLoss ? "" : "+"}
            {indices.nifty.change} ({indices.nifty.isLoss ? "" : "+"}
            {indices.nifty.percent}%)
          </p>
        </div>
        <div className="sensex">
          <p className="index">SENSEX</p>
          <p className="index-points">
            {indices.sensex.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })}
          </p>
          <p className={`percent ${indices.sensex.isLoss ? "loss" : "profit"}`} style={{ fontSize: "11px", marginLeft: "6px" }}>
            {indices.sensex.isLoss ? "" : "+"}
            {indices.sensex.change} ({indices.sensex.isLoss ? "" : "+"}
            {indices.sensex.percent}%)
          </p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
