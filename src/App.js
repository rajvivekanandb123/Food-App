import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Success from '/home/raju/Desktop/food-app/src/Store/slices/success.js';
import Error from './pages/error';
import Protected from '/home/raju/Desktop/food-app/src/components/protected.jsx';
function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/success' element={<Protected element={<Success />} />} />
        <Route path='/*' element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
