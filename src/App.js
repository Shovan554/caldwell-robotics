import { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Events from "./pages/Events";
import AboutUs from "./pages/AboutUs";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";
import Gallery from "./pages/Gallery";
import LoadingScreen from "./components/LoadingScreen"; // Import LoadingScreen

import "./App.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a delay for the loading screen
    setTimeout(() => {
      setLoading(false);
    }, 3000); // Adjust the timing as needed
  }, []);

  const handleExplodeEnd = () => {
    setLoading(false); // Ensure the loading screen is removed after the explosion
  };

  return (
    <Router>
      <div className="App">
        {loading ? (
          <LoadingScreen onExplode={handleExplodeEnd} /> // Show the loading screen
        ) : (
          <>
            <Navbar />
            <div className="content">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/team" element={<Team />} />
                <Route path="/events" element={<Events />} />
                <Route path="/aboutUs" element={<AboutUs />} />
                <Route path="/projectPage" element={<ProjectPage />} />
                <Route path="/gallery" element={<Gallery />} />
              </Routes>
            </div>
            <Footer />
          </>
        )}
      </div>
    </Router>
  );
}

export default App;