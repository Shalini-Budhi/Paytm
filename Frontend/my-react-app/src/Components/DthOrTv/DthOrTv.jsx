import React from "react";
import "./DthOrTv.css";
import { useState } from "react";
function DthOrTv() {
  // Initialize state for the input field
  const [name, setName] = useState("");


  return (
    <div className="container">
      <h1>Recharge DTH or TV</h1>
      <form >
         
          <input
            type="text"
            value={name}
          />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default DthOrTv;
