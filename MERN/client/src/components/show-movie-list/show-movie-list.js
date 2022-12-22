import React, { useEffect, useState } from "react";
import { Link } from 'react-router-dom';
import axios from "axios";
import MovieCard from "../movie-card/movie-card";

const ShowMovieList = () => {
  const [movies, setMovies] = useState([])

  useEffect(() => {
    axios
      .get('http://localhost:8082/api/movies')
      .then(response => setMovies(response.data))
      .catch(error => console.log(error))
  }, [])

  const movieList = movies.length === 0 ? 'There are no Movies in the Database!' :
    movies.map((movie, key) => <MovieCard key={key} movie={movie} />)

  return (<div className="showMovieList">
    <div className="conatiner">
      <div className="row">
        <div className="col-md-12">
          <br />
          <h2 className="display-4 text-center">Movies List</h2>
        </div>
        <div className="col-md-11">
          <Link to='/create-movie' className="btn btn-outline-warning float-right">
            + Add New Movie
          </Link>
          <br />
          <br />
          <hr />
        </div>
      </div>
      <div className="list">{movieList}</div>
    </div>
  </div>)
}

export default ShowMovieList;