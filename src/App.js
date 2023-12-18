import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Dashboard from './components/Dashboard/Dashboard';
import Stocks from './components/Stocks/Stocks';
import Login from './components/Auth/Login';
import './App.css';

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Header />
        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/stocks" element={<Stocks />} />
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<h1>Welcome to Stocks Market Dashboard</h1>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
