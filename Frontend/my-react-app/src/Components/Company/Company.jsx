import React, { useState } from "react";
import "./Company.css";

const Company = () => {
  const [activeItem, setActiveItem] = useState(null);

const dropdownItems = ["Sustainability", "CSR"];

const menuItems = [
  "About",
  "Investor Relations",
  "Sustainability",
  "Blog",
  "Latest News",
  "Contact Us",
  "Customer care",
  "Career",
  "CSR",
  "Terms & Conditions",
].map(label => ({
  label,
  hasDropdown: dropdownItems.includes(label),
}));

  return (
    <div className="company-menu-container">
      {menuItems.map((item, index) => (
        <div
          key={index}
          className={`company-menu-item ${
            activeItem === index ? "active" : ""
          }`}
          onClick={() => setActiveItem(index)}
        >
          <span>{item.label}</span>

          {item.hasDropdown && (
            <span className="arrow">{">"}</span>
          )}
        </div>
      ))}
    </div>
  );
};

export default Company;
