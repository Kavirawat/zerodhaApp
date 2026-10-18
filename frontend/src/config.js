const isLocal = Boolean(
  typeof window !== "undefined" &&
    (window.location.hostname === "localhost" ||
      window.location.hostname === "127.0.0.1" ||
      window.location.hostname.startsWith("192.168.") ||
      window.location.hostname.startsWith("10."))
);

export const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL ||
  (isLocal
    ? `http://${typeof window !== "undefined" ? window.location.hostname : "localhost"}:3002`
    : "https://apnazerodhaappbackend.onrender.com");

export const DASHBOARD_URL =
  process.env.REACT_APP_DASHBOARD_URL ||
  (isLocal
    ? `http://${typeof window !== "undefined" ? window.location.hostname : "localhost"}:3001`
    : "https://apnazerodhaappdashboard.onrender.com");

export const getDashboardUrl = (subPath = "") => {
  const token = typeof window !== "undefined" ? localStorage.getItem("zerodha_token") || "" : "";
  const user = typeof window !== "undefined" ? encodeURIComponent(localStorage.getItem("zerodha_user") || "") : "";
  const frontendOrigin = typeof window !== "undefined" ? encodeURIComponent(window.location.origin) : "";
  const base = DASHBOARD_URL.endsWith("/") ? DASHBOARD_URL.slice(0, -1) : DASHBOARD_URL;
  const path = subPath ? (subPath.startsWith("/") ? subPath : `/${subPath}`) : "/";
  return `${base}${path}?token=${token}&user=${user}&frontend=${frontendOrigin}`;
};
