import settings from "../../assets/Icons/Setting.png";
import Chat from "../../assets/Icons/Chat.png";
import BasketballImage from "../../assets/Icons/Basketball.png";
import FutbolImage from "../../assets/Icons/football.png";
import RunningImage from "../../assets/Icons/run.png";
import Forward from "../../assets/Icons/play 1.png";
import Backwards from "../../assets/Icons/play 2 (1).png";
import { useState } from "react";
import "./Nav.scss";
import { Link } from "react-router-dom";

const Nav = ({ setShowSettings, userEmail, setSelection }) => {
  const [selectedSportIndex, setSelectedSportIndex] = useState(0);

  const sports = [
    { name: "Basketball", image: BasketballImage },
    { name: "Futbol", image: FutbolImage },
    { name: "Running", image: RunningImage },
  ];

  const handleSettingClick = () => {
    setShowSettings(true);
  };

  const handleNextClick = () => {
    setSelectedSportIndex((prevIndex) => {
      const newIndex = (prevIndex + 1) % sports.length;
      handleSelectionChange(newIndex);
      return newIndex;
    });
  };

  const handlePrevClick = () => {
    setSelectedSportIndex((prevIndex) => {
      const newIndex = (prevIndex - 1 + sports.length) % sports.length;
      handleSelectionChange(newIndex);
      return newIndex;
    });
  };

  const handleSelectionChange = (index) => {
    const selectedSport = sports[index].name;
    setSelection(selectedSport);
    console.log("Selected Sport:", selectedSport);
  };

  return (
    <nav className="nav-container">
      <Link to={"/chat"}>
        {" "}
        <button className="nav-container__button">
          <img className="nav-button__icon" src={Chat} alt="chat" />
        </button>
      </Link>

      <div className="nav-container__carousel">
        <button
          className="carousel__button carousel__prev"
          onClick={handlePrevClick}
        >
          <img
            src={Backwards}
            alt="backwards arrow"
            className="carousel__button--images"
          />
        </button>
        <button className="carousel__button--image">
          {" "}
          <img
            className="carousel__image"
            src={sports[selectedSportIndex].image}
            alt={sports[selectedSportIndex].name}
          />
        </button>

        <button
          className="carousel__button carousel__next"
          onClick={handleNextClick}
        >
          <img
            src={Forward}
            alt="Forward arrow"
            className="carousel__button--images"
          />
        </button>
      </div>
      <button className="nav-container__button" onClick={handleSettingClick}>
        <img className="nav-button__icon" src={settings} alt="settings" />
      </button>
    </nav>
  );
};

export default Nav;
