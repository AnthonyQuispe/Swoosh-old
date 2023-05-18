import "./Home.scss";
import Highlights1 from "../../assets/Media/SwooshIOS.mp4";
import { Link } from "react-router-dom";
import SwooshLogo from "../../assets/Icons/Swoosh Logo.svg";

const Home = () => {
  return (
    <div className="home">
      <video autoPlay muted loop playsInline className="home__video">
        <source src={Highlights1} type="video/mp4" />
      </video>
      <h1 className="home__header">Swoosh</h1>
      <img className="home__logo" src={SwooshLogo} alt="Swoosh icon" />
      <div className="home__bottom">
        <Link to={`/signup`}>
          <button className="home__bottom-button">
            <p className="home__bottom-text">GET STARTED</p>
          </button>
        </Link>
        <div className="home__bottom-textcontainer">
          <p className="home__bottom-textcontainer--text">
            ALREADY HAVE AN ACCOUNT?
            <Link to={`/signin`} className="home__bottom-textcontainer--link">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
