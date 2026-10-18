import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "./index.css";
import HomePage from "./landing_page/home/HomePage";
import Signup from "./landing_page/signup/Signup";
import AboutPage from "./landing_page/about/AboutPage";
import ProductsPage from "./landing_page/products/ProductsPage";
import SupportPage from "./landing_page/support/SupportPage";
import PricingPage from "./landing_page/pricing/PricingPage";
import Navbar from "./landing_page/Navbar";
import Footer from "./landing_page/Footer";
import NotFoundPage from "./landing_page/NotFound";
import { getDashboardUrl } from "./config";

const DashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("zerodha_token");

    if (!token) {
      // User is not logged in -> remember intended destination and redirect to login
      sessionStorage.setItem("redirect_after_login", "/dashboard");
      navigate("/login", {
        replace: true,
        state: {
          from: "/dashboard",
          message: "Please log in to access your Kite Trading Dashboard.",
        },
      });
    } else {
      // User is logged in -> redirect to dashboard with session tokens
      window.location.href = getDashboardUrl("/");
    }
  }, [navigate]);

  return (
    <div style={{ minHeight: "60vh", display: "flex", justifyContent: "center", alignItems: "center" }}>
      <div className="text-center">
        <i className="fas fa-circle-notch fa-spin fa-2x text-primary mb-3"></i>
        <h5 style={{ fontWeight: 500, color: "#555" }}>Redirecting to Kite Dashboard...</h5>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/signup" element={<Signup initialMode="signup" />} />
      <Route path="/login" element={<Signup initialMode="login" />} />
      <Route path="/dashboard" element={<DashboardRedirect />} />
      <Route path="/dashboard/*" element={<DashboardRedirect />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/products" element={<ProductsPage />} />
      <Route path="/pricing" element={<PricingPage />} />
      <Route path="/support" element={<SupportPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
    <Footer />
  </BrowserRouter>
);
