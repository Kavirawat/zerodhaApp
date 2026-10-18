const hostname = typeof window !== "undefined" ? window.location.hostname : "";
const isLocal = Boolean(
  hostname === "localhost" ||
  hostname === "127.0.0.1"
);
const isLan = Boolean(
  hostname.startsWith("192.168.") ||
  hostname.startsWith("10.")
);

const PRODUCTION_BACKEND_URL = "https://apnazerodhaappbackend.onrender.com";
const PRODUCTION_DASHBOARD_URL = "https://apnazerodhaappdashboard.onrender.com";
const PRODUCTION_FRONTEND_URL = "https://apnazerodhaappfrontend.onrender.com";

export const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL ||
  (isLocal || isLan
    ? `http://${hostname || "localhost"}:3002`
    : PRODUCTION_BACKEND_URL);

export const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL ||
  (isLocal || isLan
    ? `http://${hostname || "localhost"}:3001`
    : PRODUCTION_DASHBOARD_URL);

export const getDashboardUrl = (subPath = "/") => {
  const token = typeof window !== "undefined" ? localStorage.getItem("zerodha_token") || "" : "";
  const user = typeof window !== "undefined" ? encodeURIComponent(localStorage.getItem("zerodha_user") || "") : "";
  const currentOrigin = typeof window !== "undefined" ? window.location.origin : PRODUCTION_FRONTEND_URL;
  const frontendParam = encodeURIComponent(currentOrigin);
  const base = DASHBOARD_URL.endsWith("/") ? DASHBOARD_URL.slice(0, -1) : DASHBOARD_URL;
  const path = subPath ? (subPath.startsWith("/") ? subPath : `/${subPath}`) : "/";
  return `${base}${path}?token=${token}&user=${user}&frontend=${frontendParam}`;
};
