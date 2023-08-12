import logo from "./logo.svg";
import "./App.css";
import SignUp from "./pages/SignUp";
import About from "./pages/About";
import Business from "./pages/Business";
import Therapists from "./pages/Therapists";
import Reviews from "./pages/Reviews";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./pages/Profile";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/about" element={<About />} />
        <Route path="/business" element={<Business />} />
        <Route path="/therapists" element={<Therapists />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
