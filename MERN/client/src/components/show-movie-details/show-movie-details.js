import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ShowMovieDetails = props => {
  const [movie, setMovie] = useState({})

  const { _id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8082/api/movies/${_id}`)
      .then(response => setMovie(response.data))
      .catch(error => console.log(error))
  }, [_id])

  const movieInfo = <div>
    <table className="table table-hover table-dark">
      <tbody>
        <tr>
          <th scope="row">1</th>
          <td>Title</td>
          <td>{movie.title}</td>
        </tr>
        <tr>
          <th scope="row">2</th>
          <td>Starring</td>
          <td>{movie.starring}</td>
        </tr>
        <tr>
          <th scope="row">3</th>
          <td>Directors</td>
          <td>{movie.directors}</td>
        </tr>
        <tr>
          <th scope="row">4</th>
          <td>Genre</td>
          <td>{movie.genres}</td>
        </tr>
        <tr>
          <th scope="row">5</th>
          <td>Language</td>
          <td>{movie.language}</td>
        </tr>
        <tr>
          <th scope="row">6</th>
          <td>Year</td>
          <td>{movie.year}</td>
        </tr>
      </tbody>
    </table>
  </div>

  const deleteMovie = _id => axios.delete(`http://localhost:8082/api/movies/${_id}`)
    .then(response => navigate('/'))
    .catch(error => console.log(error))

  return (<div className="showMovieDetails">
    <div className="container">
      <div className="row">
        <div className="col-md-10 m-auto">
          <br />
          <br />
          <Link to='/' className="btn btn-outline-warning float-left">
            Book List
          </Link>
        </div>
        <br />
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Movie {_id}</h1>
          <p className="lead text-center">Movie Details</p>
          <hr />
          <br />
        </div>
        <div className="col-md-10 m-auto">{movieInfo}</div>
        <div className="col-md-6 m-auto">
          <button type="button" className="btn btn-outline-danger btn-lg btn-block"
            onClick={() => deleteMovie(_id)}>
            Delete Movie
          </button>
        </div>
        <div className="col-md-6 m-auto">
          <Link to={`/edit-movie/${_id}`} className="btn btn-outline-info btn-lg btn-block">
            Edit Movie
          </Link>
        </div>
      </div>
    </div>
  </div>)
}

export default ShowMovieDetails