import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import profileIcon from "../../assets/Images/Facetune_04-04-2023-11-44-41.jpg";
import CheckIn from "../../assets/Icons/Check-in.svg";
import "./Google.scss";
/* global google */

function Google({ center = { lat: 26.1224, lng: -80.1373 } }) {
  const [startGame, setStartGame] = useState(false);

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
            url: profileIcon,
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
  });

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
