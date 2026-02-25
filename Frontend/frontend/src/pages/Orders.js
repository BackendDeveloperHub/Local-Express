import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Page.css';

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/orders/')
      .then(response => {
        setOrders(response.data.orders);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching orders:", error);
        toast.error("Could not load your orders. Please try again later.", { id: 'orders-fetch-error' });
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="page-container">Loading your orders...</div>;

  return (
    <div className="page-container">
      <h2>Your Orders</h2>
      <div className="orders-list">
        {orders.length > 0 ? orders.map(order => (
          <div key={order.id} className="order-card">
            <div className="order-info">
              <h3>Order #{order.id}</h3>
              <p>Items: {order.items.length}</p>
              <ul>
                {order.items.map(item => (
                  <li key={item.id}>{item.name} x {item.quantity}</li>
                ))}
              </ul>
            </div>
            <div className="order-status">
              <span className={`status ${order.status.toLowerCase().replace(' ', '-')}`}>
                {order.status}
              </span>
              <p className="price">${order.total_price.toFixed(2)}</p>
            </div>
          </div>
        )) : <p>No orders found.</p>}
      </div>
    </div>
  );
};

export default Orders;
