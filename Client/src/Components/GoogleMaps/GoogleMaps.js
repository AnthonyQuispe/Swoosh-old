import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import profileIcon from "../../assets/Icons/Profile.png";
import CheckIn from "../../assets/Icons/Check-in.svg";
import "./Google.scss";
import { addDoc, collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase-config";
import { getCollection } from "../../firebaseAuth";

/* global google */

function Google({ selection, photoURL }) {
  const [startGame, setStartGame] = useState(false);
  const [userPhotoURL] = useState(photoURL);

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

            const inputContainer = document.createElement("div");
            inputContainer.classList.add("google__info-window");
            const input1 = document.createElement("input");
            input1.type = "text";
            input1.value = "How Many Players Needed";
            input1.classList.add("google__info-window--players");

            const input2 = document.createElement("input");
            input2.type = "text";
            input2.value = "Email";
            input2.classList.add("google__info-window--players");

            inputContainer.appendChild(input1);
            inputContainer.appendChild(input2);

            // add info window to the marker
            const InfoWindow = new google.maps.InfoWindow({
              content: inputContainer,
            });

            // add click event listener to the marker
            marker.addListener("click", () => {
              const position = marker.getPosition();
              console.log(
                `Marker clicked at ${position.lat()}, ${position.lng()}`
              );
              InfoWindow.open(map, marker);
            });
          }
        });
      }
      // Call getBasketballCollection function here after the Google Maps API has finished loading
      if (selection) {
        getCollection(selection).then((collectionData) => {
          console.log(collectionData);
        });
      }
    });
  }, [startGame, userPhotoURL, selection]);

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
