import * as React from 'react';
import { Routes, Route, Outlet ,BrowserRouter as Router} from 'react-router-dom';
import Admin from './page/admin/Admin';
import Content from './page/movie/Movie';
import Login from './page/login/Login';
import Register from './page/register/register';
import User from './page/user/user';
import { Footer, Header } from 'antd/es/layout/layout';
import Movies from './page/movie/Movie';
import Payment from './page/payment/Payment';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/movie' element={<Movies/>}/>
        <Route path='/payment' element={<Payment/>}/>
      </Routes>
    </div>
  );
}