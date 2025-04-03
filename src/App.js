import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Games from "./pages/Games";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer"; // Import Footer
import "./App.css";

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <main className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/games" element={<Games />} />
          </Routes>
        </main>
        <Footer /> {/* Footer is placed here */}
      </div>
    </Router>
  );
};

export default App;
