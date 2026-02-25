import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import './Page.css';

const BookDelivery = () => {
  const [formData, setFormData] = useState({
    pickup: '',
    delivery: '',
    packageDetails: '',
    contactNumber: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!formData.pickup || !formData.delivery || !formData.contactNumber) {
      toast.error("Please fill in all the required delivery details.", { id: 'booking-validation' });
      return;
    }

    const loadToast = toast.loading("Booking your delivery...", { id: 'booking-action' });

    try {
      const response = await axios.post('http://127.0.0.1:8000/delivery/book', {
        pickup_address: formData.pickup,
        delivery_address: formData.delivery,
        package_details: formData.packageDetails,
        contact_number: formData.contactNumber
      });
      toast.success(`${response.data.message} Order ID: ${response.data.id}`, { id: 'booking-action' });
      
      // Clear form after success
      setFormData({
        pickup: '',
        delivery: '',
        packageDetails: '',
        contactNumber: ''
      });
    } catch (error) {
      console.error("Booking Error:", error);
      toast.error("We encountered an error while booking your delivery. Please try again.", { id: 'booking-action' });
    }
  };

  return (
    <div className="page-container">
      <div className="form-box">
        <h2>Book a Delivery</h2>
        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Pickup Address</label>
            <input 
              type="text" 
              placeholder="Enter pickup address" 
              required 
              value={formData.pickup}
              onChange={(e) => setFormData({...formData, pickup: e.target.value})}
            />
          </div>
          <div className="input-group">
            <label>Delivery Address</label>
            <input 
              type="text" 
              placeholder="Enter delivery address" 
              required 
              value={formData.delivery}
              onChange={(e) => setFormData({...formData, delivery: e.target.value})}
            />
          </div>
          <div className="input-group">
            <label>Contact Number</label>
            <input 
              type="text" 
              placeholder="Enter contact number" 
              required 
              value={formData.contactNumber}
              onChange={(e) => setFormData({...formData, contactNumber: e.target.value})}
            />
          </div>
          <div className="input-group">
            <label>Package Details</label>
            <textarea 
              placeholder="Describe your package" 
              required
              value={formData.packageDetails}
              onChange={(e) => setFormData({...formData, packageDetails: e.target.value})}
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Book Now</button>
        </form>
      </div>
    </div>
  );
};

export default BookDelivery;
