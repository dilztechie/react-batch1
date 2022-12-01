import React, { useEffect, useState } from "react";
import getTopMovies, { setMovie } from "../../services/movies";
import Movie from "../movie/movie";
import "./movies.css";

export default function Movies() {
  const [movies, setMovies] = useState([])
  const [title, setTitle] = useState('')
  const [stars, setStars] = useState('')
  const [director, setDirector] = useState('')
  const [language, setLanguage] = useState('')
  const [release, setRelease] = useState(0)
  const [rating, setRating] = useState(0)

  useEffect(() => {
    let mounted = true
    getTopMovies().then(movies => {
      if (mounted) setMovies(movies)
    })
    return () => mounted = false
  }, [])

  const handleSubmit = event => {
    event.preventDefault()
    setMovie({ title, stars, director, language, release, rating }).then(() => {
      setTitle('')
      setStars('')
      setDirector('')
      setLanguage('')
      setRelease(0)
      setRating(0)
    })
  }

  return <div className="wrapper">
    <h3>Top 5 Rated Movies</h3>
    {movies.map(eachMovie =>
      <Movie key={eachMovie.movie.id} movie={eachMovie.movie} />
    )}
    <form onSubmit={handleSubmit}>
      <input value={title} placeholder="title" onChange={event => setTitle(event.target.value)} />
      <input value={stars} placeholder="stars" onChange={event => setStars(event.target.value)} />
      <input value={director} placeholder="director" onChange={event => setDirector(event.target.value)} />
      <select onChange={event => setLanguage(event.target.selected.value)}>
        <option value="" disabled>---language---</option>
        <option value="Malayalam">Malayalam</option>
        <option value="Telugu">Telugu</option>
        <option value="Tamil">Tamil</option>
        <option value="Kannada">Kannada</option>
        <option value="Hindi">Hindi</option>
        <option value="English">English</option>
      </select>
      <input value={release} type="number" placeholder="release" onChange={event => setRelease(parseInt(event.target.value))} />
      <input value={rating} placeholder="rating" onChange={event => setRating(parseFloat(event.target.value))} />
      <button type="submit">Submit</button>
    </form>
  </div >
}