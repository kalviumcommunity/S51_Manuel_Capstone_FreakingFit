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
import Strength from "./component/Strength"
import Muscle from "./component/Muscle";
import Veg from "./component/Veg";
import NonVeg from "./component/NonVeg";
import Strengthdiet from "./component/Strengthdiet";
import Musclestrength from "./component/Musclestrength";
import Mveg from "./component/Mveg";
import Mnonveg from "./component/Mnonveg";
import Fatloss from "./component/Fatloss";
import Fat from "./component/Fat";
import Fnonveg from "./component/Fnonveg";
import Fveg from "./component/Fveg";
import Endurance from "./component/Endurance";
import Endu from "./component/Endu";
import Enduveg from "./component/Enduveg";
import Endunonveg from "./component/Endunonveg";
import Flexibility from "./component/Flexibility";
import Flexdiet from "./component/Flexdiet";
import Flexnonveg from "./component/Flexnonveg";
import Flexveg from "./component/Flexveg";
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
        <Route path="Strength" element={<Strength/>} />
        <Route path="Muscle" element={<Muscle/>} />
        <Route path="Fatloss" element={<Fatloss/>} />
        <Route path="Veg" element={<Veg/>} />
        <Route path="NonVeg" element={<NonVeg/>} />
        <Route path="Musclestrength" element={<Musclestrength/>} />
        <Route path="Mveg" element={<Mveg/>} />
        <Route path="Mnonveg" element={<Mnonveg/>} />
        <Route path="Fat" element={<Fat/>} />
        <Route path="Fveg" element={<Fveg/>} />
        <Route path="Fnonveg" element={<Fnonveg/>} />
        <Route path="endurance" element={<Endurance/>} />
        <Route path="endu" element={<Endu/>} />
        <Route path="Enduveg" element={<Enduveg/>} />
        <Route path="Endunonveg" element={<Endunonveg/>} />
        <Route path="Flexibility" element={<Flexibility/>} />
        <Route path="Flexdiet" element={<Flexdiet/>} />
        <Route path="Flexnonveg" element={<Flexnonveg/>} />
        <Route path="Flexveg" element={<Flexveg/>} />







        <Route path="Strengthdiet" element={<Strengthdiet/>} />


      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
