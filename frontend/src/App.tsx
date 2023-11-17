import * as React from 'react';
import { Routes, Route } from 'react-router-dom';
import Admin from './page/admin/Admin';
import Content from './page/content/content';
import Login from './page/login/Login';
import Register from './page/register/register';
export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='admin' element={<Admin/>}/>
        <Route path='register' element={<Register/>}/>
        <Route path='content' element={<Content/>}/>
      </Routes>
    </div>
  );
}