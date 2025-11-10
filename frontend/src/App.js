
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import JobBoard from './pages/JobBoard';
import ARVRSim from './pages/ARVRSim';
import NavBar from './components/NavBar';


function App() {
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/jobs" element={<JobBoard />} />
        <Route path="/sim" element={<ARVRSim />} />
      </Routes>
    </Router>
  );
}

export default App;
