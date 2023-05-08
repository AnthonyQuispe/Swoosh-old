import "./SignIn.scss";
import backArrow from "../../assets/Icons/previous.png";
import { Link } from "react-router-dom";

const SignIn = () => {
  const handleSubmit = (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (!firstName || !lastName) {
      alert("Please enter your first and last name.");
      return;
    }

    // Validate email
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }

    // Validate password and confirm password
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    // All fields are valid, continue with submission
    // TODO: Add logic to submit form data to backend API
    console.log(handleSubmit);

    console.log({
      firstName,
      lastName,
      email,
      password,
      confirmPassword,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="sign">
      <Link to={`/`}>
        <img className="sign__backArrow" src={backArrow} alt="back icon" />
      </Link>
      <h1 className="sign__header">Swoosh</h1>
      <h3 className="sign__title">Log In </h3>
      <div className="sign__container">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
          className="sign__container--input"
        />
      </div>
      <div className="sign__container">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          className="sign__container--input"
        />
      </div>
      <div className="checkbox-wrapper-19">
        <input type="checkbox" id="checkbox" required name="checkbox" />
        <label htmlFor="checkbox" className="check-box" value />
        <label className="sign__privacy">Remember me </label>
      </div>
      <button className="sign__button">Continue</button>

      <div className="sign__bottom-textcontainer">
        <p className="sign__bottom-textcontainer-text">
          Don't have an account?
        </p>
        <Link to={`/signup`} className="sign__bottom-textcontainer-link">
          {" "}
          <p className="sign__bottom-textcontainer-signin">Sign Up</p>
        </Link>
      </div>
    </form>
  );
};

export default SignIn;
