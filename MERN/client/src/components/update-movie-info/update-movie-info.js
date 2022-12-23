import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const UpdateMovieInfo = props => {
  const [movie, setMovie] = useState({
    title: '',
    starring: '',
    directors: '',
    genres: '',
    language: '',
    year: 0
  })

  const { _id } = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    axios.get(`http://localhost:8082/api/movies/${_id}`)
      .then(response => setMovie({
        title: response.data.title,
        starring: response.data.starring,
        directors: response.data.directors,
        genres: response.data.genres,
        language: response.data.language,
        year: response.data.year
      }))
      .catch(error => console.log(error))
  }, [_id])

  const handleOnChange = event => setMovie({ ...movie, [event.target.name]: event.target.value })

  const handleOnSubmit = event => {
    event.preventDefault()
    axios.put(`http://localhost:8082/api/movies/${_id}`, movie)
      .then(response => navigate(`/show-movie/${_id}`))
      .catch(error => console.log(error))
  }

  return (<div className="updateMovieInfo">
    <div className="container">
      <div className="row">
        <div className="col-md-8 m-auto">
          <br />
          <Link to='/' className="btn btn-outline-warning float-left">
            Movie List
          </Link>
        </div>
        <div className="col-md-8 m-auto">
          <h1 className="display-4 text-center">Edit Movie</h1>
          <p className="lead text-center">Update Movie Info</p>
        </div>
      </div>
      <div className="col-md-8 m-auto">
        <form noValidate autoComplete="off" onSubmit={handleOnSubmit}>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" placeholder="title of the movie?" className="form-control"
              name="title" value={movie.title} onChange={handleOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Starring</label>
            <input type="text" placeholder="star cast of the movie?" className="form-control"
              name="starring" value={movie.starring} onChange={handleOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Directors</label>
            <input type="text" placeholder="directors of the movie?" className="form-control"
              name="directors" value={movie.directors} onChange={handleOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Genre</label>
            <input type="text" placeholder="genre of the movie?" className="form-control"
              name="genres" value={movie.genres} onChange={handleOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Language</label>
            <input type="text" placeholder="language of the movie?" className="form-control"
              name="language" value={movie.language} onChange={handleOnChange} />
          </div>
          <div className="form-group">
            <label htmlFor="title">Year</label>
            <input type="text" placeholder="year of release of the movie?" className="form-control"
              name="year" value={movie.year} onChange={handleOnChange} />
          </div>
          <button type="submit" className="btn btn-outline-info btn-lg btn-block">
            Update Movie
          </button>
        </form>
      </div>
    </div>
  </div>)
}

export default UpdateMovieInfo