import React, { useContext } from "react";
import { FormContext } from "../FormContext/FormContext";

function ElectricityBill() {
  const { formData, setFormData } = useContext(FormContext);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      billType: e.target.value,
    });
  };

  return (
    <div>
      <input
        type="text"
        name="billType"
        placeholder="Bill Type"
        value={formData.billType}
        onChange={handleChange}
      />
    </div>
  );
}

export default ElectricityBill;