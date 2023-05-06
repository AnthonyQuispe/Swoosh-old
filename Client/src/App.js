import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/basketball" element={<Dashboard />} />
      <Route path="/football" element={<Dashboard />} />
      <Route path="/futbol" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
