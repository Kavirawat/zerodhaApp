import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";
import { BACKEND_URL, getDashboardUrl } from "../../config";

function Signup({ initialMode = "signup" }) {
  const [isLogin, setIsLogin] = useState(initialMode === "login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [currentUser, setCurrentUser] = useState(null);
  const location = useLocation();
  const notice =
    location.state?.message ||
    (sessionStorage.getItem("redirect_after_login")
      ? "Please log in to access your Kite Trading Dashboard."
      : "");

  useEffect(() => {
    setIsLogin(initialMode === "login");
  }, [initialMode]);

  useEffect(() => {
    const savedUser = localStorage.getItem("zerodha_user");
    if (savedUser) {
      try {
        setCurrentUser(JSON.parse(savedUser));
      } catch (e) {
        console.error(e);
      }
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccess("");
    setLoading(true);

    try {
      if (isLogin) {
        
        const res = await axios.post(`${BACKEND_URL}/login`, {
          email,
          password,
        });

        if (res.data.success) {
          localStorage.setItem("zerodha_token", res.data.token);
          localStorage.setItem("zerodha_user", JSON.stringify(res.data.user));
          setCurrentUser(res.data.user);
          setSuccess("Login successful! Redirecting to Dashboard...");

          const targetSubPath = sessionStorage.getItem("redirect_after_login") || "/";
          sessionStorage.removeItem("redirect_after_login");

          setTimeout(() => {
            window.location.href = getDashboardUrl(targetSubPath);
          }, 1000);
        }
      } else {
        
        if (!username.trim()) {
          setError("Username is required.");
          setLoading(false);
          return;
        }

        const res = await axios.post(`${BACKEND_URL}/signup`, {
          username,
          email,
          password,
        });

        if (res.data.success) {
          localStorage.setItem("zerodha_token", res.data.token);
          localStorage.setItem("zerodha_user", JSON.stringify(res.data.user));
          setCurrentUser(res.data.user);
          setSuccess("Account created successfully! Redirecting to Dashboard...");

          const targetSubPath = sessionStorage.getItem("redirect_after_login") || "/";
          sessionStorage.removeItem("redirect_after_login");

          setTimeout(() => {
            window.location.href = getDashboardUrl(targetSubPath);
          }, 1000);
        }
      }
    } catch (err) {
      console.error("Auth error:", err);
      if (err.response && err.response.data && err.response.data.message) {
        setError(err.response.data.message);
      } else {
        setError("Unable to connect to server. Ensure backend is running.");
      }
    } finally {
      setLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("zerodha_token");
    localStorage.removeItem("zerodha_user");
    setCurrentUser(null);
    setSuccess("Logged out successfully.");
  };

  const goToDashboard = () => {
    window.location.href = getDashboardUrl("/");
  };

  return (
    <div className="container p-2 p-md-4 my-3 my-md-5">
      <div className="row align-items-center">
        
        <div className="col-12 col-lg-7 text-center p-2 p-md-4 mb-4 mb-lg-0">
          <img
            src="Media/Images/signup.png"
            alt="Zerodha Signup"
            className="img-fluid"
            style={{ maxHeight: "380px", objectFit: "contain" }}
            onError={(e) => {
              e.target.style.display = "none";
            }}
          />
          <h2 className="mt-3 mt-md-4 fs-3 text-muted">
            {isLogin ? "Welcome Back to Zerodha" : "Open a free Zerodha Demat and trading account"}
          </h2>
          <p className="text-muted fs-6">
            Online platform to invest in stocks, derivatives, mutual funds, and more.
          </p>
        </div>

        <div className="col-12 col-lg-5 p-2 p-md-3">
          <div
            className="card shadow-sm p-3 p-md-4 border-0"
            style={{ borderRadius: "12px", backgroundColor: "#fff" }}
          >
            {currentUser ? (
              <div className="text-center py-4">
                <div
                  style={{
                    width: "70px",
                    height: "70px",
                    borderRadius: "50%",
                    background: "#e8f0fe",
                    color: "#387ed1",
                    fontSize: "26px",
                    fontWeight: "bold",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 15px",
                  }}
                >
                  {currentUser.username ? currentUser.username[0].toUpperCase() : "U"}
                </div>
                <h4>Welcome, {currentUser.username}!</h4>
                <p className="text-muted fs-6 mb-4">{currentUser.email}</p>

                <button
                  onClick={goToDashboard}
                  className="btn btn-primary w-100 py-2 mb-3"
                  style={{ backgroundColor: "#387ed1", borderColor: "#387ed1", fontWeight: 500 }}
                >
                  <i className="fas fa-chart-line me-2"></i> Go to Kite Dashboard
                </button>

                <button
                  onClick={handleLogout}
                  className="btn btn-outline-danger w-100 py-2"
                >
                  <i className="fas fa-sign-out-alt me-2"></i> Log Out
                </button>
              </div>
            ) : (
              <>
                <div className="d-flex justify-content-between mb-4 border-bottom pb-2">
                  <button
                    type="button"
                    className={`btn btn-link text-decoration-none fs-5 fw-bold ${
                      !isLogin ? "text-primary border-bottom border-primary border-2" : "text-muted"
                    }`}
                    onClick={() => {
                      setIsLogin(false);
                      setError("");
                      setSuccess("");
                    }}
                    style={{ paddingBottom: "8px" }}
                  >
                    Sign Up
                  </button>
                  <button
                    type="button"
                    className={`btn btn-link text-decoration-none fs-5 fw-bold ${
                      isLogin ? "text-primary border-bottom border-primary border-2" : "text-muted"
                    }`}
                    onClick={() => {
                      setIsLogin(true);
                      setError("");
                      setSuccess("");
                    }}
                    style={{ paddingBottom: "8px" }}
                  >
                    Log In
                  </button>
                </div>

                {notice && !error && !success && (
                  <div
                    className="alert alert-info py-2 fs-6 d-flex align-items-center"
                    role="alert"
                    style={{ fontSize: "13px" }}
                  >
                    <i className="fas fa-info-circle me-2"></i>
                    <span>{notice}</span>
                  </div>
                )}

                {error && (
                  <div className="alert alert-danger py-2 fs-6" role="alert">
                    {error}
                  </div>
                )}

                {success && (
                  <div className="alert alert-success py-2 fs-6" role="alert">
                    {success}
                  </div>
                )}

                <form onSubmit={handleSubmit}>
                  {!isLogin && (
                    <div className="mb-3">
                      <label className="form-label text-muted fw-semibold" style={{ fontSize: "14px" }}>
                        Full Name / Username
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        placeholder="e.g. Rahul Sharma"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                        style={{ height: "46px" }}
                      />
                    </div>
                  )}

                  <div className="mb-3">
                    <label className="form-label text-muted fw-semibold" style={{ fontSize: "14px" }}>
                      Email Address
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                      style={{ height: "46px" }}
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label text-muted fw-semibold" style={{ fontSize: "14px" }}>
                      Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter 6+ characters"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                      style={{ height: "46px" }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary w-100 py-2 fs-6 fw-semibold"
                    disabled={loading}
                    style={{ backgroundColor: "#387ed1", borderColor: "#387ed1" }}
                  >
                    {loading
                      ? "Processing..."
                      : isLogin
                      ? "Log in to Account"
                      : "Create Account"}
                  </button>
                </form>

                <div className="text-center mt-3">
                  <small className="text-muted">
                    {isLogin ? "Don't have an account yet? " : "Already have an account? "}
                    <button
                      type="button"
                      className="btn btn-link p-0 text-decoration-none fw-semibold"
                      onClick={() => {
                        setIsLogin(!isLogin);
                        setError("");
                        setSuccess("");
                      }}
                      style={{ fontSize: "14px" }}
                    >
                      {isLogin ? "Sign Up" : "Log In"}
                    </button>
                  </small>
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
