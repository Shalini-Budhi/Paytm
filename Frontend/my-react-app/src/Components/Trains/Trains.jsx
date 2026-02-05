import { useState } from "react";
import "./Trains.css";
import { FaTrain, FaCalendarAlt, FaExchangeAlt } from "react-icons/fa";

const Trains = () => {
  const [fromStation, setFromStation] = useState("");
  const [toStation, setToStation] = useState("");
  const [selectedDate, setSelectedDate] = useState("4 Feb");
  const [coachType, setCoachType] = useState("all");

  const dates = [
    { label: "4 Feb", sub: "Today" },
    { label: "5 Feb", sub: "Thu" },
    { label: "6 Feb", sub: "Fri" },
    { label: "7 Feb", sub: "Sat" },
    { label: "8 Feb", sub: "Sun" },
  ];

  return (
    <div className="train-page">
      {/* TOP TABS */}
      <div className="transport-tabs">
        <span>✈ Flights</span>
        <span>🚌 Bus</span>
        <span className="active">🚆 Trains</span>
        <span>🌍 Intl. Flights</span>

        <span className="help">🛟 24X7 Help</span>
      </div>

      {/* SEARCH CARD */}
      <div className="search-card">
        {/* FROM & TO */}
        <div className="station-row">
          <div className="station-box">
            <label>From</label>
            <input
              type="text"
              placeholder="Select Station"
              value={fromStation}
              onChange={(e) => setFromStation(e.target.value)}
            />
          </div>

          <div className="swap-icon">
            <FaExchangeAlt />
          </div>

          <div className="station-box">
            <label>To</label>
            <input
              type="text"
              placeholder="Select Station"
              value={toStation}
              onChange={(e) => setToStation(e.target.value)}
            />
          </div>

          {/* DATE PICKER */}
          <div className="date-box">
            <label>Departure Date</label>
            <div className="dates">
              {dates.map((d) => (
                <div
                  key={d.label}
                  className={`date ${
                    selectedDate === d.label ? "active" : ""
                  }`}
                  onClick={() => setSelectedDate(d.label)}
                >
                  <strong>{d.label}</strong>
                  <span>{d.sub}</span>
                </div>
              ))}

              <div className="date calendar">
                <FaCalendarAlt />
                <span>Calendar</span>
              </div>
            </div>
          </div>

          <button className="search-btn">Search Trains</button>
        </div>

        {/* COACH TYPE */}
        <div className="coach-types">
          <button
            className={coachType === "all" ? "active" : ""}
            onClick={() => setCoachType("all")}
          >
            AC & non-AC
          </button>
          <button
            className={coachType === "ac" ? "active" : ""}
            onClick={() => setCoachType("ac")}
          >
            AC only
          </button>
          <button
            className={coachType === "nonac" ? "active" : ""}
            onClick={() => setCoachType("nonac")}
          >
            Non-AC only
          </button>

          <span className="irctc">IRCTC Authorised Partner</span>
        </div>
      </div>

      {/* ADDITIONAL SERVICES */}
      <h2 className="section-title">Additional services</h2>

      <div className="services">
        <div className="service-card">
          <h3>🧳 My Trips</h3>
          <p>View all your bookings in one place</p>
        </div>

        <div className="service-card">
          <h3>📄 PNR Status</h3>
          <p>View your ticket status with PNR</p>
        </div>

        <div className="service-card">
          <h3>📍 Train Status</h3>
          <p>Find current location of your train</p>
        </div>

        <div className="service-card">
          <h3>🍱 Order Food</h3>
          <p>Order food easily for your journey</p>
        </div>
      </div>
    </div>
  );
};

export default Trains;
