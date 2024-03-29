import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './styles/styles.css';
import Build from './components/Build';
import Teams from './components/Teams';
import Login from './components/Login';

function App() {
  return (
    <Router>
        <div className="nav-container"> 
          <Link to='/' className="nav-link">Login</Link><br></br>
          <Link to='/build' className="nav-link">Build a team</Link><br></br>
          <Link to='/teams' className="nav-link">The Teams</Link><br></br>
        </div>
      <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/build" element={<Build />} />
          <Route path="/teams" element={<Teams />} />
      </Routes>
    </Router>
  );
}

export default App;
