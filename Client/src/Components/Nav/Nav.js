import Gear from "../../assets/Icons/gear-icon.svg";
import Chat from "../../assets/Icons/chatbubble-icon.svg";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav className="nav-container">
      <button className="nav-container__chat-button">
        <img className="nav-button__icon" src={Chat} alt="chat" />
      </button>

      <div className="nav-container__filter-dropdown">
        <select className="nav-dropdown__select">
          <option value="basketball">Basketball</option>
          <option value="futbol">Fútbol</option>
          <option value="football">Football</option>
        </select>
      </div>
      <Link to={`/settings`}>
        <button className="nav-container__settings-button">
          <img className="nav-button__icon" src={Gear} alt="settings" />
        </button>
      </Link>
    </nav>
  );
};

export default Nav;
