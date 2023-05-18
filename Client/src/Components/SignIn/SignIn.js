import "./SignIn.scss";
import backArrow from "../../assets/Icons/Left-Arrow.png";
import GoogleIcon from "../../assets/Icons/google.png";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import {
  GoogleAuthProvider,
  signInWithPopup,
  getAuth,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
} from "firebase/auth";
import { auth, db } from "../../firebase-config";
import { doc, setDoc } from "firebase/firestore";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const provider = new GoogleAuthProvider();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const auth = getAuth();
      await signInWithEmailAndPassword(auth, email, password);
      // handle successful sign in
      alert("Login Succesful!");
      setUserEmail(auth.currentUser.email); // or auth.currentUser.uid
      navigate("/dashboard", { state: { userEmail: auth.currentUser.email } });
    } catch (error) {
      alert("Invalid email or password");
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
    <form onSubmit={handleSubmit} className="signin">
      <Link to={`/`}>
        <button className="signin__back-button">
          <img
            className="signin__back-button--arrow"
            src={backArrow}
            alt="back icon"
          />
        </button>
      </Link>
      <h1 className="signin__header">Swoosh</h1>
      <h3 className="signin__title">Log In </h3>
      <div className="signin__container">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          required
          className="signin__container--input"
          onChange={(event) => {
            setEmail(event.target.value);
          }}
        />
      </div>
      <div className="signin__container">
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          required
          className="signin__container--input"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
      </div>
      <div className="checkbox-wrapper-19">
        <input type="checkbox" id="checkbox" name="checkbox" />
        <label htmlFor="checkbox" className="check-box" value />
        <label className="signin__privacy">Remember me </label>
      </div>
      <button className="signin__bottom--button">CONTINUE</button>
      <div className="signin__bottom-textcontainer">
        <p className="signin__bottom-textcontainer-text">
          Don't have an account?{" "}
          <Link to={`/signup`} className="signin__bottom-textcontainer-link">
            Sign Up
          </Link>
        </p>
      </div>
      <Link className="signin__bottom--forgotLink">
        <p className="signin__bottom--forgot">Forgot Password?</p>
      </Link>
      <button onClick={signInWithGoogle} className="signin__button--google">
        <img
          className="signin__button--google-img"
          src={GoogleIcon}
          alt="back icon"
        />
        <p>Sign in with Google</p>
      </button>
    </form>
  );
};

export default SignIn;
