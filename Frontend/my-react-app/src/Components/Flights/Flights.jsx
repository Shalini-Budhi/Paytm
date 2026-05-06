import { useState } from "react";
import "./Flights.css";
import { FaPlane, FaBus, FaTrain } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Flights = () => {
  // Tabs
  const [activeTab, setActiveTab] = useState("Flights");

  // Trip type
  const [tripType, setTripType] = useState("oneway");

  // Form states
  const [from, setFrom] = useState("Delhi (DEL)");
  const [to, setTo] = useState("Mumbai (BOM)");
  const [depart, setDepart] = useState("Sat, 07 Feb 26");
  const [returnDate, setReturnDate] = useState("");
  const [traveller, setTraveller] = useState("1 Traveller, Economy");

  // Special fares
  const [selectedFare, setSelectedFare] = useState("");
  const [nonStop, setNonStop] = useState(false);

  return (
    <div className="flights-container">
      {/* TOP TABS */}
      <div className="tabs">
        <span
          className={`tab ${activeTab === "Flights" ? "active" : ""}`}
          onClick={() => setActiveTab("Flights")}
        >
          <FaPlane /> Flights
        </span>

        <span
          className={`tab ${activeTab === "Bus" ? "active" : ""}`}
          onClick={() => setActiveTab("Bus")}
        >
          <FaBus /> Bus
        </span>

        <span
          className={`tab ${activeTab === "Trains" ? "active" : ""}`}
          onClick={() => setActiveTab("Trains")}
        >
          <FaTrain /> Trains
        </span>

        <span
          className={`tab ${activeTab === "Intl" ? "active" : ""}`}
          onClick={() => setActiveTab("Intl")}
        >
          <FaPlane /> Intl. Flights
        </span>
      </div>

      {/* SEARCH CARD */}
      <div className="search-card">
        {/* Trip Type */}
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
            Round Trip
          </label>
        </div>

        {/* FORM */}
        <div className="form-row">
          <div className="field">
            <span>From</span>
            <strong>{from}</strong>
          </div>

          <div className="field">
            <span>To</span>
            <strong>{to}</strong>
          </div>

          <div className="field">
            <span>Depart</span>
            <strong>{depart}</strong>
          </div>

          <div className="field">
            <span>Return</span>
            <strong className="blue">
              {tripType === "round" ? returnDate || "Add Return" : "Add Return"}
            </strong>
          </div>

          <div className="field">
            <span>Passenger & Class</span>
            <strong>{traveller}</strong>
          </div>

          <button
            className="search-btn"
            onClick={() => {
              console.log({
                activeTab,
                tripType,
                from,
                to,
                depart,
                returnDate,
                traveller,
                selectedFare,
                nonStop,
              });
            }}
          >
            Search Flights
          </button>
        </div>

        {/* SPECIAL FARES */}
        <div className="special-fares">
          <span className="fare-title">Special Fares (optional)</span>

          <div
            className={`fare ${selectedFare === "Student" ? "selected" : ""}`}
            onClick={() => setSelectedFare("Student")}
          >
            Student
          </div>

          <div
            className={`fare ${selectedFare === "Armed" ? "selected" : ""}`}
            onClick={() => setSelectedFare("Armed")}
          >
            Armed Forces
          </div>

          <div
            className={`fare ${selectedFare === "Senior" ? "selected" : ""}`}
            onClick={() => setSelectedFare("Senior")}
          >
            Senior Citizen
          </div>

          <label className="non-stop">
            <input
              type="checkbox"
              checked={nonStop}
              onChange={() => setNonStop(!nonStop)}
            />
            Show Non-stop flights only
          </label>
        </div>
      </div>

      {/* MY BOOKINGS */}
      <div className="my-bookings">My Bookings →</div>
    </div>
  );
};

export default Flights;
