import { useState } from "react";
import "./Navbar.css";
import RechargeBills from "../RechargeBills/RechargeBills";
import { FaUserCircle, FaDownload } from "react-icons/fa";
import { useLocation } from "react-router-dom";
import logo from "../../assets/Images/Logo.png";
import travel from "../../assets/Images/Paytm_Travel_Logo.svg";

const Navbar = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [downloadText, setDownloadText] = useState("Download App");

  const [showRecharge, setShowRecharge] = useState(false);

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
          onMouseEnter={() => setShowRecharge(true)}
          onMouseLeave={() => setShowRecharge(false)}
        >
          Recharge & Bills
          {showRecharge && <RechargeBills />}
        </li>

        <li className="nav-item">Ticket Booking</li>
        <li className="nav-item">Payments & Services</li>
        <li className="nav-item">Paytm for Business</li>
        <li className="nav-item">Company</li>
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
