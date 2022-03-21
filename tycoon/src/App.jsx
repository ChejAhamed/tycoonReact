import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import Header from './compoments/Header';
import Footer from './compoments/Footer';

import Home from './pages/Home';
import Tycoon from './pages/Tycoon';
import Aboutus from './pages/Aboutus';

function App() {
  return (

    <Router>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/aboutus" element={<Aboutus />} />
        <Route path="/tycoon" element={<Tycoon />} />

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
