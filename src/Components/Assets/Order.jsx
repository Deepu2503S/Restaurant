import React from 'react';
import './Order.css';
import { useLocation, useNavigate } from 'react-router';
import { Link } from 'react-router-dom';

const Order = () => {
  const location = useLocation();
  const { img, name, description, priceO, priceN, time, ratings } = location.state;

  const nav = useNavigate();
  function move(){
    nav("Branch")
  }

  return (
    <div className="placards2">
      <div className="image">
        <img src={img} alt={name} />
      </div>
      <div className="desc1">
        <h1>{name}</h1>
        <p>{description}</p>
        <div className="price1">
          <span className="old-price1">{priceO}</span>
          <span className="new-price1">{priceN}</span>
        </div>
        <div className="time1">Time : {time}</div>
        <div className="ratings1">
          {Array.from({ length: 5 }, (_, i) => (
            <i key={i} className={i < ratings ? "fas fa-star" : "far fa-star"}></i>
          ))} &nbsp; {ratings}
        </div>
        <div className="buttons1">
            <button className="huhu1"> Order Now</button>
            
            <Link to="/Branches"><button className="huhu1">Dine-In</button></Link>
        </div>
      </div>
    </div>
  );
};

export default Order;
