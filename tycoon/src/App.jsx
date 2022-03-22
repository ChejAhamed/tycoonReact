import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './compoments/Header';
import Footer from './compoments/Footer';

import configureStore from './redux/store';
import Home from './pages/Home';
import Tycoon from './pages/Tycoon';
import Aboutus from './pages/Aboutus';
import Mode from './pages/Mode';
import Rules from './pages/Rules';
import Lobby from './pages/Lobby';
import Game from './pages/Game';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/aboutus" element={<Aboutus />} />
          <Route path="/tycoon" element={<Tycoon />} />
          <Route path="/mode" element={<Mode />} />
          <Route path="/rules" element={<Rules />} />
          <Route path="/lobby" element={<Lobby />} />
          <Route path="/game" element={<Game />} />

        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
