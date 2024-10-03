import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Team from "./pages/Team";
import Footer from "./components/Footer"; // Import the Footer component
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        {/* Content wrapper to push footer down */}
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/team" element={<Team />} />
          </Routes>
        </div>
        <Footer /> {/* Include the footer at the bottom */}
      </div>
    </Router>
  );
}

export default App;