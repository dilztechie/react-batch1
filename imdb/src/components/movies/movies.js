import React, { useEffect, useState } from "react";
import getTopMovies, { setMovie } from "../../services/movies";
import Movie from "../movie/movie";
import "./movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [stars, setStars] = useState('')
  const [director, setDirector] = useState('')
  const [release, setRelease] = useState(0)
  const [rating, setRating] = useState(0)
  const [alert, setAlert] = useState(false)

  useEffect(() => {
    let mounted = true
    if (movies.length && !alert) return
    getTopMovies().then(movies => {
      if (mounted) setMovies(movies)
    })
    return () => mounted = false
  }, [alert, movies])

  const handleSubmit = event => {
    event.preventDefault()
    let language = document.getElementById('language').value
    setMovie({ title, stars, director, language, release, rating }).then(() => {
      setTitle('')
      setStars('')
      setDirector('')
      setRelease(0)
      setRating(0)
      setAlert(true)
    })
  }

  return <div className="wrapper">
    <h3>Top 5 Rated Movies</h3>
    {movies.map(eachMovie =>
      <Movie key={eachMovie.movie.id} movie={eachMovie.movie} />
    )}
    {alert && <h3>Submit Successful</h3>}
    <form onSubmit={handleSubmit}>
      <input value={title} placeholder="title" onChange={event => setTitle(event.target.value)} />
      <input value={stars} placeholder="stars" onChange={event => setStars(event.target.value)} />
      <input value={director} placeholder="director" onChange={event => setDirector(event.target.value)} />
      <select id="language">
        <option value="" disabled>---language---</option>
        <option value="Malayalam" selected>Malayalam</option>
        <option value="Telugu">Telugu</option>
        <option value="Tamil">Tamil</option>
        <option value="Kannada">Kannada</option>
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
      </select>
      <input value={release} type="number" placeholder="release" onChange={event => setRelease(parseInt(event.target.value))} />
      <input value={rating} type="number" placeholder="rating" onChange={event => setRating(parseFloat(event.target.value))} />
      <button type="submit">Submit</button>
    </form>
  </div >
}