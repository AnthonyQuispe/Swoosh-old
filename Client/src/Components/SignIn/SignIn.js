import "./SignIn.scss";
import backArrow from "../../assets/Icons/previous.png";
import { Link } from "react-router-dom";
import { useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";

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
          onChange={(event) => {
            setEmail(event.target.value);
          }}
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
          onChange={(event) => {
            setPassword(event.target.value);
          }}
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
