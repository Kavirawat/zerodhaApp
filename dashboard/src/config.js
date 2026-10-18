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

export const FRONTEND_URL =
  process.env.REACT_APP_FRONTEND_URL ||
  (isLocal
    ? `http://${typeof window !== "undefined" ? window.location.hostname : "localhost"}:3000`
    : "https://apnazerodhaappfrontend.onrender.com");

export const getFrontendUrl = () => {
  if (typeof window !== "undefined") {
    const saved = localStorage.getItem("zerodha_frontend_url");
    if (saved && saved !== "undefined" && saved.startsWith("http")) {
      return saved.endsWith("/") ? saved.slice(0, -1) : saved;
    }
    if (document.referrer) {
      try {
        const refUrl = new URL(document.referrer);
        if (refUrl.origin && refUrl.origin !== window.location.origin) {
          return refUrl.origin;
        }
      } catch (e) {}
    }
  }
  return FRONTEND_URL.endsWith("/") ? FRONTEND_URL.slice(0, -1) : FRONTEND_URL;
};
