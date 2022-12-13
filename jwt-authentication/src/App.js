import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/login-page/login-page';
import HomePage from './components/home-page/home-page';
import RegisterPage from './components/register-page/register-page';
import TestJson from './components/test-json/test-json';
import AdminProfilePage from './components/admin-profile-page/admin-profile-page';
import UserProfilePage from './components/user-profile-page/user-profile-page';
import React from 'react';

export default class App extends React.Component {
  render = () => <>
    <div className="App" >
      <header className="App-header">Dilz Inc.</header>
      <div className='wrapper'>
        <nav className='navbar navbar-expand navbar-dark bg-dark'>
          <Link to={"/"} className="navbar-brand">facebook</Link>
          <nav className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/home"} className="nav-link">Home</Link>
            </li>
          </nav>
          <nav className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/login"} className="nav-link">Login</Link>
            </li>
          </nav>
          <nav className='navbar-nav mr-auto'>
            <li className='nav-item'>
              <Link to={"/register"} className="nav-link">Register</Link>
            </li>
          </nav>
        </nav>
        <div className='container mt-3'>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/home" element={<HomePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/profile/admin" element={<AdminProfilePage />} />
            <Route path="/profile/user" element={<UserProfilePage />} />
            <Route path="/test" element={<TestJson />} />
          </Routes>
        </div>
      </div>
    </div>
  </>
}