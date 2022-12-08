import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { Routes, Route, Link } from 'react-router-dom';
import LoginPage from './components/login-page/login-page';
import HomePage from './components/home-page/home-page';
import RegisterPage from './components/register-page/register-page';
import ProfilePage from './components/profile-page/profile-page';

export default function App() {
  return (
    <div className="App">
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
            <Route path="/profile" element={<ProfilePage />} />
          </Routes>
        </div>
      </div>
    </div>
  )
}