import React from 'react';

import Header from './components/Header';
import Home from './pages/Home';
import Footer from './components/Footer';

import { Global } from './sytles/global'

function App() {
  return (
    <>
      <Header />
      <Home />
      <Footer />
      <Global />
    </>
  );
}

export default App;
