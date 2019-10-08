import React from 'react';
import './styles/index.css';

import Navbar from './components/Navbar/Navbar.js';
import Header from './components/Header/Header.js';
import Main from './components/Main/Main.js';
import Footer from './components/Footer/Footer.js';

function App() {

  return (
    <div>
      <Navbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );

}

export default App;
