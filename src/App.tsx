import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Header from './components/Header';
import Routes from './routes'
import Footer from './components/Footer';

import { Global } from './sytles/global'

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes />
      </BrowserRouter>
      <Footer />
      <Global />
    </>
  );
}

export default App;
