import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
      </Routes>
    </div>
  );
}