import "./SignIn.scss";
import backArrow from "../../assets/Icons/previous.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../../firebase-config";
import GoogleIcon from "../../assets/Icons/google.png";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userEmail, setUserEmail] = useState("");

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
    <form onSubmit={handleSubmit} className="signin">
      <Link to={`/`}>
        <img className="signin__backArrow" src={backArrow} alt="back icon" />
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
        <input type="checkbox" id="checkbox" required name="checkbox" />
        <label htmlFor="checkbox" className="check-box" value />
        <label className="signin__privacy">Remember me </label>
      </div>
      <button className="signin__button">Continue</button>

      <div className="signin__bottom-textcontainer">
        <p className="signin__bottom-textcontainer-text">
          Don't have an account?
        </p>
        <Link to={`/signup`} className="signin__bottom-textcontainer-link">
          {" "}
          <p className="signin__bottom-textcontainer-signin">Sign Up</p>
        </Link>
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
