import React from "react";
import "./AccountCenter.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/previous.png";

const AccountCenter = () => {
  return (
    <div className="account">
      <Link to={`/dashboard`}>
        <img className="about__back-arrow" src={backArrow} alt="back icon" />
      </Link>
      <h1 className="account__header">Account Center</h1>
      <p className="account__body">
        Please make sure to read everything before making any changes.
      </p>
      <h2 className="account__sub-header">Reset password</h2>
      <p className="account__body">
        Enter the email associated with your account and we'll send an email
        with instructions to reset your password.
      </p>
      <label className="account__input-label">
        Email address:
        <input
          className="account__input-email"
          placeholder="Enter Email Address"
        ></input>
      </label>
      <h2 className="account__sub-header">Delete Account</h2>
      <p className="account__body">
        Warning: Deleting your account will permanently remove all of your data
        and cannot be undone. Before you proceed, please consider the following:
        Once you delete your account, you will no longer be able to access any
        of your information on this platform. Any content you've shared,
        including posts, comments, and messages, will be permanently deleted.
        Your account cannot be restored once it has been deleted. If you're sure
        you want to proceed with deleting your account, please confirm your
        decision below. If you have any concerns or questions, please reach out
        to our support team for assistance.
      </p>
      <button className="account__delete-button">Delete</button>
    </div>
  );
};

export default AccountCenter;
