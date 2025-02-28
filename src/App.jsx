import React from 'react';
import Frompage from './Details/Frompage';
import Heading from './Details/Heading';
import Login from './Details/Login';
import AdminPage from './Details/AdminPage';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Heading" element={<Heading />} />
        <Route path="/form" element={<Frompage />} />
        <Route path="/admin" element={<AdminPage />} />
      </Routes>
    </Router>
  );
}

export default App;