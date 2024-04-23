import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/component/Navbar";
import Home from "../src/component/Home";
import Login from "../src/component/Login";
import Signup from "./component/Signup";
import Footer from "./component/Footer";
import About from "./component/About";
import Gymgoals from "./component/Gymgoals";
import React, { useState } from "react";
import Feedback from "./component/Feedback";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar />} />
        <Route
          path="/Login"
          element={<Login setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route
          path="/Signup"
          element={<Signup setIsLoggedIn={setIsLoggedIn} />}
        />
        <Route path="/About" element={<About />} />{" "}
        {/* New route for About component */}
        <Route path="/gymgoals" element={<Gymgoals />} />
        <Route path="/feedback" element={<Feedback />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
