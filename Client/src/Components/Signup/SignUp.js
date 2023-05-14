import "./SignUp.scss";
import backArrow from "../../assets/Icons/previous.png";
import GoogleIcon from "../../assets/Icons/google.png";
import { Link, useNavigate } from "react-router-dom";
import { createUser } from "../../firebaseAuth";
import {
  GoogleAuthProvider,
  signInWithPopup,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";

const SignUp = () => {
  let navigate = useNavigate();
  const provider = new GoogleAuthProvider();

  //Validates form before passing it to Firebase Autentication
  const handleSubmit = async (event) => {
    event.preventDefault();
    const firstName = event.target.firstName.value;
    const lastName = event.target.lastName.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;
    const username = event.target.username.value;

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
      await createUser(firstName, lastName, email, password, username);
      alert("Account created successfully!");
      // setRouteSign(true);
      navigate("/dashboard", {
        state: {
          email: auth.currentUser.email,
          displayName: auth.currentUser.displayName,
        },
      });
    } catch (error) {
      alert("Account creation failed please try again");
    }
  };

  //Sign in/up using Google Feature

  const signInWithGoogle = () => {
    setPersistence(auth, browserSessionPersistence);
    signInWithPopup(auth, provider)
      .then(async (result) => {
        const user = result.user;
        const userRef = doc(db, "users", user.uid);

        const userData = {
          email: user.email,
          photoURL: user.photoURL,
        };

        // Use setDoc to update the user document with the userData object
        await setDoc(userRef, userData, { merge: true });

        navigate("/dashboard", {
          state: {
            userEmail: auth.currentUser.email,
            photoURL: user.photoURL,
            displayName: user.displayName,
          },
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
          minLength={6}
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
        <p className="sign__bottom-textcontainer--text">
          Already have an account?
        </p>
        <Link to={`/dashboard`} className="sign__bottom-textcontainer--link">
          {" "}
          <p className="sign__bottom-textcontainer--signin">Sign In</p>
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
