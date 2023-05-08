import "./Home.scss";
import Highlights2 from "../../assets/Media/Swoosh3.mp4";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home">
      <div className="home__video">
        <video autoPlay muted loop className="home__video-content">
          <source src={Highlights2} type="video/mp4" />
        </video>
      </div>
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
