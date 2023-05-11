import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import profileIcon from "../../assets/Icons/Profile.png";
import CheckIn from "../../assets/Icons/Check-in.svg";
import "./Google.scss";
import { addDoc, collection } from "firebase/firestore";
import { db } from "../../firebase-config";

/* global google */

function Google({ selection, photoURL }) {
  const [startGame, setStartGame] = useState(false);
  const [userPhotoURL, setUserPhotoURL] = useState(photoURL);

  console.log("Checking selection:", selection);

  useEffect(() => {
    const loader = new Loader({
      apiKey: process.env.REACT_APP_GOOGLE_API,
      version: "beta",
    });

    loader.load().then(() => {
      if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(async (position) => {
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

  return (
    <div>
      <button
        className="google__button"
        onClick={() => {
          if (selection) {
            setStartGame(true);
          } else {
            alert("Please select an option before starting the game.");
          }
        }}
      >
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
