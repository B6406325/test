import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './page/Home';
import About from './page/About';
import Admin from './page/admin/Admin';
import Member from './page/member/member';
import Content from './page/content/content';
import Login from './page/login/Login';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path="about" element={<About />} />
        <Route path='admin' element={<Admin/>}/>
        <Route path='member' element={<Member/>}/>
        <Route path='content' element={<Content/>}/>
      </Routes>
    </div>
  );
}