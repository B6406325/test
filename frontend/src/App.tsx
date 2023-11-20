import * as React from 'react';
import { Routes, Route, Outlet ,BrowserRouter as Router} from 'react-router-dom';
import Admin from './page/admin/adminhome/Admin';
import Login from './page/login/Login';
import Register from './page/register/register';
import Movies from './page/admin/movie/Movie';
import Payment from './page/admin/payment/Payment';
import Content from './page/content/content';
import User from './page/admin/user/user';

export default function App() {
  return (
    <div className="App">
    <Router>
    
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/admin' element={<Admin/>}/>
        <Route path='/movies' element={<Movies/>}/>
        <Route path='/payment' element={<Payment/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/content' element={<Content/>}/>
        <Route path='/user' element={<User/>}/>
      </Routes>
    
    </Router>
    </div>
  );
}