import React, { useEffect, useState } from "react";
import "./TrackOrder.css";

const TrackOrder = () => {
  const [orders, setOrders] = useState([]);

  // Example: Load orders from localStorage or API
  useEffect(() => {
    const storedOrders = JSON.parse(localStorage.getItem("orders")) || [];
    setOrders(storedOrders);
  }, []);

  return (
    <div className="track-order-container">
      <h2>Track Your Orders</h2>

      {orders.length === 0 ? (
        <p>You have no orders yet.</p>
      ) : (
        <div className="orders-list">
          {orders.map((order) => (
            <div className="order-card" key={order.id}>
              <h3>Order #{order.id}</h3>
              <p><strong>Date:</strong> {order.date}</p>
              <p><strong>Status:</strong> {order.status}</p>
              <p><strong>Items:</strong></p>
              <ul>
                {order.items.map((item) => (
                  <li key={item.id}>
                    {item.title} - ${item.price}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TrackOrder;
