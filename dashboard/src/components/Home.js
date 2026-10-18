import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import TopBar from "./TopBar";
import { getFrontendUrl } from "../config";

const Home = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [checkingAuth, setCheckingAuth] = useState(true);

  useEffect(() => {
    // 1. Check if token or frontend origin was provided in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const tokenFromUrl = urlParams.get("token");
    const userFromUrl = urlParams.get("user");
    const frontendFromUrl = urlParams.get("frontend");

    if (frontendFromUrl) {
      try {
        localStorage.setItem("zerodha_frontend_url", decodeURIComponent(frontendFromUrl));
      } catch (e) {
        console.error("Error saving frontend URL:", e);
      }
    }

    if (tokenFromUrl) {
      try {
        localStorage.setItem("zerodha_token", tokenFromUrl);
        if (userFromUrl) {
          localStorage.setItem("zerodha_user", decodeURIComponent(userFromUrl));
        }
        // Remove query params from the browser address bar cleanly
        window.history.replaceState({}, document.title, window.location.pathname);
        setIsAuthenticated(true);
        setCheckingAuth(false);
        return;
      } catch (err) {
        console.error("Error setting session from URL:", err);
      }
    }

    // 2. Check if a valid session exists in localStorage
    const savedToken = localStorage.getItem("zerodha_token");
    if (savedToken) {
      setIsAuthenticated(true);
      setCheckingAuth(false);
      return;
    }

    // 3. Not logged in -> Redirect to Frontend Login immediately without 404
    setCheckingAuth(false);
    setIsAuthenticated(false);
    const targetLogin = `${getFrontendUrl()}/login`;
    window.location.replace(targetLogin);
  }, []);

  if (checkingAuth) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#fbfbfb",
          fontFamily: "Inter, -apple-system, sans-serif",
          color: "#444",
        }}
      >
        <i
          className="fas fa-circle-notch fa-spin"
          style={{ fontSize: "36px", color: "#387ed1", marginBottom: "16px" }}
        ></i>
        <h5 style={{ fontWeight: 500, fontSize: "16px" }}>Verifying session...</h5>
      </div>
    );
  }

  if (!isAuthenticated) {
    return (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          backgroundColor: "#fbfbfb",
          fontFamily: "Inter, -apple-system, sans-serif",
          padding: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            maxWidth: "420px",
            backgroundColor: "#fff",
            borderRadius: "8px",
            padding: "32px",
            boxShadow: "0 4px 20px rgba(0,0,0,0.06)",
            border: "1px solid #e0e0e0",
          }}
        >
          <i
            className="fas fa-lock"
            style={{ fontSize: "40px", color: "#387ed1", marginBottom: "16px" }}
          ></i>
          <h4 style={{ fontWeight: 600, color: "#333", marginBottom: "10px" }}>
            Login Required
          </h4>
          <p style={{ fontSize: "14px", color: "#666", lineHeight: "1.5", marginBottom: "24px" }}>
            You need to be logged in to access the Zerodha Kite trading dashboard. Redirecting to login...
          </p>
          <a
            href={`${getFrontendUrl()}/login`}
            style={{
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#387ed1",
              color: "#fff",
              textDecoration: "none",
              padding: "10px 24px",
              borderRadius: "4px",
              fontWeight: 600,
              fontSize: "14px",
            }}
          >
            <i className="fas fa-sign-in-alt" style={{ marginRight: "8px" }}></i>
            Go to Login
          </a>
        </div>
      </div>
    );
  }

  return (
    <>
      <TopBar />
      <Dashboard />
    </>
  );
};

export default Home;
