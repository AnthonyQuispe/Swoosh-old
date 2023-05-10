import "./SignUp.scss";
import backArrow from "../../assets/Icons/previous.png";
import { Link } from "react-router-dom";
import { createUser } from "../../firebaseAuth";
import { useNavigate } from "react-router";

const SignUp = () => {
  // const [RouteSign, setRouteSign] = useState(false);
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
      navigate("/");
    } catch (error) {
      alert("Account creation failed please try again");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="sign">
      <Link to={`/`}>
        <img className="sign__backArrow" src={backArrow} alt="back icon" />
      </Link>
      {/* {RouteSign && <Link to="/"></Link>} */}
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
