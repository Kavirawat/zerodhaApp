import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { getDashboardUrl } from "../config";

function Navbar() {
  const [currentUser, setCurrentUser] = useState(null);
  const [isProfileOpen, setIsProfileOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("zerodha_theme") === "dark";
  });
  const dropdownRef = useRef(null);

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

  useEffect(() => {
    const checkUser = () => {
      const savedUser = localStorage.getItem("zerodha_user");
      if (savedUser) {
        try {
          setCurrentUser(JSON.parse(savedUser));
        } catch (e) {
          console.error("Error parsing user:", e);
        }
      } else {
        setCurrentUser(null);
      }
    };

    checkUser();
    window.addEventListener("storage", checkUser);
    return () => window.removeEventListener("storage", checkUser);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsProfileOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("zerodha_token");
    localStorage.removeItem("zerodha_user");
    setCurrentUser(null);
    setIsProfileOpen(false);
    window.location.reload();
  };

  const handleDashboardNav = (e, subPath = "/") => {
    if (e && typeof e.preventDefault === "function") e.preventDefault();
    setIsProfileOpen(false);
    const token = localStorage.getItem("zerodha_token");
    if (!token || !currentUser) {
      sessionStorage.setItem("redirect_after_login", subPath);
      window.location.href = "/login";
      return;
    }
    window.location.href = getDashboardUrl(subPath);
  };

  const getInitials = (name) => {
    if (!name) return "KR";
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .substring(0, 2);
  };

  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const getLinkStyle = (path) => {
    const active = isActive(path);
    return {
      color: active ? "#387ed1" : (isDarkMode ? "#ffffff" : "rgb(102, 102, 102)"),
      fontWeight: active ? "600" : "500",
      textDecoration: "none",
      transition: "color 0.2s ease",
    };
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom sticky-top"
      style={{
        backgroundColor: isDarkMode ? "#181818" : "#fff",
        borderColor: isDarkMode ? "#282828" : "#eef0f3",
        zIndex: 1050,
      }}
    >
      <div className="container p-2">
        
        <Link className="navbar-brand" to="/">
          <img
            src="/Media/Images/logo.svg"
            alt="Zerodha Logo"
            style={{ width: "130px" }}
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = "Media/Images/logo.svg";
            }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-lg-center">
            {!currentUser && (
              <Link to="/signup" className="nav-link px-3" style={getLinkStyle("/signup")}>
                Signup
              </Link>
            )}
            <Link to="/about" className="nav-link px-3" style={getLinkStyle("/about")}>
              About
            </Link>
            <Link to="/products" className="nav-link px-3" style={getLinkStyle("/products")}>
              Products
            </Link>
            <Link to="/pricing" className="nav-link px-3" style={getLinkStyle("/pricing")}>
              Pricing
            </Link>
            <Link to="/support" className="nav-link px-3" style={getLinkStyle("/support")}>
              Support
            </Link>
            <a
              href={currentUser ? getDashboardUrl("/") : "/login"}
              onClick={(e) => handleDashboardNav(e, "/")}
              className="nav-link px-3"
              style={getLinkStyle("/dashboard")}
              title="Kite Trading Dashboard"
            >
              Dashboard
            </a>

            <div className="nav-item ms-lg-3 position-relative" ref={dropdownRef}>
              <div
                onClick={() => setIsProfileOpen(!isProfileOpen)}
                style={{
                  display: "flex",
                  alignItems: "center",
                  cursor: "pointer",
                  padding: "4px 8px",
                  borderRadius: "24px",
                  border: isProfileOpen
                    ? "1px solid #387ed1"
                    : isDarkMode
                    ? "1px solid #383838"
                    : "1px solid #e0e0e0",
                  backgroundColor: isProfileOpen
                    ? isDarkMode
                      ? "#242424"
                      : "#f5f9ff"
                    : isDarkMode
                    ? "#1e1e1e"
                    : "#fff",
                  transition: "all 0.2s ease",
                }}
                title={currentUser ? currentUser.username : "Profile"}
              >
                
                <div
                  style={{
                    width: "36px",
                    height: "36px",
                    borderRadius: "50%",
                    overflow: "hidden",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    backgroundColor: "#e8f0fe",
                    color: "#387ed1",
                    fontWeight: 600,
                    fontSize: "14px",
                    marginRight: "6px",
                    border: "1.5px solid #387ed1",
                  }}
                >
                  <img
                    src="/kavi.JPG"
                    alt="Profile"
                    style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.innerText = getInitials(
                        currentUser ? currentUser.username : "Kavi Rawat"
                      );
                    }}
                  />
                </div>

                <span
                  style={{
                    fontSize: "13px",
                    fontWeight: 600,
                    color: isDarkMode ? "#ffffff" : "#444",
                    maxWidth: "90px",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    whiteSpace: "nowrap",
                  }}
                >
                  {currentUser ? currentUser.username : "Profile"}
                </span>

                <i
                  className={`fas fa-chevron-${isProfileOpen ? "up" : "down"} ms-2`}
                  style={{ fontSize: "11px", color: isDarkMode ? "#ffffff" : "#888" }}
                ></i>
              </div>

              {isProfileOpen && (
                <div
                  className="shadow"
                  style={{
                    position: "absolute",
                    top: "48px",
                    right: "0",
                    width: "min(280px, calc(100vw - 32px))",
                    backgroundColor: isDarkMode ? "#1e1e1e" : "#fff",
                    borderRadius: "10px",
                    border: isDarkMode ? "1px solid #333" : "1px solid #eef0f3",
                    padding: "16px",
                    zIndex: 2000,
                    animation: "fadeIn 0.15s ease",
                  }}
                >
                  
                  <div
                    className="d-flex align-items-center pb-3 mb-3"
                    style={{ borderBottom: isDarkMode ? "1px solid #2d2d2d" : "1px solid #dee2e6" }}
                  >
                    <div
                      style={{
                        width: "50px",
                        height: "50px",
                        borderRadius: "50%",
                        overflow: "hidden",
                        backgroundColor: "#e8f0fe",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        color: "#387ed1",
                        fontWeight: 700,
                        fontSize: "18px",
                        marginRight: "12px",
                        border: "2px solid #387ed1",
                        flexShrink: 0,
                      }}
                    >
                      <img
                        src="/kavi.JPG"
                        alt="Profile"
                        style={{ width: "100%", height: "100%", objectFit: "cover" }}
                        onError={(e) => {
                          e.target.style.display = "none";
                          e.target.parentElement.innerText = getInitials(
                            currentUser ? currentUser.username : "Kavi Rawat"
                          );
                        }}
                      />
                    </div>
                    <div style={{ overflow: "hidden" }}>
                      <div
                        style={{
                          fontWeight: 700,
                          fontSize: "15px",
                          color: isDarkMode ? "#f0f0f0" : "#333",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {currentUser ? currentUser.username : "Kavi Rawat"}
                      </div>
                      <div
                        style={{
                          fontSize: "12px",
                          color: isDarkMode ? "#888" : "#777",
                          textOverflow: "ellipsis",
                          overflow: "hidden",
                          whiteSpace: "nowrap",
                        }}
                      >
                        {currentUser ? currentUser.email : "kavi@zerodha.local"}
                      </div>
                      <span
                        className="badge mt-1"
                        style={{
                          backgroundColor: isDarkMode ? "#1b382b" : "#e6f4ea",
                          color: isDarkMode ? "#5cd685" : "#137333",
                          fontSize: "10px",
                          fontWeight: 600,
                        }}
                      >
                        {currentUser ? "VERIFIED TRADER" : "GUEST ACCOUNT"}
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
                      marginBottom: "10px",
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
                          fontSize: "14px",
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

                  <div className="d-flex flex-column gap-1 mb-2">
                    <a
                      href={currentUser ? getDashboardUrl("/") : "/login"}
                      className="text-decoration-none py-2 px-2 rounded"
                      style={{
                        color: "#387ed1",
                        fontWeight: 600,
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        backgroundColor: isDarkMode ? "#182638" : "#f5f9ff",
                        border: isDarkMode ? "1px solid #1f3d63" : "none",
                        cursor: "pointer",
                      }}
                      onClick={(e) => handleDashboardNav(e, "/")}
                    >
                      <i className="fas fa-chart-line me-2" style={{ width: "18px" }}></i>
                      Open Kite Dashboard
                    </a>

                    <a
                      href={currentUser ? getDashboardUrl("/holdings") : "/login"}
                      className="text-decoration-none py-2 px-2 rounded"
                      style={{
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: isDarkMode ? "#ccc" : "#6c757d",
                        cursor: "pointer",
                      }}
                      onClick={(e) => handleDashboardNav(e, "/holdings")}
                    >
                      <i className="fas fa-briefcase me-2" style={{ width: "18px" }}></i>
                      Holdings & Portfolio
                    </a>

                    <a
                      href={currentUser ? getDashboardUrl("/orders") : "/login"}
                      className="text-decoration-none py-2 px-2 rounded"
                      style={{
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: isDarkMode ? "#ccc" : "#6c757d",
                        cursor: "pointer",
                      }}
                      onClick={(e) => handleDashboardNav(e, "/orders")}
                    >
                      <i className="fas fa-history me-2" style={{ width: "18px" }}></i>
                      Orders History
                    </a>

                    <a
                      href={currentUser ? getDashboardUrl("/funds") : "/login"}
                      className="text-decoration-none py-2 px-2 rounded"
                      style={{
                        fontSize: "13px",
                        display: "flex",
                        alignItems: "center",
                        color: isDarkMode ? "#ccc" : "#6c757d",
                        cursor: "pointer",
                      }}
                      onClick={(e) => handleDashboardNav(e, "/funds")}
                    >
                      <i className="fas fa-wallet me-2" style={{ width: "18px" }}></i>
                      Funds & Margin
                    </a>
                  </div>

                  <hr className="my-2" style={{ borderColor: isDarkMode ? "#2d2d2d" : "#e0e0e0" }} />

                  {currentUser ? (
                    <button
                      onClick={handleLogout}
                      className="btn btn-sm w-100 text-start py-2 px-2 text-danger"
                      style={{
                        fontSize: "13px",
                        fontWeight: 600,
                        border: isDarkMode ? "1px solid #5a2223" : "none",
                        backgroundColor: isDarkMode ? "#2a1515" : "transparent",
                        borderRadius: "6px",
                        display: "flex",
                        alignItems: "center",
                        cursor: "pointer",
                      }}
                    >
                      <i className="fas fa-sign-out-alt me-2" style={{ width: "18px" }}></i>
                      Log Out
                    </button>
                  ) : (
                    <div className="d-flex gap-2 pt-1">
                      <Link
                        to="/login"
                        className="btn btn-sm btn-outline-primary flex-fill"
                        style={{ fontSize: "12px", fontWeight: 600 }}
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Log In
                      </Link>
                      <Link
                        to="/signup"
                        className="btn btn-sm btn-primary flex-fill"
                        style={{
                          backgroundColor: "#387ed1",
                          borderColor: "#387ed1",
                          fontSize: "12px",
                          fontWeight: 600,
                        }}
                        onClick={() => setIsProfileOpen(false)}
                      >
                        Sign Up
                      </Link>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
