import React, { useState } from "react";
import cardData from "../Assets/Data";
import LikeButton from "./LikeButton";
import { useNavigate } from "react-router";


const Menu = () => {
  // Initialize the statuses and quantities for each item
  const initialStatuses = Array(cardData.length).fill("Add to Cart");
  const initialQuantities = Array(cardData.length).fill(0);
  const initialColors = Array(cardData.length).fill("rgb(133, 201, 203)");

  const [statuses, setStatuses] = useState(initialStatuses);
  const [quantities, setQuantities] = useState(initialQuantities);
  const [bgColors, setBgColors] = useState(initialColors);

  const nav = useNavigate();

  const move = (index) => {
    const card = cardData[index];
    nav("/Order", {
      state: {
        img: card.img,
        name: card.name,
        description: card.description,
        priceO: card.priceO,
        priceN: card.priceN,
        time: card.time,
        ratings: card.ratings,
      },
    });
  };

  const handleClick = (index) => {
    const newStatuses = [...statuses];
    const newColors = [...bgColors];
    const newQuantities = [...quantities];

    if (newStatuses[index] === "Add to Cart") {
      newStatuses[index] = "Added";
      newQuantities[index] = 1; // Set initial quantity to 1
      newColors[index] = "blue";
    } else {
      newStatuses[index] = "Add to Cart";
      newQuantities[index] = 0; // Reset quantity to 0
      newColors[index] = "rgb(133, 201, 203)";
    }

    setStatuses(newStatuses);
    setQuantities(newQuantities);
    setBgColors(newColors);
  };

  const handleIncrement = (index) => {
    const newQuantities = [...quantities];
    newQuantities[index] += 1;
    setQuantities(newQuantities);
  };

  const handleDecrement = (index) => {
    const newQuantities = [...quantities];
    const newStatuses = [...statuses];
    const newColors = [...bgColors];

    if (newQuantities[index] > 0) {
      newQuantities[index] -= 1;
      if (newQuantities[index] === 0) {
        newStatuses[index] = "Add to Cart";
        newColors[index] = "rgb(133, 201, 203)";
      }
    }

    setQuantities(newQuantities);
    setStatuses(newStatuses);
    setBgColors(newColors);
  };

  const styles1 = {
    color: "white",
  };

  const styles2 = {
    textDecoration: 'line-through',
  };

  return (
    <div className="main-content">
      <div className="placards1">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.name} className="dishimg"/>

            <div className="dishtext">
            <h1 className="name">{card.name}</h1>
            <h6 style={styles1}>{card.description}</h6>

            <div className="status1">
              <div className="rateOld" style={styles2}>{card.priceO}</div>
              <div className="rateNew">{card.priceN}</div>
              <div className="time">{card.time}</div>
            </div>
            <div className="ratings" style={styles1}>
              <i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="fas fa-star"></i><i className="far fa-star"></i> &nbsp; &nbsp;{card.ratings}
            </div>
            <div className="status2">
              {statuses[index] === "Add to Cart" ? (
                <button
                  className="b4"
                  onClick={() => handleClick(index)}
                  style={{ backgroundColor: bgColors[index], transition: "background-color 0.3s ease" }}
                >
                  {statuses[index]}
                </button>
              ) : (
                <div>
                  <button onClick={() => handleDecrement(index)} className="incdec"> - </button>
                  <span className="quantity">{quantities[index]}</span>
                  <button onClick={() => handleIncrement(index)} className="incdec">+</button>
                </div>
              )}
              <div className="p">
                <LikeButton/>
              </div>
              <button className="b4" onClick={() => move(index)}>Order Now</button>
            </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
