import React, { useState } from "react";
import cardData from "./Data";

const Menu = () => {
  const initialStatuses = Array(cardData.length).fill("Add to Cart");
  const initialColors = Array(cardData.length).fill("rgb(133, 201, 203)");

  const [statuses, setStatuses] = useState(initialStatuses);
  const [bgColors, setBgColors] = useState(initialColors);

  const handleClick = (index) => {
    const newStatuses = [...statuses];
    const newColors = [...bgColors];

    if (newStatuses[index] === "Add to Cart") {
      newStatuses[index] = "Added";
      newColors[index] = "blue";
    } else if (newStatuses[index] === "Added") {
      newStatuses[index] = "Add to Cart";
      newColors[index] = "rgb(133, 201, 203)";
    }

    setStatuses(newStatuses);
    setBgColors(newColors);
  };

  return (
    <div className="main-content">
      <div className="placards1">
        {cardData.map((card, index) => (
          <div className="card" key={index}>
            <img src={card.img} alt={card.name} />
            <h1 className="name">{card.name}</h1>
            <div className="status1">
              <div className="rate">{card.price}</div>
              <div className="time">{card.time}</div>
            </div>
            <div className="status2">
              <button
                className="b4"
                onClick={() => handleClick(index)}
                style={{ backgroundColor: bgColors[index], transition: "background-color 0.3s ease" }}
              >
                {statuses[index]}
              </button>
              <button className="b4">Order Now</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
