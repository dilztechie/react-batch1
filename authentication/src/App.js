import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DashBoard from './components/dashboard/dashboard'
import Preferences from './components/preferences/preferences'
import Login from './components/login/login'
import useToken from './useToken';

function App() {
  const { token, setToken } = useToken()

  if (!token) {
    return <Login setToken={setToken} />
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Dilz Inc. Social Website</h1>
      </header>
      <div className='wrapper'>
        <BrowserRouter>
          <Switch>
            <Route path='/dashboard'>
              <DashBoard />
            </Route>
            <Route path='/preferences'>
              <Preferences />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;