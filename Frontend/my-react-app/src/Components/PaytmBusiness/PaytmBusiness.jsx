import React, { useState } from "react";
import "./PaytmBusiness.css";

const PaytmBusiness = () => {
  const [activeItem, setActiveItem] = useState(null);

  const menuItems = [
    "Online Payments",
    "Offline Payments",
    "Business Software",
    "Business Lending",
    "Insurance",
    "For Developers - API",
  ];

  return (
    <div className="business-menu-container">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`business-menu-item ${
            activeItem === index ? "active" : ""
          }`}
          onClick={() => setActiveItem(index)}
        >
          <span>{item}</span>
          <span className="arrow">{">"}</span>
        </div>
      ))}
    </div>
  );
};

export default PaytmBusiness;
