import "./SignUp.scss";
import backArrow from "../../assets/Icons/previous.png";
import { Link } from "react-router-dom";

const SignUp = () => {
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
      <h3 className="sign__title">Create your Account </h3>
      <div className="sign__name--container">
        <div className="sign__input--container">
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="First Name"
            required
            className="sign__container--nameInput"
          />
        </div>
        <div className="sign__input--container">
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Last Name"
            required
            className="sign__container--nameInput"
          />
        </div>
      </div>

      <div className="sign__container">
        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
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
      <div className="sign__container">
        <input
          type="password"
          name="confirmPassword"
          id="confirmPassword"
          placeholder="Confirmed Password"
          required
          className="sign__container--input"
        />
      </div>
      <div className="checkbox-wrapper-19">
        <input type="checkbox" id="checkbox" required name="checkbox" />
        <label htmlFor="checkbox" className="check-box" value />
        <label className="sign__privacy">
          I Agree with{" "}
          <Link to="/privacy" className="privacy">
            privacy
          </Link>{" "}
          and{" "}
          <Link to="/policy" className="policy">
            policy
          </Link>
        </label>
      </div>
      <button className="sign__button">Continue</button>

      <div className="sign__bottom-textcontainer">
        <p className="sign__bottom-textcontainer-text">
          Already have an account?
        </p>
        <Link to={`/signin`} className="sign__bottom-textcontainer-link">
          {" "}
          <p className="sign__bottom-textcontainer-signin">Sign In</p>
        </Link>
      </div>
    </form>
  );
};

export default SignUp;
