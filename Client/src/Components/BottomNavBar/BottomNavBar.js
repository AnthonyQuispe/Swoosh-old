import CheckIn from "../../assets/Icons/Check-in.svg";
import PeopleIcon from "../../assets/Icons/group.png";
import ProfileIcon from "../../assets/Icons/Profile.png";
import LeaderboardIcon from "../../assets/Icons/crown.png";

import "./BottomNavBar.scss";

const BottomNav = (props) => {
  return (
    <nav className="bottomNav-container">
      {/* <button className="bottomNav-checkin-button ">
        <img
          src={CheckIn}
          alt="Star Game Button"
          className="bottomNav-checkin-button-img"
          onClick={props.onStartGame}
        />
        <p>Start Game</p>
      </button> */}
      {/* <button className="bottomNav-checkin-button">
        <img
          src={CheckIn}
          alt="Check In Button"
          className="bottomNav-checkin-button-img"
        />
        <p>Check In</p>
      </button> */}
      <div className="bottomNav-container--details">
        <button className="bottomNav-container--details-extender"></button>
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
