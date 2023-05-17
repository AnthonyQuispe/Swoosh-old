import React from "react";
import "./Chats.scss";
import backArrow from "../../assets/Icons/Left-Arrow.png";
import Michael from "../../assets/Icons/Michael-Jordan.jpeg";

const Chats = ({ onClose }) => {
  return (
    <div className="chats">
      <button className="chats__button--back" onClick={onClose}>
        <img
          className="chat__button--back-image"
          src={backArrow}
          alt="back icon"
        />
      </button>
      <div className="chats__top">
        <img alt="friend profile" src={Michael} className="chat__profile-pic" />
        <h2 className="chats__top--header">Michael Jordan</h2>
      </div>
      <div className="chats__bottom"></div>
    </div>
  );
};

export default Chats;
