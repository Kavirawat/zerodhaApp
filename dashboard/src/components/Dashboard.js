import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";
import { GeneralContextProvider } from "./GeneralContext";


const Dashboard = () => {
  const [mobileTab, setMobileTab] = useState("watchlist");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    // If user navigates directly to a subpage on mobile, switch to content view
    if (location.pathname !== "/" || location.search) {
      setMobileTab("content");
    }
  }, [location.pathname, location.search]);

  const handleMobileNavClick = (tab, path) => {
    if (tab === "watchlist") {
      setMobileTab("watchlist");
    } else {
      setMobileTab("content");
      if (path && location.pathname !== path) {
        navigate(path);
      }
    }
  };

  const getPageTitle = () => {
    switch (location.pathname) {
      case "/orders":
        return "Orders";
      case "/holdings":
        return "Holdings";
      case "/positions":
        return "Positions";
      case "/funds":
        return "Funds";
      case "/apps":
        return "Apps";
      default:
        return "Summary";
    }
  };

  const getPageIcon = () => {
    switch (location.pathname) {
      case "/orders":
        return "fas fa-clock";
      case "/holdings":
        return "fas fa-briefcase";
      case "/positions":
        return "fas fa-chart-line";
      case "/funds":
        return "fas fa-wallet";
      case "/apps":
        return "fas fa-th-large";
      default:
        return "fas fa-tachometer-alt";
    }
  };

  return (
    <GeneralContextProvider>
      {/* Mobile Top Segmented Toggle */}
      <div className="mobile-view-toggle">
        <button
          className={`toggle-btn ${mobileTab === "watchlist" ? "active" : ""}`}
          onClick={() => setMobileTab("watchlist")}
        >
          <i className="fas fa-bookmark" style={{ marginRight: "6px" }}></i>
          Watchlist
        </button>
        <button
          className={`toggle-btn ${mobileTab === "content" ? "active" : ""}`}
          onClick={() => setMobileTab("content")}
        >
          <i className={getPageIcon()} style={{ marginRight: "6px" }}></i>
          {getPageTitle()}
        </button>
      </div>

      <div className={`dashboard-container ${mobileTab === "watchlist" ? "view-watchlist" : "view-content"}`}>
        <WatchList />
        <div className="content">
          <Routes>
            <Route exact path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />
            <Route path="/funds" element={<Funds />} />
            <Route path="/apps" element={<Apps />} />
          </Routes>
        </div>
      </div>

      {/* Kite-style Mobile Bottom Navigation Bar */}
      <nav className="mobile-bottom-nav">
        <button
          className={`bottom-nav-item ${mobileTab === "watchlist" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("watchlist")}
        >
          <i className="fas fa-bookmark" style={{ fontSize: "18px" }}></i>
          <span>Watchlist</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/")}
        >
          <i className="fas fa-tachometer-alt" style={{ fontSize: "18px" }}></i>
          <span>Summary</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/orders" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/orders")}
        >
          <i className="fas fa-clock" style={{ fontSize: "18px" }}></i>
          <span>Orders</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/holdings" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/holdings")}
        >
          <i className="fas fa-briefcase" style={{ fontSize: "18px" }}></i>
          <span>Holdings</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/positions" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/positions")}
        >
          <i className="fas fa-chart-line" style={{ fontSize: "18px" }}></i>
          <span>Positions</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/funds" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/funds")}
        >
          <i className="fas fa-wallet" style={{ fontSize: "18px" }}></i>
          <span>Funds</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/apps" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/apps")}
        >
          <i className="fas fa-th-large" style={{ fontSize: "18px" }}></i>
          <span>Apps</span>
        </button>
      </nav>
    </GeneralContextProvider>
  );
};

export default Dashboard;
