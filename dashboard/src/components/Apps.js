import React from "react";

const Apps = () => {
  const ecosystemApps = [
    {
      id: "console",
      name: "Console",
      tagline: "Backoffice & Reporting",
      category: "Analytics & P&L",
      icon: "fas fa-chart-pie",
      color: "#ff5722",
      description:
        "The central dashboard for your Zerodha account. Track multi-year tax P&L statements, tradebook history, ledger, dividends, and portfolio analytics.",
      features: ["Tax P&L Reports", "Tradebook & Ledger", "Portfolio Analytics", "Corporate Actions"],
      url: "https://console.zerodha.com",
    },
    {
      id: "coin",
      name: "Coin",
      tagline: "Direct Mutual Funds",
      category: "Mutual Funds & SIP",
      icon: "fas fa-coins",
      color: "#00b0ff",
      description:
        "Buy zero-commission direct mutual funds directly in your Demat account without distributor fees. Set up flexible SIPs with instant UPI mandates.",
      features: ["0% Commission", "Demat Settlement", "Flexible Step-up SIPs", "NFO Investments"],
      url: "https://coin.zerodha.com",
    },
    {
      id: "varsity",
      name: "Varsity",
      tagline: "Stock Market Education",
      category: "Education",
      icon: "fas fa-graduation-cap",
      color: "#4caf50",
      description:
        "Comprehensive, in-depth stock market and financial education with 10+ free modules covering technical analysis, fundamentals, options, and currency trading.",
      features: ["Free Video Lessons", "Trading Certifications", "Beginner to Advanced", "Community Q&A"],
      url: "https://zerodha.com/varsity/",
    },
    {
      id: "kiteconnect",
      name: "Kite Connect API",
      tagline: "Developer Trading APIs",
      category: "Algo & API",
      icon: "fas fa-bolt",
      color: "#3f51b5",
      description:
        "Fast, reliable HTTP/JSON REST APIs for developers to automate trades, query live market tick data, manage orders, and build full trading applications.",
      features: ["JSON/REST APIs", "Python & Node SDKs", "WebSocket Ticker", "Sub-millisecond execution"],
      url: "https://kite.trade",
    },
    {
      id: "sensibull",
      name: "Sensibull",
      tagline: "Options Trading Platform",
      category: "Derivatives",
      icon: "fas fa-chart-area",
      color: "#e91e63",
      description:
        "India's largest options trading platform. Build ready-made options strategies, analyze Greeks, track open interest (OI), and simulate payoff graphs.",
      features: ["Strategy Builder", "Options Greeks", "OI Heatmaps", "Payoff Graphs"],
      url: "https://sensibull.com",
    },
    {
      id: "smallcase",
      name: "Smallcase",
      tagline: "Thematic Portfolios",
      category: "Thematic Investing",
      icon: "fas fa-briefcase",
      color: "#009688",
      description:
        "Curated baskets of stocks and ETFs that represent an idea, market trend, or financial strategy, professionally managed by SEBI registered research analysts.",
      features: ["Thematic Baskets", "SEBI Reg. Managers", "1-Click Rebalance", "Auto SIP"],
      url: "https://www.smallcase.com",
    },
    {
      id: "streak",
      name: "Streak",
      tagline: "Algo Trading Without Code",
      category: "Algo Trading",
      icon: "fas fa-robot",
      color: "#ff9800",
      description:
        "Create, backtest, and deploy algorithmic trading strategies without writing any code. Receive real-time entry and exit alerts on mobile and web.",
      features: ["No-Code Builder", "Historical Backtesting", "Technical Scanners", "Live Signal Alerts"],
      url: "https://streak.tech",
    },
    {
      id: "goldenpi",
      name: "GoldenPi",
      tagline: "Bonds & Fixed Income",
      category: "Fixed Income",
      icon: "fas fa-university",
      color: "#795548",
      description:
        "Discover, research, and invest in corporate bonds, non-convertible debentures (NCDs), and sovereign debt with predictable, fixed annual returns.",
      features: ["Corporate Bonds", "Govt Securities (G-Sec)", "High Yield Fixed Returns", "Transparent Ratings"],
      url: "https://goldenpi.com",
    },
  ];

  return (
    <div style={{ padding: "0 20px 40px" }}>
      <div style={{ marginBottom: "24px" }}>
        <h2 style={{ fontSize: "22px", fontWeight: 700, margin: "0 0 6px 0", color: "#333" }}>
          Zerodha Ecosystem Apps
        </h2>
        <p style={{ fontSize: "14px", color: "#666", margin: 0 }}>
          Explore our suite of specialized trading, analytics, education, and investment platforms.
        </p>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
          gap: "20px",
        }}
      >
        {ecosystemApps.map((app) => (
          <div
            key={app.id}
            className="app-card"
            style={{
              backgroundColor: "#fff",
              border: "1px solid #e0e0e0",
              borderRadius: "10px",
              padding: "20px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
          >
            <div>
              <div style={{ display: "flex", alignItems: "center", marginBottom: "12px" }}>
                <div
                  style={{
                    width: "44px",
                    height: "44px",
                    borderRadius: "10px",
                    backgroundColor: `${app.color}15`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    marginRight: "12px",
                    color: app.color,
                  }}
                >
                  <i className={app.icon}></i>
                </div>
                <div>
                  <h3 style={{ fontSize: "17px", fontWeight: 700, margin: 0, color: "#222" }}>
                    {app.name}
                  </h3>
                  <span style={{ fontSize: "11px", color: app.color, fontWeight: 600 }}>
                    {app.tagline}
                  </span>
                </div>
              </div>

              <p style={{ fontSize: "13px", color: "#555", lineHeight: 1.5, margin: "0 0 14px 0" }}>
                {app.description}
              </p>

              <div style={{ display: "flex", flexWrap: "wrap", gap: "6px", marginBottom: "16px" }}>
                {app.features.map((f, i) => (
                  <span
                    key={i}
                    className="app-tag"
                    style={{
                      fontSize: "11px",
                      background: "#f4f6f8",
                      color: "#555",
                      padding: "3px 8px",
                      borderRadius: "4px",
                      display: "inline-flex",
                      alignItems: "center",
                    }}
                  >
                    <i className="fas fa-check" style={{ fontSize: "9px", marginRight: "4px", color: "#387ed1" }}></i>
                    {f}
                  </span>
                ))}
              </div>
            </div>

            <a
              href={app.url}
              target="_blank"
              rel="noreferrer"
              className="app-btn"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                padding: "9px 14px",
                backgroundColor: "#f5f9ff",
                color: "#387ed1",
                textDecoration: "none",
                borderRadius: "6px",
                fontSize: "13px",
                fontWeight: 600,
                border: "1px solid #d4e4fc",
                transition: "all 0.2s ease",
              }}
            >
              <span>Launch {app.name}</span>
              <i className="fas fa-external-link-alt" style={{ fontSize: "11px", marginLeft: "6px" }}></i>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
