import { Route, Routes } from "react-router-dom";

import "./App.css";
import Login from "./pages/user-signup-login/Login";
import Signup from "./pages/user-signup-login/Signup";
import AdminSignup from "./pages/admin-signup/AdminSignup";
import Home from "./pages/home/Home";

function App() {
  return (
    <div className="">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* private routes */}
        <Route path="/admin-signup" element={AdminSignup} />
      </Routes>
    </div>
  );
}

export default App;
