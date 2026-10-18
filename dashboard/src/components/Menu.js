import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { getFrontendUrl } from "../config";

const Menu = () => {
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("zerodha_theme") === "dark";
  });
  const location = useLocation();
  const frontendUrl = getFrontendUrl();

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

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
    const frontendFromUrl = urlParams.get("frontend");

    if (frontendFromUrl) {
      try {
        localStorage.setItem("zerodha_frontend_url", decodeURIComponent(frontendFromUrl));
      } catch (e) {
        console.error("Error setting frontend url from params:", e);
      }
    }

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

  const handleReturnHome = (e) => {
    if (e) {
      if (typeof e.preventDefault === "function") e.preventDefault();
      if (typeof e.stopPropagation === "function") e.stopPropagation();
    }
    setIsProfileDropdownOpen(false);
    setIsMobileMenuOpen(false);
    const target = getFrontendUrl();
    window.location.href = target;
  };

  const handleLogout = () => {
    localStorage.removeItem("zerodha_token");
    localStorage.removeItem("zerodha_user");
    window.location.href = `${getFrontendUrl()}/login`;
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
      <a
        href={frontendUrl}
        onClick={handleReturnHome}
        style={{ display: "flex", alignItems: "center", textDecoration: "none" }}
        title="Home"
      >
        <img src="logo.png" style={{ width: "42px", height: "auto" }} alt="logo" />
      </a>
      <div className="menus">
        <ul className="desktop-menu-list">
          <li>
            <Link style={{ textDecoration: "none" }} to="/">
              <p className={isActive("/") ? activeMenuClass : menuClass} style={{ display: "flex", alignItems: "center" }}>
                <i className="fas fa-tachometer-alt" style={{ marginRight: "6px" }}></i>
                Dashboard
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/orders">
              <p className={isActive("/orders") ? activeMenuClass : menuClass} style={{ display: "flex", alignItems: "center" }}>
                <i className="fas fa-clock" style={{ marginRight: "6px" }}></i>
                Orders
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/holdings">
              <p className={isActive("/holdings") ? activeMenuClass : menuClass} style={{ display: "flex", alignItems: "center" }}>
                <i className="fas fa-briefcase" style={{ marginRight: "6px" }}></i>
                Holdings
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/positions">
              <p className={isActive("/positions") ? activeMenuClass : menuClass} style={{ display: "flex", alignItems: "center" }}>
                <i className="fas fa-layer-group" style={{ marginRight: "6px" }}></i>
                Positions
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/funds">
              <p className={isActive("/funds") ? activeMenuClass : menuClass} style={{ display: "flex", alignItems: "center" }}>
                <i className="fas fa-wallet" style={{ marginRight: "6px" }}></i>
                Funds
              </p>
            </Link>
          </li>
          <li>
            <Link style={{ textDecoration: "none" }} to="/apps">
              <p className={isActive("/apps") ? activeMenuClass : menuClass} style={{ display: "flex", alignItems: "center" }}>
                <i className="fas fa-th-large" style={{ marginRight: "6px" }}></i>
                Apps
              </p>
            </Link>
          </li>
        </ul>
        <hr className="desktop-hr" />
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
                  <i
                    className={isDarkMode ? "fas fa-sun" : "fas fa-moon"}
                    style={{
                      fontSize: "16px",
                      color: isDarkMode ? "#f5a623" : "#5b6471",
                      width: "18px",
                      textAlign: "center",
                    }}
                  ></i>
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
                href={frontendUrl}
                onClick={handleReturnHome}
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
                  cursor: "pointer",
                }}
              >
                <i className="fas fa-home" style={{ fontSize: "16px", width: "18px", textAlign: "center" }}></i>
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
                <i className="fas fa-sign-out-alt" style={{ fontSize: "15px" }}></i>
                <span>Logout</span>
              </button>
            </div>
          )}
        </div>

        <button
          className="mobile-hamburger-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? (
            <i className="fas fa-times" style={{ fontSize: "22px" }}></i>
          ) : (
            <i className="fas fa-bars" style={{ fontSize: "20px" }}></i>
          )}
        </button>
      </div>

      {isMobileMenuOpen && (
        <div className="mobile-nav-drawer">
          <a
            href={frontendUrl}
            onClick={handleReturnHome}
            className="mobile-nav-link"
            style={{ color: "#387ed1", fontWeight: 600, cursor: "pointer" }}
          >
            <i className="fas fa-home" style={{ width: "22px", textAlign: "center", marginRight: "10px" }}></i>
            Home
          </a>
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive("/") ? "active" : ""}`}>
            <i className="fas fa-tachometer-alt" style={{ width: "22px", textAlign: "center", marginRight: "10px", color: isActive("/") ? "#387ed1" : "inherit" }}></i>
            Dashboard
          </Link>
          <Link to="/orders" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive("/orders") ? "active" : ""}`}>
            <i className="fas fa-clock" style={{ width: "22px", textAlign: "center", marginRight: "10px", color: isActive("/orders") ? "#387ed1" : "inherit" }}></i>
            Orders
          </Link>
          <Link to="/holdings" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive("/holdings") ? "active" : ""}`}>
            <i className="fas fa-briefcase" style={{ width: "22px", textAlign: "center", marginRight: "10px", color: isActive("/holdings") ? "#387ed1" : "inherit" }}></i>
            Holdings
          </Link>
          <Link to="/positions" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive("/positions") ? "active" : ""}`}>
            <i className="fas fa-layer-group" style={{ width: "22px", textAlign: "center", marginRight: "10px", color: isActive("/positions") ? "#387ed1" : "inherit" }}></i>
            Positions
          </Link>
          <Link to="/funds" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive("/funds") ? "active" : ""}`}>
            <i className="fas fa-wallet" style={{ width: "22px", textAlign: "center", marginRight: "10px", color: isActive("/funds") ? "#387ed1" : "inherit" }}></i>
            Funds
          </Link>
          <Link to="/apps" onClick={() => setIsMobileMenuOpen(false)} className={`mobile-nav-link ${isActive("/apps") ? "active" : ""}`}>
            <i className="fas fa-th-large" style={{ width: "22px", textAlign: "center", marginRight: "10px", color: isActive("/apps") ? "#387ed1" : "inherit" }}></i>
            Apps
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
