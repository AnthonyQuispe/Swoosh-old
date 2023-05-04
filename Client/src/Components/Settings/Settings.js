import "./Settings.scss";
import Close from "../../assets/Icons/close.png";
import Info from "../../assets/Icons/info.png";
import Logout from "../../assets/Icons/exit.png";
import Pay from "../../assets/Icons/pay.png";
import Location from "../../assets/Icons/location.png";
import Blocked from "../../assets/Icons/block.png";
import Notification from "../../assets/Icons/notification.png";
import Account from "../../assets/Icons/user.png";

const Settings = ({ setShowSettings }) => {
  const handleSettingClick = () => {
    setShowSettings(false);
  };
  return (
    <div className="settings">
      <div className="settings__top">
        <button className="settings__close-button" onClick={handleSettingClick}>
          <img className="settings__close-button-icon" src={Close} alt="chat" />
        </button>
        <p className="settings__header">Settings</p>
      </div>
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
      <button className="settings__item">
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
      <button className="settings__item">
        <img
          className="settings__item-img"
          src={Location}
          alt="Location Button"
        />
        <p className="settings__item-text settings__item-text--languages">
          Location
        </p>
      </button>
      <button className="settings__item">
        <img className="settings__item-img" src={Pay} alt="Pay Button" />
        <p className="settings__item-text settings__item-text--payment">
          Payments
        </p>
      </button>
      <button className="settings__item">
        <img className="settings__item-img" src={Info} alt="Info Button" />
        <p className="settings__item-text settings__item-text--about">About</p>
      </button>
      <button className="settings__item">
        <img className="settings__item-img" src={Logout} alt="Logout Button" />
        <p className="settings__item-text settings__item-text--logout">
          Log Out
        </p>
      </button>
    </div>
  );
};

export default Settings;
