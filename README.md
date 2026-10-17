# Zerodha Clone - Full Stack Trading Application

A production-ready full-stack clone of the Zerodha Kite trading platform and Zerodha marketing website, built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Live Market Feed**: Real-time NIFTY 50, SENSEX, and top equity stock market prices and daily % changes streamed via Yahoo Finance API.
- **Kite Trading Dashboard**: Full portfolio management including Holdings, Positions, Orders history, and Funds.
- **Order Placement**: Place BUY/SELL market orders with dynamic status updates.
- **Authentication**: Secure JWT and Bcrypt user registration, login, and multi-session persistence.
- **Dark & Light Mode**: Seamless dark theme toggle integrated inside the profile dropdown with local storage persistence and multi-tab synchronization.
- **Zerodha Ecosystem**: Direct access to Console, Coin, Varsity, Kite Connect, Sensibull, Smallcase, Streak, and GoldenPi.

---

## 📁 Project Architecture

```
ZERODHA/
├── backend/            # Express.js REST API with MongoDB (Port 3002)
├── dashboard/          # Kite Trading Dashboard (Port 3001)
├── frontend/           # Zerodha Landing & Marketing Site (Port 3000)
├── start-dev.js        # Orchestration script to run all 3 services concurrently
├── package.json        # Root scripts
└── README.md
```

---

## 🛠️ Local Development Setup

1. **Install Root Dependencies**:
   ```bash
   npm install
   ```

2. **Run All 3 Services Concurrently**:
   ```bash
   npm run dev
   ```

- Frontend: `http://localhost:3000`
- Dashboard: `http://localhost:3001`
- Backend: `http://localhost:3002`

---

## 🌐 Deployment Configuration

- **Backend**: Deploy as **Web Service** on [Render.com](https://render.com). Set `MONGO_URL` in environment variables.
- **Dashboard**: Deploy as **Static Site** on [Vercel](https://vercel.com) (`dashboard` folder).
- **Frontend**: Deploy as **Static Site** on [Vercel](https://vercel.com) (`frontend` folder).

Environment Variables:
- `REACT_APP_BACKEND_URL`: URL of the deployed backend.
- `REACT_APP_DASHBOARD_URL`: URL of the deployed dashboard.
- `REACT_APP_FRONTEND_URL`: URL of the deployed frontend.
