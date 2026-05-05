import React, { useContext } from "react";
import { FormContext } from "../FormContext/FormContext";
function MobileRecharge() {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleProceed = () => {
    console.log("Mobile Data:", formData);
  };

  return (
    <div>
      <input
        type="text"
        name="mobile"
        placeholder="Enter Mobile Number"
        value={formData.mobile}
        onChange={handleChange}
      />

      <input
        type="text"
        name="operator"
        placeholder="Operator"
        value={formData.operator}
        onChange={handleChange}
      />

      <input
        type="number"
        name="amount"
        placeholder="Amount"
        value={formData.amount}
        onChange={handleChange}
      />

      <button onClick={handleProceed}>Proceed</button>
    </div>
  );
}

export default MobileRecharge;