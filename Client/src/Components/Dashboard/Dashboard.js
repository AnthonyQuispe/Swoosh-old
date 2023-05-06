import "./Dashboard.scss";
import Nav from "../Nav/Nav";
import BottomNav from "../BottomNavBar/BottomNavBar";
import Settings from "../Settings/Settings";
import { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import axios from "axios";

function Dashboard() {
  const [showSettings, setShowSettings] = useState(false);
  const [apiKey, setApiKey] = useState("");

  useEffect(() => {
    axios
      .post("https://us-central1-swoosh-1d0a9.cloudfunctions.net/getLatLng")
      .then((response) => {
        setApiKey(response.data.apiKey);

        const loader = new Loader({
          apiKey: response.data.apiKey,
          version: "weekly",
        });

        loader
          .load()
          .then(() => {
            const map = new google.maps.Map(document.getElementById("map"), {
              center: { lat: 37.7749, lng: -122.4194 },
              zoom: 8,
            });
          })
          .catch((error) => {
            console.error(error);
          });
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  return (
    <div className="dashboard__container">
      {showSettings && <Settings setShowSettings={setShowSettings} />}
      <Nav setShowSettings={setShowSettings} />
      <div id="map"></div>
      <BottomNav />
    </div>
  );
}
export default Dashboard;
