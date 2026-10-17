import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";
import { Tooltip, Grow } from "@mui/material";
import {
  BarChartOutlined,
  KeyboardArrowDown,
  KeyboardArrowUp,
  MoreHoriz,
} from "@mui/icons-material";
import { DoughnutChart } from "./DoughnoutChart";
import { BACKEND_URL } from "../config";

const WatchList = () => {
  const [stocks, setStocks] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);

  const fetchLiveQuotes = () => {
    axios
      .get(`${BACKEND_URL}/liveMarket`)
      .then((res) => {
        if (res.data && res.data.items && res.data.items.length > 0) {
          setStocks(res.data.items);
        }
        setLoading(false);
      })
      .catch((err) => {
        console.error("Watchlist live fetch error:", err);
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchLiveQuotes();
    const interval = setInterval(fetchLiveQuotes, 30000); 
    return () => clearInterval(interval);
  }, []);

  const filteredStocks = stocks.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    (stock.symbol && stock.symbol.toLowerCase().includes(searchTerm.toLowerCase()))
  );

  const chartStocks = stocks.slice(0, 7); 
  const labels = chartStocks.map((s) => s.name);
  const data = {
    labels,
    datasets: [
      {
        label: "Price (₹)",
        data: chartStocks.map((s) => s.price),
        backgroundColor: [
          "rgba(255, 99, 132, 0.6)",
          "rgba(54, 162, 235, 0.6)",
          "rgba(255, 206, 86, 0.6)",
          "rgba(75, 192, 192, 0.6)",
          "rgba(153, 102, 255, 0.6)",
          "rgba(255, 159, 64, 0.6)",
          "rgba(46, 204, 113, 0.6)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
          "rgba(46, 204, 113, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="watchlist-container">
      
      <div className="search-container">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg: infy, bse, nifty, tcs, reliance"
          className="search"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <span className="counts">
          {filteredStocks.length} / {stocks.length}
        </span>
      </div>

      <ul className="list">
        {loading && stocks.length === 0 ? (
          <li style={{ padding: "20px", color: "#888", fontSize: "13px", textAlign: "center" }}>
            Loading live market data...
          </li>
        ) : filteredStocks.length === 0 ? (
          <li style={{ padding: "20px", color: "#888", fontSize: "13px", textAlign: "center" }}>
            No matching stocks found
          </li>
        ) : (
          filteredStocks.map((stock, index) => {
            return <WatchListItem stock={stock} key={stock.symbol || index} />;
          })
        )}
      </ul>

      {labels.length > 0 && <DoughnutChart data={data} />}
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const [showWatchlistActions, setShowWatchlistActions] = useState(false);

  const handleMouseEnter = () => {
    setShowWatchlistActions(true);
  };

  const handleMouseLeave = () => {
    setShowWatchlistActions(false);
  };

  const isDown = stock.isLoss || (stock.changePercent !== undefined && stock.changePercent < 0);
  const formattedPercent =
    stock.changePercent !== undefined
      ? `${stock.changePercent > 0 ? "+" : ""}${stock.changePercent}%`
      : stock.percent || "0.00%";

  return (
    <li
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={() => setShowWatchlistActions((prev) => !prev)}
      style={{ cursor: "pointer" }}
    >
      <div className="item">
        <p className={isDown ? "down" : "up"}>{stock.name}</p>
        <div className="itemInfo">
          <span className="percent">{formattedPercent}</span>
          {isDown ? (
            <KeyboardArrowDown className="down" />
          ) : (
            <KeyboardArrowUp className="up" />
          )}
          <span className="price">
            {typeof stock.price === "number"
              ? stock.price.toLocaleString("en-IN", { minimumFractionDigits: 2 })
              : stock.price}
          </span>
        </div>
      </div>
      {showWatchlistActions && <WatchListActions uid={stock.name} price={stock.price} />}
    </li>
  );
};

const WatchListActions = ({ uid, price }) => {
  const generalContext = useContext(GeneralContext);

  const handleBuyClick = (e) => {
    if (e && e.stopPropagation) e.stopPropagation();
    if (generalContext && generalContext.openBuyWindow) {
      generalContext.openBuyWindow(uid);
    }
  };

  return (
    <span className="actions" onClick={(e) => e.stopPropagation()}>
      <span>
        <Tooltip
          title="Buy (B)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="buy" onClick={handleBuyClick}>Buy</button>
        </Tooltip>
        <Tooltip
          title="Sell (S)"
          placement="top"
          arrow
          TransitionComponent={Grow}
          onClick={handleBuyClick}
        >
          <button className="sell" onClick={handleBuyClick}>Sell</button>
        </Tooltip>
        <Tooltip
          title="Analytics (A)"
          placement="top"
          arrow
          TransitionComponent={Grow}
        >
          <button className="action">
            <BarChartOutlined className="icon" />
          </button>
        </Tooltip>
        <Tooltip title="More" placement="top" arrow TransitionComponent={Grow}>
          <button className="action">
            <MoreHoriz className="icon" />
          </button>
        </Tooltip>
      </span>
    </span>
  );
};
