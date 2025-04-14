import React from 'react';
import './index.css';
import texts from './data/dataText.json';
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Nav from "./components/Nav/Nav";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer text={texts.footer} />
    </BrowserRouter>
  )
}

export default App;
