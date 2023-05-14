import React from "react";
import "./About.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/previous.png";

const aboutPolicy = () => {
  return (
    <div className="about">
      <Link to={`/dashboard`}>
        <img className="about__back-arrow" src={backArrow} alt="back icon" />
      </Link>
      <h1 className="about__header">Privacy Policy</h1>
      <p className="about__body">
        At Pickup Game, we take your privacy seriously. This policy outlines the
        types of personal information we may collect and how we use that
        information.
      </p>
      <h2 className="about__sub-header">What information do we collect?</h2>
      <p className="about__body">
        We collect information that you provide to us when you create an
        account, such as your name and email address. We also collect
        information about your activity on the app, including the games you join
        and your performance ratings.
      </p>
      <h2 className="about__sub-header">How do we use your information?</h2>
      <p className="about__body">
        We use your information to improve the app and provide better
        recommendations for games based on your preferences and activity. We may
        also use your information to communicate with you about the app or new
        games that may interest you.
      </p>
      <h2 className="about__sub-header">Do we share your information?</h2>
      <p className="about__body">
        We do not sell or share your personal information with third parties for
        their marketing purposes. We may share your information with service
        providers that help us operate the app or perform functions on our
        behalf, such as sending notifications or processing payments.
      </p>
      <h2 className="about__sub-header">How do we protect your information?</h2>
      <p className="about__body">
        We take appropriate measures to protect your personal information,
        including encryption of data in transit and at rest, and limiting access
        to personal information to authorized personnel.
      </p>
      <h2 className="about__sub-header">Changes to this policy</h2>
      <p className="about__body">
        We may update this privacy policy from time to time. We will notify you
        of any material changes to this policy by posting a notice on the app or
        by sending you an email.
      </p>
      <h2 className="about__sub-header">Contact us</h2>
      <p className="about__body">
        If you have any questions or concerns about this privacy policy or our
        practices, please contact us at support@pickupgame.com.
      </p>
    </div>
  );
};

export default aboutPolicy;
