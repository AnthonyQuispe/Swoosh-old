import "./Dashboard.scss";
import Nav from "../Nav/Nav";
import BottomNav from "../BottomNavBar/BottomNavBar";
import Settings from "../Settings/Settings";
import { useState } from "react";

function Dashboard() {
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="dashboard__container">
      {showSettings && <Settings setShowSettings={setShowSettings} />}
      <Nav setShowSettings={setShowSettings} />
      <BottomNav />
    </div>
  );
}
export default Dashboard;
