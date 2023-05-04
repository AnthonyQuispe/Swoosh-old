import "./Dashboard.scss";
import Nav from "../Nav/Nav";
import BottomNav from "../BottomNavBar/BottomNavBar";

function Dashboard() {
  return (
    <div className="dashboard__container">
      <Nav />
      <BottomNav />
    </div>
  );
}
export default Dashboard;
