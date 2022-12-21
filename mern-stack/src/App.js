import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import CreateMovie from './components/create-movie/create-movie';
import DeleteMovie from './components/delete-movie/delete-movie';
import UpdateMovie from './components/update-movie/update-movie';
import ViewAllMovies from './components/view-all-movies/view-all-movies';
import ViewMovie from './components/view-movie/view-movie';

function App() {
  return (<div className="App">
    <header className="App-header">
      Netflix
    </header>
    <Router>
      <div>
        <Routes>
          <Route exact path="/" element={<ViewAllMovies />} />
          <Route exact path="/movies" element={<ViewAllMovies />} />
          <Route path="/movie/:id" element={<ViewMovie />} />
          <Route path="/create-movie" element={<CreateMovie />} />
          <Route path="/update-movie/:id" element={<UpdateMovie />} />
          <Route path="/delete-movie/:id" element={<DeleteMovie />} />
        </Routes>
      </div>
    </Router>
  </div>)
}

export default App