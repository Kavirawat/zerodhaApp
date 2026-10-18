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
import { getFrontendUrl } from "../config";

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

  const handleReturnHome = (e) => {
    if (e) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      if (typeof e.stopPropagation === "function") e.stopPropagation();
    }
    window.location.href = getFrontendUrl();
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
        return "fas fa-layer-group";
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
          <i className="fas fa-chart-line" style={{ marginRight: "6px" }}></i>
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

      {/* Kite-style Mobile Bottom Navigation Bar with Home */}
      <nav className="mobile-bottom-nav">
        <a
          href={getFrontendUrl()}
          onClick={handleReturnHome}
          className="bottom-nav-item home-nav-item"
          title="Home"
        >
          <i className="fas fa-home" style={{ fontSize: "16px" }}></i>
          <span>Home</span>
        </a>

        <button
          className={`bottom-nav-item ${mobileTab === "watchlist" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("watchlist")}
          title="Watchlist"
        >
          <i className="fas fa-chart-line" style={{ fontSize: "16px" }}></i>
          <span>Watchlist</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/")}
          title="Dashboard Summary"
        >
          <i className="fas fa-tachometer-alt" style={{ fontSize: "16px" }}></i>
          <span>Summary</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/orders" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/orders")}
          title="Orders"
        >
          <i className="fas fa-clock" style={{ fontSize: "16px" }}></i>
          <span>Orders</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/holdings" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/holdings")}
          title="Holdings"
        >
          <i className="fas fa-briefcase" style={{ fontSize: "16px" }}></i>
          <span>Holdings</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/positions" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/positions")}
          title="Positions"
        >
          <i className="fas fa-layer-group" style={{ fontSize: "16px" }}></i>
          <span>Positions</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/funds" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/funds")}
          title="Funds"
        >
          <i className="fas fa-wallet" style={{ fontSize: "16px" }}></i>
          <span>Funds</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/apps" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/apps")}
          title="Apps"
        >
          <i className="fas fa-th-large" style={{ fontSize: "16px" }}></i>
          <span>Apps</span>
        </button>
      </nav>
    </GeneralContextProvider>
  );
};

export default Dashboard;
