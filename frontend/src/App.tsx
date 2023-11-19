import * as React from 'react';
import { Routes, Route, Outlet ,BrowserRouter as Router} from 'react-router-dom';
import Admin from './page/admin/Admin';
import Login from './page/login/Login';
import Register from './page/register/register';
import Movies from './page/admin/movie/Movie';
import Payment from './page/admin/payment/Payment';
import Content from './page/content/content';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/movie' element={<Movies/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/content' element={<Content/>}/>
      </Routes>
    </div>
  );
}