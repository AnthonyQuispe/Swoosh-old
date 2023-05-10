import "./Home.scss";
import Highlights1 from "../../assets/Media/SwooshIOS.mp4";
// import Logo from "../../assets/Icons/Firebase.png";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__video">
        <video autoPlay muted loop playsInline className="home__video-content">
          <source src={Highlights1} type="video/mp4" />
        </video>
      </div>
      {/* <img className="home__logo" src={Logo} alt="Swoosh Logo" /> */}
      <h1 className="home__header">Swoosh</h1>
      <div className="home__bottom">
        <Link to={`/signup`}>
          <button className="home__bottom-button">
            <p className="home__bottom-button-text">Get started</p>
          </button>
        </Link>

        <div className="home__bottom-textcontainer">
          <p className="home__bottom-textcontainer-text">
            Already have an account?
          </p>
          <Link to={`/signin`} className="home__bottom-textcontainer-link">
            {" "}
            <p className="home__bottom-textcontainer-signin">Sign In</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
