import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import CreateEmployee from './components/create-employee/create-employee';
import ListEmployee from './components/list-employee/list-employee';

function App() {
  return (<div className="App">
    <header className="App-header">
      Employee Management System
    </header>
    <div className='container'>
      <Router>
        <Switch>
          <Route path="/" component={ListEmployee} />
          <Route path="/employees" component={ListEmployee} />
          <Route path="/add-employee/:id" component={CreateEmployee} />
        </Switch>
      </Router>
    </div>
  </div>)
}

export default App