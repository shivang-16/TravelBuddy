import React from "react";
import Travel from "./components/TravelPage";
import Navbar from "./components/Navbar";
import LandingPage from "./components/LandingPage";
import { BrowserRouter as Router , Routes, Route } from "react-router-dom";
import "./styles/app.scss";

function App() {
  return (
    <Router>
      <Navbar/>
      <Routes>
          <Route exact path="/" element={<LandingPage/>} />
          <Route exact path="/travel" element={<Travel/>} />

      </Routes>
  
    </Router>
  );
}

export default App;
