import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import AppProvider from './hooks/index';
import Header from './components/Header';
import Routes from './routes';
import Footer from './components/Footer';

import { Global } from './sytles/global';

function App() {
  return (
    <>
      <AppProvider>
        <BrowserRouter>
          <Header />
          <Routes />
        </BrowserRouter>
      </AppProvider>
      <Footer />
      <Global />
    </>
  );
}

export default App;
