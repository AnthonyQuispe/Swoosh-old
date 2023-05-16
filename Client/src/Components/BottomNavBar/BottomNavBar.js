import PeopleIcon from "../../assets/Icons/group.png";
import ProfileIcon from "../../assets/Icons/user.png";
import LeaderboardIcon from "../../assets/Icons/crown.png";

import "./BottomNavBar.scss";

const BottomNav = () => {
  return (
    <nav className="bottomNav-container">
      <div className="bottomNav-container--details">
        <div className="bottomNav-container--details-buttons">
          <button className="bottomNav-people-button">
            <img
              src={PeopleIcon}
              alt="People Icon Button"
              className="bottomNav-people-button-img"
            />
          </button>
          <button className="bottomNav-people-button">
            <img
              src={LeaderboardIcon}
              alt="People Icon Button"
              className="bottomNav-people-button-img"
            />
          </button>
          <button className="bottomNav-people-button">
            <img
              src={ProfileIcon}
              alt="People Icon Button"
              className="bottomNav-people-button-img"
            />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
