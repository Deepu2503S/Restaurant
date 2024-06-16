import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';  
import { Link } from 'react-router-dom';
import { BsCart4 } from "react-icons/bs";
import { MdRestaurantMenu } from "react-icons/md";
import { TfiShoppingCartFull } from "react-icons/tfi";

function App() {
  const location = useLocation();
  const { username } = location.state || {};

  return (
    <div className="main">
      <nav className="navbar">
      <div className="dropdown" id="p1">
        <MdRestaurantMenu className="p1"/>
            <div className="dropdown-content">
            {/* <Link to="/" className="nav-link">Home</Link> */}
            <Link to="/Menu" className="nav-link">Menu</Link>
            <Link to="/Branches" className="nav-link">Branches</Link>
            <Link to="/Contact" className="nav-link">Contact</Link>
            <Link to="/Login" className="nav-link">Login</Link>
            </div>
        </div>
        <div className="welcome-message">
          Welcome {username}!!
        </div>
        <div className="div1">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Menu" className="nav-link">Menu</Link>
          <Link to="/Branches" className="nav-link">Branches</Link>
          <Link to="/Contact" className="nav-link">Contact</Link>
          <Link to="/Login" className="nav-link">Login</Link>
          <div >
            <Link to="/Cart" className="cart"><TfiShoppingCartFull /></Link>
          </div>
        </div>
      </nav>

      <Outlet />  
    </div>
  );
}

export default App;
