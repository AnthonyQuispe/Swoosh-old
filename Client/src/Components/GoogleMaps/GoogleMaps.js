import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import profileIcon from "../../assets/Images/Facetune_04-04-2023-11-44-41.jpg";
import CheckIn from "../../assets/Icons/Check-in.svg";
import "./Google.scss";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";

/* global google */

function Google({ userEmail }) {
  const [startGame, setStartGame] = useState(false);
  const [userPhotoURL, setUserPhotoURL] = useState("");

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_API,
      version: "beta",
    });

    loader.load().then(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          const { latitude, longitude } = position.coords;
          const map = new google.maps.Map(document.getElementById("map"), {
            center: { lat: latitude, lng: longitude },
            zoom: 15,
            disableDefaultUI: true,
          });

          const profileMarker = {
            url: userPhotoURL || profileIcon,
            scaledSize: new google.maps.Size(40, 40),
            className: "profile-marker",
          };

          // create marker at current location and add it to the map
          if (startGame) {
            const marker = new google.maps.Marker({
              position: { lat: latitude, lng: longitude },
              map: map,
              icon: profileMarker,
              animation: google.maps.Animation.DROP,
            });

            // add click event listener to the marker
            marker.addListener("click", () => {
              const position = marker.getPosition();
              console.log(
                `Marker clicked at ${position.lat()}, ${position.lng()}`
              );
            });
          }

          const testMarker = new google.maps.Marker({
            position: { lat: 26.035148859786357, lng: -80.27636072861866 },
            map: map,
            icon: profileMarker,
            animation: google.maps.Animation.DROP,
          });
        });
      }
    });
  }, [startGame, userPhotoURL]);

  useEffect(() => {
    const fetchUserPhotoURL = async () => {
      const usersRef = collection(db, "users");
      const userQuery = query(usersRef, where("email", "==", userEmail));
      const userDocs = await getDocs(userQuery);
      if (userDocs.size > 0) {
        const userData = userDocs.docs[0].data();
        setUserPhotoURL(userData.photoURL);
      }
    };
    if (userEmail) {
      fetchUserPhotoURL();
    }
  }, [userEmail]);

  return (
    <div>
      <button className="google__button" onClick={() => setStartGame(true)}>
        <img
          src={CheckIn}
          alt="Star Game Button"
          className="google__button--image"
        />
        <p className="google__button--text">Start Game</p>
      </button>
    </div>
  );
}

export default Google;
