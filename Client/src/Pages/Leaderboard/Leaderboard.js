import React from "react";
import "./Leaderboard.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/Left-Arrow.png";
import profileImage from "../../assets/Images/Facetune_04-04-2023-11-44-41.jpg";
import SecondUser from "../../assets/Icons/charles-etoroma-95UF6LXe-Lo-unsplash 1.png";
import ThirdUser from "../../assets/Icons/jassir-jonis-hSKBleRfj5A-unsplash 1.png";

const Leaderboard = () => {
  return (
    <div className="leaderboard">
      <div className="leaderboard__back-container">
        <Link to={`/dashboard`}>
          <button className="leaderboard__back-container--button">
            <img
              className="leaderboard__back-container--image"
              src={backArrow}
              alt="back icon"
            />
          </button>
        </Link>
        <h1 className="leaderboard__back-container--header">Leaderboard</h1>
      </div>
      <div className="leaderboard__image-container">
        <div className="leaderboard__image-container--rank">
          <p className="leaderboard__image-rank">1</p>
        </div>
        <img
          className="leaderboard__image-icon"
          src={profileImage}
          alt="back icon"
        />
      </div>
      <div className="leaderboard__image-container2">
        <div className="leaderboard__image-container--rank">
          <p className="leaderboard__image-rank">2</p>
        </div>
        <img
          className="leaderboard__image-icon"
          src={SecondUser}
          alt="back icon"
        />
      </div>
      <div className="leaderboard__image-container3">
        <div className="leaderboard__image-container--rank">
          <p className="leaderboard__image-rank">3</p>
        </div>
        <img
          className="leaderboard__image-icon"
          src={ThirdUser}
          alt="back icon"
        />
      </div>
      <div className="leaderboard__bottom-container">
        <div className="leaderboard__bottom-containers">
          <p className="leaderboard__bottom-rank">1</p>
          <img
            className="leaderboard__bottom-image"
            src={profileImage}
            alt="back icon"
          />
          <p className="leaderboard__bottom-name">Anthony Quispe</p>
          <p className="leaderboard__bottom-points">1000</p>
        </div>
        <div className="leaderboard__bottom-containers">
          <p className="leaderboard__bottom-rank">2</p>
          <img
            className="leaderboard__bottom-image"
            src={SecondUser}
            alt="back icon"
          />
          <p className="leaderboard__bottom-name">Kris McNair</p>
          <p className="leaderboard__bottom-points">741</p>
        </div>
        <div className="leaderboard__bottom-containers">
          <p className="leaderboard__bottom-rank">3</p>
          <img
            className="leaderboard__bottom-image"
            src={ThirdUser}
            alt="back icon"
          />
          <p className="leaderboard__bottom-name">Kyla Ester</p>
          <p className="leaderboard__bottom-points">654</p>
        </div>
      </div>
    </div>
  );
};

export default Leaderboard;
