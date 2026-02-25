import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import './Navbar.css';

const Navbar = ({ isLoggedIn, setIsLoggedIn }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    setIsLoggedIn(false);
    localStorage.removeItem('token');
    toast.success("Successfully logged out. See you soon!", { id: 'logout-success' });
    navigate('/login');
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Local Express</Link>
      </div>
      
      <div className="navbar-right">
        {isLoggedIn && (
          <ul className="navbar-links">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/book-delivery">Book Delivery</Link></li>
            <li><Link to="/orders">Orders</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        )}
        
        <div className="navbar-auth">
          {isLoggedIn ? (
            <button onClick={handleLogout} className="logout-btn">Logout</button>
          ) : (
            <Link to="/login" className="login-btn">Login</Link>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
