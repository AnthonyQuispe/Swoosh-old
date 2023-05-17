import React from "react";
import "./AccountCenter.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/Left-Arrow.png";
import { useState } from "react";
import { sendPasswordResetEmail, deleteUser } from "../../firebaseAuth";

const AccountCenter = () => {
  const [email, setEmail] = useState("");

  const handleResetPassword = (e) => {
    e.preventDefault();

    sendPasswordResetEmail(email, setEmail)
      .then(() => {
        console.log("Password reset email sent!");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const handleDeleteAccount = () => {
    // Delete user account
    deleteUser()
      .then(() => {
        console.log("User account deleted successfully!");
        // Add any additional actions you want to perform after successful account deletion
      })
      .catch((error) => {
        console.error("Error deleting user account:", error);
        // Handle any error that occurred during account deletion
      });
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
        <h1 className="account__back-container--header">Account Center</h1>
      </div>
      <form onSubmit={handleResetPassword} className="account__rest-container">
        <h2 className="account__rest-container--header">Reset password</h2>
        <p className="account__rest-container--body">
          Enter the email associated with your account and we'll send an email
          with instructions to reset your password.
        </p>
        <label className="account__rest-container--label">
          Email address:
          <input
            className="account__rest-container--input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </label>
      </form>
      <div className="account__delete-container">
        <h2 className="account__delete-container--header">Delete Account</h2>
        <p className="account__delete-container--body">
          Warning: Deleting your account will permanently remove all of your
          data and cannot be undone. Before you proceed, please consider the
          following: Once you delete your account, you will no longer be able to
          access any of your information on this platform. Any content you've
          shared, including posts, comments, and messages, will be permanently
          deleted. Your account cannot be restored once it has been deleted. If
          you're sure you want to proceed with deleting your account, please
          confirm your decision below. If you have any concerns or questions,
          please reach out to our support team for assistance.
        </p>
        <button
          className="account__delete-container--button"
          onClick={handleDeleteAccount}
        >
          <p className="account__delete-container--delete">Delete</p>
        </button>
      </div>
    </div>
  );
};

export default AccountCenter;
