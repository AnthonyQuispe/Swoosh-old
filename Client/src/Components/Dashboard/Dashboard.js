import Nav from "../Nav/Nav";
import BottomNav from "../BottomNavBar/BottomNavBar";
import Settings from "../Settings/Settings";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.scss";

function Dashboard() {
  const [showSettings, setShowSettings] = useState(false);
  const location = useLocation();
  const userEmail = location.state.userEmail;

  return (
    <div className="dashboard__container">
      <GoogleMaps userEmail={userEmail} />
      {showSettings && (
        <Settings setShowSettings={setShowSettings} userEmail={userEmail} />
      )}
      <Nav setShowSettings={setShowSettings} userEmail={userEmail} />
      <div id="map"></div>
      <BottomNav />
    </div>
  );
}
export default Dashboard;
