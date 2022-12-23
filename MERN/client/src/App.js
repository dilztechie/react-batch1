import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CreateMovie from './components/create-movie/create-movie';
import ShowMovieDetails from './components/show-movie-details/show-movie-details';
import ShowMovieList from './components/show-movie-list/show-movie-list';
import UpdateMovieInfo from './components/update-movie-info/update-movie-info';

function App() {
  return (<Router>
    <div>
      <Routes>
        <Route exact path='/' element={<ShowMovieList />} />
        <Route path='/create-movie' element={<CreateMovie />} />
        <Route path='/edit-movie/:_id' element={<UpdateMovieInfo />} />
        <Route path='/show-movie/:_id' element={<ShowMovieDetails />} />
      </Routes>
    </div>
  </Router>);
}

export default App;