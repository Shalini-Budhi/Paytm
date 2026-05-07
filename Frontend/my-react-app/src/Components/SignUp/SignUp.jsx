import React, { useState } from "react";
import "./Signup.css";
import axios from "axios";
import {useNavigate} from "react-router-dom"

const Signup = () => {
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    confirmPassword: "",
    phonenumber: "",
    email: "",
  });
const navigate = useNavigate()
  const [responseError, setResponseError] = useState("");
  const [success, setSuccess] = useState("");

  // Handle input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    setResponseError("");
    setSuccess("");

    if (formData.password !== formData.confirmPassword) {
      setResponseError("Passwords do not match!");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:7000/signup",
        formData,
      );

      setSuccess(response.data.message);
      navigate("/")

    } catch (error) {
      setResponseError(error.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-box">
        <h2>Create Paytm Account</h2>

        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            value={formData.username}
            onChange={handleChange}
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
          />

          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={formData.confirmPassword}
            onChange={handleChange}
            required
          />

          <input
            type="text"
            name="phonenumber"
            placeholder="Phone Number"
            value={formData.phonenumber}
            onChange={handleChange}
            required
          />

          {responseError && <p className="error">{responseError}</p>}

          {success && <p className="success">{success}</p>}

          <button type="submit">Sign Up</button>
        </form>

        <p className="login-text">
          Already have an account? <span>Login</span>
        </p>
      </div>
    </div>
  );
};

export default Signup;
