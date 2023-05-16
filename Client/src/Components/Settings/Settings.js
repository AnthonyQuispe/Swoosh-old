import "./Settings.scss";
import Close from "../../assets/Icons/close.png";
import Info from "../../assets/Icons/info.png";
import Logout from "../../assets/Icons/exit.png";
import Pay from "../../assets/Icons/pay.png";
import Location from "../../assets/Icons/location.png";
import Blocked from "../../assets/Icons/block.png";
import Notification from "../../assets/Icons/notification.png";
import Account from "../../assets/Icons/user.png";
import Email from "../../assets/Icons/email.png";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase-config";
import { useNavigate } from "react-router";
import { useCallback } from "react";
import { Link } from "react-router-dom";

const Settings = ({ setShowSettings }) => {
  const handleSettingClick = () => {
    setShowSettings(false);
  };
  let navigate = useNavigate();

  const logout = async () => {
    await signOut(auth);
    alert("Logout Succesful!");
    navigate("/");
  };

  //Created a feature in which users can ask to turn on Location permission
  const handleLocationClick = useCallback(() => {
    if ("geolocation" in navigator) {
      navigator.permissions.query({ name: "geolocation" }).then((result) => {
        if (result.state === "granted") {
          alert("Location Permission is already Active");
          // location permission is already granted, do nothing but show prompt
        } else if (result.state === "prompt") {
          // location permission is not granted or denied, show browser prompt
          navigator.geolocation.getCurrentPosition(
            () => {}, // success callback
            () => {}, // error callback
            { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
          );
        } else {
          // location permission is denied or unavailable, show error message
          alert("Location permission is denied or unavailable.");
        }
      });
    } else {
      // geolocation API is not supported in this browser, show error message
      alert("Geolocation is not supported in this browser.");
    }
  }, []);

  const handlePaymentClick = () => {
    alert("This feature is coming soon");
  };

  const handleNotificationClick = () => {
    alert("You have Notification Active");
  };

  return (
    <div className="settings">
      <div className="settings__top">
        <button className="settings__close-button" onClick={handleSettingClick}>
          <img className="settings__close-button-icon" src={Close} alt="chat" />
        </button>
        <p className="settings__header">Settings</p>
      </div>
      <Link to={"/contact"}>
        <button className="settings__item">
          <img
            className="settings__item-img"
            src={Email}
            alt="Contact Button"
          />
          <p className="settings__item-text settings__item-text--about">
            Reach Out To Developer
          </p>
        </button>
      </Link>
      <Link to={"/account"}>
        <button className="settings__item">
          <img
            className="settings__item-img"
            src={Account}
            alt="Account Button"
          />
          <p className="settings__item-text settings__item-text--account">
            Account Center
          </p>
        </button>
      </Link>

      <button className="settings__item" onClick={handleNotificationClick}>
        <img
          className="settings__item-img"
          src={Notification}
          alt="Notification Button"
        />
        <p className="settings__item-text settings__item-text--notification">
          Smart Notification
        </p>
      </button>
      <button className="settings__item">
        <img
          className="settings__item-img"
          src={Blocked}
          alt="Blocked Button"
        />
        <p className="settings__item-text settings__item-text--blocked">
          Blocked
        </p>
      </button>
      <button className="settings__item" onClick={handleLocationClick}>
        <img
          className="settings__item-img"
          src={Location}
          alt="Location Button"
        />
        <p className="settings__item-text settings__item-text--languages">
          Location
        </p>
      </button>
      <button className="settings__item" onClick={handlePaymentClick}>
        <img className="settings__item-img" src={Pay} alt="Pay Button" />
        <p className="settings__item-text settings__item-text--payment">
          Payments
        </p>
      </button>
      <Link to={"/about"}>
        <button className="settings__item">
          <img className="settings__item-img" src={Info} alt="Info Button" />
          <p className="settings__item-text settings__item-text--about">
            About
          </p>
        </button>
      </Link>

      <button className="settings__item" onClick={logout}>
        <img className="settings__item-img" src={Logout} alt="Logout Button" />
        <p className="settings__item-text settings__item-text--logout">
          Log Out
        </p>
      </button>
    </div>
  );
};

export default Settings;
