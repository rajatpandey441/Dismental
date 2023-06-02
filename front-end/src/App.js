import logo from "./logo.svg";
import "./App.css";
import SignUp from "./components/SignUp";
import About from "./components/About";
import Business from "./components/Business";
import Therapists from "./components/Therapists";
import Reviews from "./components/Reviews";

import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";

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
