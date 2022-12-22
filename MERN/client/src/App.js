import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateMovie from './components/create-movie/create-movie';
import ShowMovieList from './components/show-movie-list/show-movie-list';

function App() {
  return (<Router>
    <div>
      <Routes>
        <Route exact path='/' element={<ShowMovieList />} />
        <Route path='/create-movie' element={<CreateMovie />} />
        <Route path='/edit-movie/:_id' element={<></>} />
        <Route path='/show-movie/:_id' element={<></>} />
      </Routes>
    </div>
  </Router>);
}

export default App;