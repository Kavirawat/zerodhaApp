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
const PRODUCTION_FRONTEND_URL = "https://apnazerodhaappfrontend.onrender.com";

export const BACKEND_URL =
  process.env.REACT_APP_BACKEND_URL ||
  (isLocal || isLan
    ? `http://${hostname || "localhost"}:3002`
    : PRODUCTION_BACKEND_URL);

export const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL ||
  (isLocal || isLan
    ? `http://${hostname || "localhost"}:3000`
    : PRODUCTION_FRONTEND_URL);

export const getFrontendUrl = () => {
  if (typeof window !== "undefined") {
    // 1. Check if valid frontend origin was passed in URL query param and stored
    const saved = localStorage.getItem("zerodha_frontend_url");
    if (saved && saved !== "undefined" && saved.startsWith("http")) {
      // Discard stale localhost values if running on Render / production
      if (!isLocal && !isLan && (saved.includes("localhost") || saved.includes("127.0.0.1"))) {
        localStorage.removeItem("zerodha_frontend_url");
      } else {
        return saved.endsWith("/") ? saved.slice(0, -1) : saved;
      }
    }

    // 2. Check referrer
    if (document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (refUrl.origin && refUrl.origin !== window.location.origin) {
          if (isLocal || isLan || (!refUrl.origin.includes("localhost") && !refUrl.origin.includes("127.0.0.1"))) {
            return refUrl.origin;
          }
        }
      } catch (e) {}
    }
  }

  // 3. Fallback based on environment
  if (isLocal || isLan) {
    return `http://${hostname || "localhost"}:3000`;
  }
  return (process.env.REACT_APP_FRONTEND_URL || PRODUCTION_FRONTEND_URL).replace(/\/+$/, "");
};
