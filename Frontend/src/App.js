import React from 'react';
import './index.css';
import Home from "./pages/Home/Home";
import Error from "./pages/Error/Error";
import Nav from "./components/Nav/Nav";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from "./components/Footer/Footer";


function App() {

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}

export default App;
