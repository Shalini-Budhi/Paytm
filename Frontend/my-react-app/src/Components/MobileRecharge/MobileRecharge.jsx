import React, { useState } from "react";
import "./MobileRecharge.css";
import airtelLogo from "../../assets/Images/Airtel.jpg"

function MobileRecharge() {
  const [planType, setPlanType] = useState("prepaid");
  const [mobileNumber, setMobileNumber] = useState("");
  const [operator, setOperator] = useState("");
  const [amount, setAmount] = useState("");
  const [showOperators, setShowOperators] = useState(false);

  // Operator list
  const operators = [
    // <img src={airtelLogo} alt={airtelLogo} />
    // { name: "Airtel", logo: "airtelLogo" },
    { name: "Jio", logo: "https://upload.wikimedia.org/wikipedia/commons/5/55/Jio_logo.svg" },
    { name: "VI", logo: "https://upload.wikimedia.org/wikipedia/commons/7/7d/Vodafone_Idea_logo.svg" },
    { name: "BSNL", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3e/BSNL_logo.svg" },
    { name: "MTNL", logo: "https://upload.wikimedia.org/wikipedia/en/8/8b/MTNL_logo.png" },
  ];

  // When clicking operator
  const selectOperator = (name) => {
    setOperator(name);
    setShowOperators(false);
  };

  return (
    <div className="recharge-container">
      <h2>Recharge or Pay Mobile Bill</h2>

      {/* Radio */}
      <div className="radio-group">
        <label>
          <input
            type="radio"
            checked={planType === "prepaid"}
            onChange={() => setPlanType("prepaid")}
          />
          Prepaid
        </label>

        <label>
          <input
            type="radio"
            checked={planType === "postpaid"}
            onChange={() => setPlanType("postpaid")}
          />
          Postpaid
        </label>
      </div>

      {/* Mobile */}
      <input
        type="text"
        placeholder="Mobile Number"
        value={mobileNumber}
        onChange={(e) => setMobileNumber(e.target.value)}
        className="input-field"
      />

      {/* Operator */}
      <input
        type="text"
        placeholder="Operator"
        value={operator}
        readOnly
        className="input-field"
      />

      {/* Amount + Browse */}
      <div className="amount-row">
        <input
          type="number"
          placeholder="Amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          className="input-field"
        />

        <span
          className="browse"
          onClick={() => setShowOperators(true)}
        >
          Browse Plans
        </span>
      </div>

      {/* Operator List Popup */}
      {showOperators && (
        <div className="operator-popup">
          <div className="operator-list">
            {operators.map((op, index) => (
              <div
                key={index}
                className="operator-item"
                onClick={() => selectOperator(op.name)}
              >
                <img src={op.logo} alt={op.name} />
                <span>{op.name}</span>
              </div>
            ))}
          </div>

        </div>
      )}

      {/* Button */}
      <button className="recharge-btn">
        Proceed to Recharge
      </button>
    </div>
  );
}

export default MobileRecharge;