import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import './App.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* We will add more routes for other pages later */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;