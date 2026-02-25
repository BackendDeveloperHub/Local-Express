import React, { useEffect, useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Page.css';

const Home = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/home/')
      .then(response => setData(response.data))
      .catch(error => {
        console.error("Error fetching home data:", error);
        toast.error("Failed to load home content. Please check your connection.", { id: 'home-fetch-error' });
      });
  }, []);

  if (!data) return <div className="page-container">Loading...</div>;

  return (
    <div className="page-container">
      <section className="hero">
        <h1>{data.message.title}</h1>
        <p>{data.message.description}</p>
        <button className="cta-btn">Get Started</button>
      </section>
      <section className="features">
        {data.features.map((feature, index) => (
          <div key={index} className="feature-card">
            <h3>{feature}</h3>
            <p>Experience the best of {feature} with Local Express.</p>
          </div>
        ))}
      </section>
    </div>
  );
};

export default Home;
