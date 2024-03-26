import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "../src/component//Navbar";
import Home from "../src/component/Home"
import Login from "../src/component/Login"
import Signup from './component/Signup';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Navbar" element={<Navbar/>} />
        <Route path="/Login" element={<Login/>}/>
        <Route path="/Signup" element={<Signup/>}/>
      </Routes>
    </Router>
  );
};

export default App;