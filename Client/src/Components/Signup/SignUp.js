import "./SignUp.scss";
import backArrow from "../../assets/Icons/previous.png";
import GoogleIcon from "../../assets/Icons/google.png";
import { Link } from "react-router-dom";
import { createUser } from "../../firebaseAuth";
import { useNavigate } from "react-router";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";

const SignUp = () => {
  let navigate = useNavigate();
  //Validates form before passing it to Firebase Autentication
  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    //Front-End Validation
    if (!firstName || !lastName) {
      alert("Please enter your first and last name.");
      return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    if (password !== confirmPassword) {
      alert("Passwords do not match.");
      return;
    }
    //Firebase Autentication
    try {
      await createUser(firstName, lastName, email, password);
      alert("Account created successfully!");
      // setRouteSign(true);
      navigate("/dashboard", { state: { userEmail: auth.currentUser.email } });
    } catch (error) {
      alert("Account creation failed please try again");
    }
  };

  //Sign in/up using Google Feature
  const provider = new GoogleAuthProvider();
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/dashboard", {
          state: { userEmail: auth.currentUser.email },
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <form onSubmit={handleSubmit} className="sign">
      <div className="sign__top--containter">
        <Link to={`/`}>
          <img className="sign__backArrow" src={backArrow} alt="back icon" />
        </Link>
        <h1 className="sign__header">Swoosh</h1>
      </div>

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
        <Link to={`/dashboard`} className="sign__bottom-textcontainer-link">
          {" "}
          <p className="sign__bottom-textcontainer-signin">Sign In</p>
        </Link>
      </div>
      <button onClick={signInWithGoogle} className="sign__button--google">
        <img
          className="sign__button--google-img"
          src={GoogleIcon}
          alt="back icon"
        />
        <p>Sign up with Google</p>
      </button>
    </form>
  );
};

export default SignUp;
