import { Route, Routes } from "react-router-dom";

import "./App.css";
import UserLogin from "./pages/user-signup-login/UserLogin";
import UserSignup from "./pages/user-signup-login/UserSignup";
import AdminSignup from "./pages/admin-signup/AdminSignup";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";

function App() {
  return (
    <div className="">
      <Routes>
        {/* public routes */}
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<UserLogin />} />
        <Route path="/signup" element={<UserSignup />} />

        {/* private routes */}
        <Route path="/admin-signup" element={<AdminSignup />} />
      </Routes>

      <ToastContainer
        position="top-left"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </div>
  );
}

export default App;
