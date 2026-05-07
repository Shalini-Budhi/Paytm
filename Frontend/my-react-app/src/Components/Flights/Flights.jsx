import React, { useContext } from "react";

import "./Flights.css";

import { FaPlane, FaBus, FaTrain } from "react-icons/fa";

import { TravelContext } from "../../Context/TravelContext";

const Flights = () => {

  const {
    activeTab,
    setActiveTab,

    tripType,
    setTripType,

    from,
    setFrom,

    to,
    setTo,

    depart,
    setDepart,

    returnDate,
    setReturnDate,

    traveller,
    setTraveller,

    selectedFare,
    setSelectedFare,

    nonStop,
    setNonStop,
  } = useContext(TravelContext);

  const handleSearch = () => {

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
  };


  const tripOptions = [
    {
      label:"One Way",
      value:"oneway",
    },
    {
      label:"Round Trip",
      value:"round"
    },
  ];

  return (
    <div className="flights-container">

      {/* TABS */}

      <div className="tabs">

        <span
          className={`tab ${
            activeTab === "Flights" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Flights")}
        >
          <FaPlane />
          Flights
        </span>

        <span
          className={`tab ${
            activeTab === "Bus" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Bus")}
        >
          <FaBus />
          Bus
        </span>

        <span
          className={`tab ${
            activeTab === "Trains" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Trains")}
        >
          <FaTrain />
          Trains
        </span>

        <span
          className={`tab ${
            activeTab === "Intl" ? "active" : ""
          }`}
          onClick={() => setActiveTab("Intl")}
        >
          <FaPlane />
          Intl. Flights
        </span>

      </div>

      {/* SEARCH CARD */}

      <div className="search-card">

        {/* TRIP TYPE */}

        <div className="trip-type">

         {tripOptions.map((item, index)=> (

          <label key={index}>

            <input
              type="radio"
              checked={tripType === item.value}
              onChange={()=> setTripType(item.value)}
            />

            {item.label}
          </label>
         ))}

        </div>

        {/* FORM */}

        <div className="form-row">

          <div className="field">
            <span>From</span>

            <input
              type="text"
              value={from}
              onChange={(e) => setFrom(e.target.value)}
            />
          </div>

          <div className="field">
            <span>To</span>

            <input
              type="text"
              value={to}
              onChange={(e) => setTo(e.target.value)}
            />
          </div>

          <div className="field">
            <span>Depart</span>

            <input
              type="text"
              value={depart}
              onChange={(e) => setDepart(e.target.value)}
            />
          </div>

          <div className="field">

            <span>Return</span>

            <input
              type="text"
              value={returnDate}
              placeholder="Add Return"
              onChange={(e) =>
                setReturnDate(e.target.value)
              }
            />
          </div>

          <div className="field">

            <span>Passenger & Class</span>

            <input
              type="text"
              value={traveller}
              onChange={(e) =>
                setTraveller(e.target.value)
              }
            />
          </div>

          <button
            className="search-btn"
            onClick={handleSearch}
          >
            Search Flights
          </button>

        </div>

        {/* SPECIAL FARES */}

        <div className="special-fares">

          <span className="fare-title">
            Special Fares (optional)
          </span>

          <div
            className={`fare ${
              selectedFare === "Student"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setSelectedFare("Student")
            }
          >
            Student
          </div>

          <div
            className={`fare ${
              selectedFare === "Armed"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setSelectedFare("Armed")
            }
          >
            Armed Forces
          </div>

          <div
            className={`fare ${
              selectedFare === "Senior"
                ? "selected"
                : ""
            }`}
            onClick={() =>
              setSelectedFare("Senior")
            }
          >
            Senior Citizen
          </div>

          <label className="non-stop">

            <input
              type="checkbox"
              checked={nonStop}
              onChange={() =>
                setNonStop(!nonStop)
              }
            />

            Show Non-stop flights only

          </label>

        </div>

      </div>

      {/* BOOKINGS */}

      <div className="my-bookings">
        My Bookings →
      </div>

    </div>
  );
};

export default Flights;