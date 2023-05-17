import React, { useState } from "react";
import "./Chat.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/Left-Arrow.png";
import PlusIcon from "../../assets/Icons/plus (3).png";
import Michael from "../../assets/Icons/Michael-Jordan.jpeg";
import Chats from "../../Components/Chats/Chats";

const Chat = () => {
  const [showChats, setShowChats] = useState(false);

  const handleChatClick = () => {
    setShowChats(!showChats);
  };
  const handleCloseChats = () => {
    setShowChats(false);
  };

  return (
    <div className="chat__background">
      {showChats && <Chats onClose={handleCloseChats} />}
      <div className="chat">
        <div className="chat__container">
          <Link to={`/dashboard`}>
            <button className="chat__button--back">
              <img
                className="chat__button--back-image"
                src={backArrow}
                alt="back icon"
              />
            </button>
          </Link>
          <h1 className="chat__header">Chat</h1>
          <div className="chat__container--all">
            <h2 className="chat__subheader chat__all">All</h2>
            <h2 className="chat__subheader">Friends</h2>
            <img
              className="chat__button--plus"
              src={PlusIcon}
              alt="back icon"
            />
          </div>
          <div className="chat__card">
            <div className="chat__cards" onClick={handleChatClick}>
              <img
                alt="friend profile"
                src={Michael}
                className="chat__profile-pic"
              />
              <div className="chat__cards--text">
                <h3>Michael Jordan</h3>
                <h4>Welcome to Swoosh</h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
