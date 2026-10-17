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

import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import BusinessCenterOutlinedIcon from "@mui/icons-material/BusinessCenterOutlined";
import ShowChartOutlinedIcon from "@mui/icons-material/ShowChartOutlined";
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";

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

  return (
    <GeneralContextProvider>
      {/* Mobile Top Segmented Toggle */}
      <div className="mobile-view-toggle">
        <button
          className={`toggle-btn ${mobileTab === "watchlist" ? "active" : ""}`}
          onClick={() => setMobileTab("watchlist")}
        >
          📋 Watchlist
        </button>
        <button
          className={`toggle-btn ${mobileTab === "content" ? "active" : ""}`}
          onClick={() => setMobileTab("content")}
        >
          📊 {getPageTitle()}
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
          <FormatListBulletedIcon style={{ fontSize: "20px" }} />
          <span>Watchlist</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/")}
        >
          <HomeOutlinedIcon style={{ fontSize: "20px" }} />
          <span>Summary</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/orders" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/orders")}
        >
          <AccessTimeOutlinedIcon style={{ fontSize: "20px" }} />
          <span>Orders</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/holdings" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/holdings")}
        >
          <BusinessCenterOutlinedIcon style={{ fontSize: "20px" }} />
          <span>Holdings</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/positions" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/positions")}
        >
          <ShowChartOutlinedIcon style={{ fontSize: "20px" }} />
          <span>Positions</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/funds" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/funds")}
        >
          <AccountBalanceWalletOutlinedIcon style={{ fontSize: "20px" }} />
          <span>Funds</span>
        </button>

        <button
          className={`bottom-nav-item ${mobileTab === "content" && location.pathname === "/apps" ? "active" : ""}`}
          onClick={() => handleMobileNavClick("content", "/apps")}
        >
          <AppsOutlinedIcon style={{ fontSize: "20px" }} />
          <span>Apps</span>
        </button>
      </nav>
    </GeneralContextProvider>
  );
};

export default Dashboard;
