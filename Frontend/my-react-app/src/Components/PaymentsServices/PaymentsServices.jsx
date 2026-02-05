import React, { useState } from "react";
import "./PaymentsServices.css";

const PaymentsServices = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    "Payments",
    "Loans & Credit cards",
    "Wealth",
  ];

  return (
    <div className="menu-container">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`menu-item ${activeItem === index ? "active" : ""}`}
          onClick={() => setActiveItem(index)}
        >
          <span>{item}</span>
          <span className="arrow">{">"}</span>
        </div>
      ))}
    </div>
  );
};

export default PaymentsServices;
