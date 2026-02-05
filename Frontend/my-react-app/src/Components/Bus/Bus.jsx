import { useState } from "react";
import "./Bus.css";
import { FaBus, FaTrain, FaPlane, FaCalendarAlt, FaUser } from "react-icons/fa";

const Bus = () => {
  const [activeTab, setActiveTab] = useState("Bus");
  const [tripType, setTripType] = useState("oneway");
  const [selectedDate, setSelectedDate] = useState("5 Thu");
  const [seatType, setSeatType] = useState("");
  const [acOnly, setAcOnly] = useState(false);

  return (
    <div className="booking-container">
      {/* TABS */}
      <div className="booking-tabs">
        <span className="tab">
          <FaPlane /> Flights
        </span>

        <span
          className={`tab ${activeTab === "Bus" ? "active" : ""}`}
          onClick={() => setActiveTab("Bus")}
        >
          <FaBus /> Bus
        </span>

        <span className="tab">
          <FaTrain /> Trains
        </span>
      </div>

      {/* HEADER */}
      <div className="booking-header">
        <h2>Book bus tickets</h2>
        <button className="booking-btn">
          <FaUser /> My Bookings →
        </button>
      </div>

      {/* CARD */}
      <div className="booking-card">
        {/* Trip type */}
        <div className="trip-type">
          <label>
            <input
              type="radio"
              checked={tripType === "oneway"}
              onChange={() => setTripType("oneway")}
            />
            One Way
          </label>

          <label>
            <input
              type="radio"
              checked={tripType === "round"}
              onChange={() => setTripType("round")}
            />
            Round trip
          </label>
        </div>

        {/* Date */}
        <div className="dates">
          {["4 Today", "5 Thu", "6 Fri"].map((d) => (
            <div
              key={d}
              className={`date ${selectedDate === d ? "active" : ""}`}
              onClick={() => setSelectedDate(d)}
            >
              {d}
            </div>
          ))}

          <div className="date calendar">
            <FaCalendarAlt />
            Calendar
          </div>
        </div>

        {/* Options */}
        <div className="options">
          <div className="seat-buttons">
            {["Seater", "Sleeper"].map((seat) => (
              <button
                key={seat}
                className={seatType === seat ? "selected" : ""}
                onClick={() => setSeatType(seat)}
              >
                {seat}
              </button>
            ))}
          </div>

          <label className="checkbox">
            <input
              type="checkbox"
              checked={acOnly}
              onChange={() => setAcOnly(!acOnly)}
            />
            Show AC buses only
          </label>

          <button className="primary-btn">Search Buses</button>
        </div>
      </div>
    </div>
  );
};

export default Bus;
