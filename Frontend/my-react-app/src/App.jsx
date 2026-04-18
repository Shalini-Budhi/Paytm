import React from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar/NavBar";
import HomePage from "./Components/HomePage/HomePage";
import RechargeBills from "./Components/RechargeBills/RechargeBills";
import TicketBooking from "./Components/TicketBooking/TicketBooking";
import PaymentsServices from "./Components/PaymentsServices/PaymentsServices";
import PaytmBusiness from "./Components/PaytmBusiness/PaytmBusiness";
import Company from "./Components/Company/Company";
import Flights from "./Components/Flights/Flights";
import Bus from "./Components/Bus/Bus";
import Trains from "./Components/Trains/Trains";
import Signup from "./Components/SignUp/SignUp";
import LoginPage from "./Components/LoginPage/LoginPage"
const App = () => {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/loginpage" element={< LoginPage/>}/>
        <Route path="/rechargebills" element={<RechargeBills />} />
        <Route path="/ticketbooking" element={<TicketBooking />} />
        <Route path="/paymentsservices" element={<PaymentsServices />} />
        <Route path="/paytmbusiness" element={<PaytmBusiness />} />
        <Route path="/company" element={< Company/>} />
        <Route path="/flights" element={< Flights/>} />
        <Route path="/bus" element={< Bus/>} />
          <Route path="/trains" element={< Trains/>} />
      </Routes>
    </>
  );
};

export default App;
