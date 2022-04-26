import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import Header from './compoments/Header';
import Footer from './compoments/Footer';

import configureStore from './redux/store';
import Home from './pages/Home/Home';
import Game from './pages/Game/Game';

function App() {
  return (
    <Provider store={configureStore()}>
      <Router>
        <Header />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />

        </Routes>
        <Footer />
      </Router>
    </Provider>
  );
}

export default App;
