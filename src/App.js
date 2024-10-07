import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Events from "./pages/Events"; // Import the Events page
import AboutUs from "./pages/AboutUs";
import ProjectPage from "./pages/ProjectPage";
import Footer from "./components/Footer";

import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
            <Route path="/events" element={<Events />} /> {/* Add Events route */}
            <Route path="/aboutUs" element={<AboutUs />} /> {/* Add Events route */}
            <Route path="/projectPage" element={<ProjectPage />} /> {/* Add Events route */}
          

          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
