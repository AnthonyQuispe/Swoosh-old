import Gear from "../../assets/Icons/gear-icon.svg";
import Chat from "../../assets/Icons/chatbubble-icon.svg";
import "./Nav.scss";

const Nav = ({ setShowSettings, userEmail, setSelection }) => {
  const handleSettingClick = () => {
    setShowSettings(true);
  };
  const handleSelectionChange = (e) => {
    setSelection(e.target.value);
  };

  return (
    <nav className="nav-container">
      <button className="nav-container__chat-button">
        <img className="nav-button__icon" src={Chat} alt="chat" />
      </button>
      <div className="nav-container__filter-dropdown">
        <select
          className="nav-dropdown__select"
          onChange={handleSelectionChange}
        >
          <option value="#"></option>
          <option value="basketball">Basketball</option>
          <option value="futbol">Fútbol</option>
        </select>
      </div>
      <button
        className="nav-container__settings-button"
        onClick={handleSettingClick}
      >
        <img className="nav-button__icon" src={Gear} alt="settings" />
      </button>
    </nav>
  );
};

export default Nav;
