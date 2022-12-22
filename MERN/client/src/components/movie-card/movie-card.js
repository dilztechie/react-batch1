import React from "react";
import imgMovie from '../../images/movie.jpg'
import { Link } from 'react-router-dom'

const MovieCard = props => {
  const movie = props.movie

  return (<div className="card-container">
    <img src={imgMovie} alt="movie" height={200} />
    <div className="desc">
      <h2>
        <Link to={`/show-movie/${movie._id}`}>{movie.title}</Link>
      </h2>
      <h3>Starring: {movie.starring}</h3>
      <p>Directors: {movie.directors}</p>
    </div>
  </div>)
}

export default MovieCard