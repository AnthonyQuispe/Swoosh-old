import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";
import SignIn from "./Components/SignIn/SignIn";
import Home from "./Pages/Home/Home";
import SignUp from "./Components/Signup/SignUp";
import AboutPolicy from "./Pages/About/About";
import AccountCenter from "./Pages/AccountCenter/AccountCenter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/about" element={<AboutPolicy />} />
      <Route path="/account" element={<AccountCenter />} />
    </Routes>
  );
}

export default App;
