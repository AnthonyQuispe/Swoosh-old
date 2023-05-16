import { useState } from "react";
import "./Contact.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/Left-Arrow.png";

const ContactDeveloper = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("emailBody").value;
    const email = "anthony.s.quispe@gmail.com";
    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(message)}`;
    window.location.href = mailtoLink;
  };

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
      <form className="account__form" onSubmit={handleSubmit}>
        <div>
          <label className="account__form-label" htmlFor="name">
            Subject:
          </label>
          <input
            type="text"
            id="subject"
            className="account__form-input"
            required
          />
        </div>
        <div>
          <label className="account__form-label" htmlFor="message">
            Message:
          </label>
          <textarea
            id="emailBody"
            className="account__form-input--message"
            required
            placeholder="Type your message here..."
          ></textarea>
        </div>
        <button className="account__form-submit" type="submit">
          Send Email
        </button>
      </form>
    </div>
  );
};

export default ContactDeveloper;
