import Nav from "../Nav/Nav";
import BottomNav from "../BottomNavBar/BottomNavBar";
import Settings from "../Settings/Settings";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import { useState, useEffect } from "react";
import { Loader } from "@googlemaps/js-api-loader";
import profileIcon from "../../assets/Images/Facetune_04-04-2023-11-44-41.jpg";
import "./Dashboard.scss";
/* global google */

function Dashboard() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="dashboard__container">
      <GoogleMaps />
      {showSettings && <Settings setShowSettings={setShowSettings} />}
      <Nav setShowSettings={setShowSettings} />
      <div id="map"></div>
      <BottomNav />
    </div>
  );
}
export default Dashboard;
