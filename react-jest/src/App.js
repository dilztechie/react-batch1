import logo from './logo.svg';
import './App.css';
import Counter from './components/counter/counter';
import Tasks from './components/tasks/tasks';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Counter />
      <hr />
      <Tasks />
    </div>
  );
}

export default App