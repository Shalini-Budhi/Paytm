import React, { useState } from "react";
import "./ElectricityBills.css";

const statesData = [
  "Andhra Pradesh","Arunachal Pradesh","Assam","Bihar","Chandigarh",
  "Chhattisgarh","Dadra and Nagar Haveli and Daman and Diu","Goa",
  "Gujarat","Haryana","Himachal Pradesh","Jammu & Kashmir",
  "Jharkhand","Karnataka","Kerala","Lakshadweep",
  "Madhya Pradesh","Maharashtra","Manipur","Meghalaya",
  "Mizoram","Nagaland","New Delhi","Odisha",
  "Pondicherry","Punjab","Rajasthan","Sikkim",
  "Tamil Nadu","Telangana","Tripura","Uttar Pradesh",
  "Uttarakhand","West Bengal"
];

function ElectricityBills() {
  const [category, setCategory] = useState("boards");
  const [selectedState, setSelectedState] = useState("");

  const handleProceed = () => {
    if (!selectedState.trim()) {
      alert("Please select a state");
      return;
    }
    alert(`Proceeding with ${selectedState}`);
  };

  return (
    <div className="container">

      {/* FORM CARD */}
      <div className="form-card">
        <h2>Pay Electricity Bill</h2>

        <div className="radio-group">
          <label>
            <input
              type="radio"
              checked={category === "boards"}
              onChange={() => setCategory("boards")}
            />
            Electricity Boards
          </label>

          <label>
            <input
              type="radio"
              checked={category === "apartments"}
              onChange={() => setCategory("apartments")}
            />
            Apartments
          </label>
        </div>

        <input
          type="text"
          placeholder="Select State"
          value={selectedState}
          onChange={(e) => setSelectedState(e.target.value)}
          className="input"
        />

        <button className="btn" onClick={handleProceed}>
          Proceed
        </button>

        <p className="footer">Paytm | Bharat Connect</p>
      </div>

      {/* STATE SECTION BELOW */}
      <div className="state-section">
        <h3>Select State</h3>

        <div className="state-grid">
          {statesData.map((state, index) => (
            <div
              key={index}
              className="state-item"
              onClick={() => setSelectedState(state)}
            >
              {state}
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default ElectricityBills;