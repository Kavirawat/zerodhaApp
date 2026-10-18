import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { BACKEND_URL } from "../config";

const Orders = () => {
  const [allOrders, setAllOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchOrders = () => {
    setLoading(true);
    axios
      .get(`${BACKEND_URL}/allOrders`)
      .then((res) => {
        setAllOrders(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching orders:", err);
        setError("Failed to fetch orders from server");
        setLoading(false);
      });
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  if (loading) {
    return <div style={{ padding: "20px" }}>Loading orders from API...</div>;
  }

  if (allOrders.length === 0) {
    return (
      <div className="orders">
        <div className="no-orders">
          <p>You haven't placed any orders yet</p>
          <Link to={"/"} className="btn">
            Get started
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "15px" }}>
        <h3 className="title" style={{ margin: 0 }}>Orders ({allOrders.length})</h3>
        <button
          onClick={fetchOrders}
          style={{
            background: "#4184f3",
            color: "white",
            border: "none",
            borderRadius: "4px",
            padding: "6px 14px",
            cursor: "pointer",
            fontSize: "13px",
            display: "inline-flex",
            alignItems: "center",
            gap: "6px"
          }}
        >
          <i className="fas fa-sync-alt" style={{ fontSize: "12px" }}></i>
          <span>Refresh</span>
        </button>
      </div>

      {error && <p style={{ color: "red", padding: "10px" }}>{error}</p>}

      <div className="order-table">
        <table>
          <thead>
            <tr>
              <th>Time</th>
              <th>Instrument</th>
              <th>Type</th>
              <th>Qty.</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {allOrders.map((order, index) => {
              const formattedDate = order.createdAt
                ? new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
                : "Executed";

              const isBuy = order.mode === "BUY";

              return (
                <tr key={order._id || index}>
                  <td>{formattedDate}</td>
                  <td style={{ fontWeight: 600 }}>{order.name}</td>
                  <td>
                    <span
                      style={{
                        padding: "3px 8px",
                        borderRadius: "3px",
                        fontSize: "12px",
                        fontWeight: 600,
                        backgroundColor: isBuy ? "#e8f5e9" : "#ffebee",
                        color: isBuy ? "#2e7d32" : "#c62828",
                      }}
                    >
                      {order.mode}
                    </span>
                  </td>
                  <td>{order.qty}</td>
                  <td>₹{Number(order.price || 0).toFixed(2)}</td>
                  <td>
                    <span style={{ color: "#2e7d32", fontWeight: 500 }}>
                      ● COMPLETE
                    </span>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Orders;
