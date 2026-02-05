import React, { useState } from "react";
import "./TicketBooking.css";

const Ticketbooking = () => {
  const [activeTicket, setActiveTicket] = useState("Flight");

  const tickets = ["Flight Tickets", "Train Tickets", "Bus Tickets"];

  return (
    <div className="ticket-container">
      {tickets.map((ticket) => (
        <div
          key={ticket}
          className={`ticket-item ${
            activeTicket === ticket ? "active" : ""
          }`}
          onClick={() => setActiveTicket(ticket)}
        >
          {ticket}
        </div>
      ))}
    </div>
  );
};

export default Ticketbooking;
