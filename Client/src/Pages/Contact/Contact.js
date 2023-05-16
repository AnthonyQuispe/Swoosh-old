import React from "react";
import "./Contact.sass";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/Left-Arrow.png";

const ContactDeveloper = () => {
  return (
    <div className="account">
      <div className="account__back-container">
        <Link to={`/dashboard`}>
          <button className="account__back-container--button">
            <img
              className="account__back-container--image"
              src={backArrow}
              alt="back icon"
            />
          </button>
        </Link>
        <h1 className="account__back-container--header">Contact</h1>
      </div>
      <div className="account__rest-container"></div>
    </div>
  );
};

export default ContactDeveloper;
