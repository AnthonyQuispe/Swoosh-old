import "./SignUp.scss";
import Highlights2 from "../../assets/Media/Swoosh3.mp4";

const SignUp = () => {
  return (
    <div className="signup">
      <div className="signup__video">
        <video autoPlay muted loop className="signup__video-content">
          <source src={Highlights2} type="video/mp4" />
        </video>
      </div>
      <h1 className="signup__header">Swoosh</h1>
      <div className="signup__bottom">
        <button className="signup__bottom-button">
          <p className="signup__bottom-button-text">Get started</p>
        </button>
        <div className="signup__bottom-textcontainer">
          <p className="signup__bottom-textcontainer-text">
            Already have an account?
          </p>
          <p className="signup__bottom-textcontainer-signin">Sign In</p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
