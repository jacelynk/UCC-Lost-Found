
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import '../css/App.css';
import Login from './Login';

function App() {
  return (
    <Router>
      <div className="app-container">
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <div className="image-container">
                  <img src="/vite.svg" alt="UCC Lost and Found" />
                </div>
                <h1 className="label">UCC LOST AND FOUND</h1>
                <Link to="/login">
                  <button className="get-started-button">Get Started</button>
                </Link>
              </div>
            }
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;