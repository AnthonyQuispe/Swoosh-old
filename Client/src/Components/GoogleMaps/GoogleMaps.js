import { Loader } from "@googlemaps/js-api-loader";
import { useEffect, useState } from "react";
import profileIcon from "../../assets/Icons/Profile.png";
import "./Google.scss";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import { db, auth } from "../../firebase-config";
import { getCollection } from "../../firebaseAuth";
import GoogleInfoModal from "../GoogleInfoModal/GoogleInfoModal";

/* global google */

function Google({ selection, photoURL }) {
  const [createGame, setCreateGame] = useState(false);
  const [userPhotoURL] = useState(photoURL);
  const [startGame, setStartGame] = useState(false);

  const handleStartGame = () => {
    setStartGame(true);
    setCreateGame(false);
  };

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

          //Checking Selection before displaying markers for that sport collection
          if (selection) {
            getCollection(selection).then((collectionData) => {
              for (const user of collectionData) {
                const usersPhotoURL = user.PhotoURL;
                const everyoneMarker = {
                  url: usersPhotoURL || profileIcon,
                  scaledSize: new google.maps.Size(40, 40),
                  className: "profile-marker",
                };

                const { latitude, longitude } = user.marker;
                const newMarker = new google.maps.Marker({
                  position: { lat: latitude, lng: longitude },
                  map: map,
                  icon: everyoneMarker,
                  animation: google.maps.Animation.DROP,
                });
                // add click event listener to the marker
                newMarker.addListener("click", () => {
                  const position = newMarker.getPosition();
                  console.log(
                    `Marker clicked at ${position.lat()}, ${position.lng()}`
                  );
                });
              }
            });
          }

          //sets Current User photo profile to Photo URL
          const profileMarker = {
            url: userPhotoURL || profileIcon,
            scaledSize: new google.maps.Size(40, 40),
            className: "profile-marker",
          };

          // creates a marker for the current user at current location and add it to the map
          if (startGame) {
            const marker = new google.maps.Marker({
              position: { lat: latitude, lng: longitude },
              map: map,
              icon: profileMarker,
              animation: google.maps.Animation.DROP,
            });

            //Google Info Window
            const infoWindowUsers = document.createElement("div");
            infoWindowUsers.classList.add("google__info");
            const title = document.createElement("h3");
            title.classList.add("google__info-title");
            title.innerText = "Game Info";
            const players = document.createElement("p");
            players.classList.add("google__info-players");
            players.innerText = "players {} / {}";

            infoWindowUsers.appendChild(title);
            infoWindowUsers.appendChild(players);

            // add info window to the marker
            const InfoWindow = new google.maps.InfoWindow({
              content: infoWindowUsers,
            });

            // add click event listener to the marker
            marker.addListener("click", () => {
              const position = marker.getPosition();
              console.log(
                `Marker clicked at ${position.lat()}, ${position.lng()}`
              );
              InfoWindow.open(map, marker);
            });

            // Save the marker coordinates and PhotoURL to Firestore

            const user = auth.currentUser;
            const uid = user.uid;

            const data = {
              PhotoURL: userPhotoURL,
              marker: {
                latitude: marker.getPosition().lat(),
                longitude: marker.getPosition().lng(),
              },
            };

            await setDoc(doc(db, selection, uid), data);
          }
        });
      }
    });
  }, [setCreateGame, userPhotoURL, selection, startGame]);

  return (
    <div className="google">
      {createGame && <GoogleInfoModal onStartGame={handleStartGame} />}
      <button
        className="google__create"
        onClick={(event) => {
          event.preventDefault();
          if (selection) {
            setCreateGame(true);
          } else {
            alert("Please select an option before creating the game.");
          }
        }}
      >
        <p className="google__create--text">Create Game</p>
      </button>
    </div>
  );
}

export default Google;
