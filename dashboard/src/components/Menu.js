import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import LogoutOutlinedIcon from "@mui/icons-material/LogoutOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import { FRONTEND_URL } from "../config";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("zerodha_theme") === "dark";
  });
  const location = useLocation();

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("dark-theme");
    } else {
      document.body.classList.remove("dark-theme");
    }
    localStorage.setItem("zerodha_theme", isDarkMode ? "dark" : "light");
  }, [isDarkMode]);

  useEffect(() => {
    const handleStorageChange = (e) => {
      if (e.key === "zerodha_theme") {
        setIsDarkMode(e.newValue === "dark");
      }
    };
    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const isActive = (path) => {
    if (path === "/" && location.pathname === "/") return true;
    if (path !== "/" && location.pathname.startsWith(path)) return true;
    return false;
  };

  useEffect(() => {
    
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    const userFromUrl = urlParams.get("user");

    if (tokenFromUrl && userFromUrl) {
      try {
        localStorage.setItem("zerodha_token", tokenFromUrl);
        localStorage.setItem("zerodha_user", decodeURIComponent(userFromUrl));
        
        window.history.replaceState({}, document.title, window.location.pathname);
      } catch (err) {
        console.error("Error setting session from URL:", err);
      }
    }

    const savedUser = localStorage.getItem("zerodha_user");
    if (savedUser) {
      try {
        setUser(JSON.parse(savedUser));
      } catch (err) {
        console.error("Error parsing user:", err);
      }
    }
  }, []);

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleProfileClick = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem("zerodha_token");
    localStorage.removeItem("zerodha_user");
    window.location.href = `${FRONTEND_URL}/signup`;
  };

  const menuClass = "menu";
  const activeMenuClass = "menu selected";

  const getInitials = (name) => {
    if (!name) return "ZU";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  return (
    <div className="menu-container">
      <img src="logo.png" style={{ width: "50px" }} alt="logo" />
      <div className="menus">
        <ul>
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={isActive("/") ? activeMenuClass : menuClass}>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p className={isActive("/orders") ? activeMenuClass : menuClass}>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p className={isActive("/holdings") ? activeMenuClass : menuClass}>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p className={isActive("/positions") ? activeMenuClass : menuClass}>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p className={isActive("/funds") ? activeMenuClass : menuClass}>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p className={isActive("/apps") ? activeMenuClass : menuClass}>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr />
        <div style={{ position: "relative" }} ref={dropdownRef}>
          <div className="profile" onClick={handleProfileClick} style={{ cursor: "pointer" }}>
            <div
              className="avatar"
              style={{
                overflow: "hidden",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                border: "1.5px solid #387ed1",
              }}
            >
              <img
                src="/kavi.JPG"
                alt="Profile"
                style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "50%" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerText = getInitials(user ? user.username : "");
                }}
              />
            </div>
            <p className="username">{user ? user.username : "USERID"}</p>
          </div>

          {isProfileDropdownOpen && (
            <div
              style={{
                position: "absolute",
                top: "50px",
                right: "0",
                backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
                boxShadow: isDarkMode ? "0px 6px 24px rgba(0,0,0,0.6)" : "0px 4px 16px rgba(0,0,0,0.15)",
                borderRadius: "8px",
                padding: "14px",
                width: "240px",
                zIndex: 1000,
                border: isDarkMode ? "1px solid #333" : "1px solid #eee",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "12px",
                  borderBottom: isDarkMode ? "1px solid #2a2a2a" : "1px solid #eee",
                  paddingBottom: "10px",
                }}
              >
                <div
                  style={{
                    width: "42px",
                    height: "42px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    marginRight: "10px",
                    flexShrink: 0,
                    border: "1.5px solid #387ed1",
                  }}
                >
                  <img
                    src="/kavi.JPG"
                    alt="Profile"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                    }}
                  />
                </div>
                <div style={{ overflow: "hidden" }}>
                  <strong
                    style={{
                      fontSize: "14px",
                      display: "block",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                      color: isDarkMode ? "#fff" : "#222",
                    }}
                  >
                    {user ? user.username : "Kavi Rawat"}
                  </strong>
                  <span
                    style={{
                      fontSize: "12px",
                      color: isDarkMode ? "#888" : "#666",
                      display: "block",
                      overflow: "hidden",
                      textOverflow: "ellipsis",
                      whiteSpace: "nowrap",
                    }}
                  >
                    {user ? user.email : "kavi@zerodha.local"}
                  </span>
                </div>
              </div>

              <div
                onClick={toggleDarkMode}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  padding: "9px 12px",
                  borderRadius: "6px",
                  backgroundColor: isDarkMode ? "#282828" : "#f8f9fa",
                  marginBottom: "8px",
                  cursor: "pointer",
                  border: isDarkMode ? "1px solid #3a3a3a" : "1px solid #e9ecef",
                  userSelect: "none",
                  transition: "background-color 0.2s ease",
                }}
                title="Toggle Dark Theme"
              >
                <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
                  {isDarkMode ? (
                    <LightModeOutlinedIcon style={{ fontSize: "19px", color: "#f5a623" }} />
                  ) : (
                    <DarkModeOutlinedIcon style={{ fontSize: "19px", color: "#5b6471" }} />
                  )}
                  <span
                    style={{
                      fontSize: "13px",
                      fontWeight: 600,
                      color: isDarkMode ? "#e0e0e0" : "#444",
                    }}
                  >
                    {isDarkMode ? "Light Mode" : "Dark Mode"}
                  </span>
                </div>
                
                <div
                  style={{
                    width: "36px",
                    height: "20px",
                    borderRadius: "10px",
                    backgroundColor: isDarkMode ? "#387ed1" : "#cfd4dc",
                    position: "relative",
                    transition: "background-color 0.25s ease",
                  }}
                >
                  <div
                    style={{
                      width: "14px",
                      height: "14px",
                      borderRadius: "50%",
                      backgroundColor: "#fff",
                      position: "absolute",
                      top: "3px",
                      left: isDarkMode ? "19px" : "3px",
                      transition: "left 0.25s ease",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.3)",
                    }}
                  />
                </div>
              </div>

              <a
                href={FRONTEND_URL}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: "#387ed1",
                  textDecoration: "none",
                  fontSize: "13px",
                  fontWeight: 600,
                  padding: "9px 12px",
                  borderRadius: "6px",
                  backgroundColor: isDarkMode ? "#182638" : "#f5f9ff",
                  marginBottom: "8px",
                  border: isDarkMode ? "1px solid #1f3d63" : "1px solid #d4e4fc",
                }}
                onClick={() => setIsProfileDropdownOpen(false)}
              >
                <HomeOutlinedIcon style={{ fontSize: "19px" }} />
                <span>Home</span>
              </a>
              <button
                onClick={handleLogout}
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "6px",
                  padding: "8px 12px",
                  background: isDarkMode ? "#2a1515" : "#fff",
                  color: "#ff4d4f",
                  border: isDarkMode ? "1px solid #5a2223" : "1px solid #ffa39e",
                  borderRadius: "6px",
                  cursor: "pointer",
                  fontSize: "12px",
                  fontWeight: 600,
                }}
              >
                <LogoutOutlinedIcon style={{ fontSize: "16px" }} />
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;
