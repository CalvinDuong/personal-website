import React from 'react';
import './App.css';
import HomePage from './pages/home-page.js';
import AboutPage from './pages/about-page.js';

import { BrowserRouter, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <div class='wrapper'>
      <BrowserRouter>
        <Routes>
          <Route path = "/" element = {<HomePage/>}/>
          <Route path = "/about-me" element = {<AboutPage/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App;