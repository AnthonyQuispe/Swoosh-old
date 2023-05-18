import PeopleIcon from "../../assets/Icons/group.png";
import ProfileIcon from "../../assets/Icons/user2.png";
import LeaderboardIcon from "../../assets/Icons/crown.png";
import { Link } from "react-router-dom";

import "./BottomNavBar.scss";

const BottomNav = () => {
  const handleClick = () => {
    alert("This feature will come soon");
  };

  return (
    <nav className="bottomNav-container">
      <div className="bottomNav-container--details">
        <div className="bottomNav-container--details-buttons">
          <button className="bottomNav-people-button" onClick={handleClick}>
            <img
              src={PeopleIcon}
              alt="People Icon Button"
              className="bottomNav-people-button-img"
            />
          </button>{" "}
          <Link to={"/leaderboard"}>
            <button className="bottomNav-people-button">
              <img
                src={LeaderboardIcon}
                alt="People Icon Button"
                className="bottomNav-people-button-img"
              />
            </button>
          </Link>
          <Link to={"/profile"}>
            <button className="bottomNav-people-button">
              <img
                src={ProfileIcon}
                alt="People Icon Button"
                className="bottomNav-people-button-img"
              />
            </button>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default BottomNav;
