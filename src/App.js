import { Route, Routes } from "react-router-dom";

import "./App.css";
import UserLogin from "./pages/user-signup-login/UserLogin";
import UserSignup from "./pages/user-signup-login/UserSignup";
import AdminSignup from "./pages/admin-signup/AdminSignup";
import Home from "./pages/home/Home";
import { ToastContainer } from "react-toastify";
import { Dashboard } from "./pages/dashboard/Dashboard";
import { Books } from "./pages/books/Books";
import { MyBooks } from "./pages/my-books/MyBooks";
import { Students } from "./pages/students/Students";
import { BurrowHistory } from "./pages/burrow-history/BurrowHistory";
import { Reviews } from "./pages/reviews/Reviews";
import { Profile } from "./pages/profile/Profile";

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
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/books" element={<Books />} />
        <Route path="/my-books" element={<MyBooks />} />
        <Route path="/students" element={<Students />} />
        <Route path="/burrow-history" element={<BurrowHistory />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
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
