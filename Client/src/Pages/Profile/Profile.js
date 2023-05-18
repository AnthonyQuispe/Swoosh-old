import { useState, useEffect } from "react";
import "./Profile.scss";
import { Link } from "react-router-dom";
import backArrow from "../../assets/Icons/Left-Arrow.png";
import profileImage from "../../assets/Icons/PersonalProfile.png";
import { db, auth } from "../../firebase-config";
import { collection, doc, getDoc } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const Profile = () => {
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const user = auth.currentUser;
      if (!user) {
        return;
      }

      const uid = user.uid;
      console.log("user", user);
      console.log("user", uid);

      const docRef = doc(db, "users", uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const data = docSnap.data();
        setCurrentUser(data);
        console.log(data);
      } else {
        console.log("No such document!");
      }
    };

    fetchData();
  }, []);

  return (
    <div className="profile">
      <div className="profile__back-container">
        <Link to={`/dashboard`}>
          <button className="account__back-container--button">
            <img
              className="profile__back-container--image"
              src={backArrow}
              alt="back icon"
            />
          </button>
        </Link>
        <h1 className="profile__back-container--header">Profile</h1>
      </div>
      <div className="profile__user-container">
        <h2 className="profile__user">{currentUser.username || "name"}</h2>
      </div>
      <div className="profile__image-container">
        <div className="profile__image-container--rank">
          <p className="profile__image-text">Rank</p>
          <p className="profile__image-rank">{currentUser.rank || 0}</p>
          <p className="profile__image-text">Basketball</p>
        </div>
        <img
          className="profile__image-icon"
          src={currentUser.photoURL || profileImage}
          alt="back icon"
        />
      </div>
      <div className="profile__info-container">
        <h3 className="profile__info-location">Miami</h3>
        <p className="profile__info-about--text">
          {" "}
          {currentUser.about || "Write an about Me section here"}
        </p>
        <div className="profile__stats-container">
          <div className="profile__stats-containers">
            <p className="profile__stats-containers--title">Followers</p>
            <p className="profile__stats-containers--numbers">
              {currentUser.followers || 0}
            </p>
          </div>
          <div className="profile__stats-containers">
            <p className="profile__stats-containers--title">Games Played</p>
            <p className="profile__stats-containers--numbers">
              {currentUser.gamesPlayed || 0}
            </p>
          </div>
          <div className="profile__stats-containers">
            <p className="profile__stats-containers--title">Following</p>
            <p className="profile__stats-containers--numbers">
              {currentUser.following || 0}
            </p>
          </div>
        </div>
        <div className="profile__button--container">
          <button className="profile__button--follow">Follow</button>
          <Link to={"/chat"}>
            {" "}
            <button className="profile__button--message">Message</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Profile;
