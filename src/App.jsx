import React from 'react';
import { Outlet } from 'react-router-dom';  
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="main">
      <nav className="navbar">
        <div className="logo">Welcome Guest!!</div>
        <div className="div1">
          <Link to="/" className="nav-link">Home</Link>
          <Link to="/Login" className="nav-link">Login</Link>
        </div>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
