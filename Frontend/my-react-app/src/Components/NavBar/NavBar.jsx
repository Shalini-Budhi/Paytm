import { useState } from "react";
import "./Navbar.css";
import RechargeBills from "../RechargeBills/RechargeBills";
import TicketBooking from "../TicketBooking/TicketBooking";
import PaymentServices from "../PaymentsServices/PaymentsServices";
import PaytmBusiness from "../PaytmBusiness/PaytmBusiness";
import Company from "../Company/Company";
import { FaUserCircle, FaDownload } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import logo from "../../assets/Images/Logo.png";
import travel from "../../assets/Images/Paytm_Travel_Logo.svg";

const Navbar = () => {
    const [activeMenu, setActiveMenu] = useState(null);
  const [showProfile, setShowProfile] = useState(false);
  const [downloadText, setDownloadText] = useState("Download App");

  const location = useLocation();

  const getNavbarImage = () => {
    console.log(location, "location");
    switch (location.pathname) {
      case "/trains":
        return travel;
      case "/bus":
        return travel;
      case "/flights":
        return travel;
      default:
        return logo;
    }
  };
   

    const handleMouseEnter = (menu) => {
    setActiveMenu(menu);
  };

  const handleMouseLeave = () => {
    setActiveMenu(null);
  };


  return (
    <nav className="navbar">
      {/* LEFT */}
      <div className="nav-left">
        <img
          src={getNavbarImage()}
          alt="Navbar Banner"
          className="navbar-image"
        />
      </div>

      {/* CENTER */}
      <ul className="nav-menu">
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("Recharge")}
          onMouseLeave={handleMouseLeave}
        >
          Recharge & Bills
          {activeMenu === "Recharge" && <RechargeBills />}
        </li>

        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("TicketBooking")}
          onMouseLeave={handleMouseLeave}
        >
          Ticket Booking
          {activeMenu === "TicketBooking" && <TicketBooking />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("PaymentServices")}
          onMouseLeave={handleMouseLeave}
        >
          Payments & Services
          {activeMenu === "PaymentServices" && <PaymentServices />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("PaytmBusiness")}
          onMouseLeave={handleMouseLeave}
        >
          Paytm for Business
          {activeMenu === "PaytmBusiness" && <PaytmBusiness />}
        </li>
        <li
          className="nav-item"
          onMouseEnter={() => handleMouseEnter("Company")}
          onMouseLeave={handleMouseLeave}
        >
          Company
          {activeMenu === "Company" && <Company />}
        </li>
      </ul>

      {/* RIGHT */}
      <div className="nav-right">
        <button className="download-btn">
          <FaDownload /> {downloadText}
        </button>

        <div
          className="profile-wrapper"
          onClick={() => setShowProfile(!showProfile)}
        >
          <button className="signin-btn">
            <FaUserCircle /> Sign In
          </button>

          {showProfile && (
            <div className="profile-dropdown">
              <p>Login</p>
              <p>Create Account</p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
