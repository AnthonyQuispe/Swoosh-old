import Nav from "../Nav/Nav";
import BottomNav from "../BottomNavBar/BottomNavBar";
import Settings from "../Settings/Settings";
import GoogleMaps from "../GoogleMaps/GoogleMaps";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import "./Dashboard.scss";

function Dashboard() {
  const [showSettings, setShowSettings] = useState(false);
  const [selection, setSelection] = useState("");
  const location = useLocation();
  const userEmail = location.state?.userEmail;
  const photoURL = location.state?.photoURL;

  // console.log(location.state); // check the value of location.state
  // console.log(userEmail); // check the value of userEmail

  // const myObj = JSON.parse(
  //   window.sessionStorage.getItem(
  //     "firebase:authUser:AIzaSyCSOz8N3axDiWvLj0BGLtJXEcNkHkwmmVg:[DEFAULT]"
  //   )
  // );
  // console.log(myObj);

  return (
    <div className="dashboard__container">
      <GoogleMaps
        userEmail={userEmail}
        selection={selection}
        photoURL={photoURL}
      />
      {showSettings && (
        <Settings setShowSettings={setShowSettings} userEmail={userEmail} />
      )}
      <Nav
        setShowSettings={setShowSettings}
        userEmail={userEmail}
        setSelection={setSelection}
      />
      <div id="map"></div>
      <BottomNav />
    </div>
  );
}
export default Dashboard;
