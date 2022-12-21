import React from "react";
import { Link } from "react-router-dom";

export default class CreateMovie extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      starring: [],
      directors: [],
      genres: [],
      language: '',
      year: 2022
    }
    this.genres = ['Action', 'Adventure', 'Comedy', 'Drama', 'Crime', 'Animated', 'Romance', 'Horror', 'Suspense', 'Kids', 'Thriller', 'Biography']
    this.languages = ['Hindi', 'Tamil', 'Telugu', 'English', 'Marathi', 'Bengali', 'Kannada', 'Punjabi', 'Malayalam', 'Gujarati']
    this.handleOnSubmit = this.handleOnSubmit.bind(this)
  }

  handleOnSubmit = event => {
    event.preventDefault()
    this.setState({ title: document.getElementById('title').value })
    let starring = document.getElementById('starring').value.toString().split('\n')
    this.setState({ starring: starring })
    let directors = document.getElementById('directors').value.toString().split('\n')
    this.setState({ directors: directors })
    let genres = document.querySelectorAll('#genres option:checked')
    this.setState({ genres: Array.from(genres).map(genre => genre.value) })
    this.setState({ language: document.getElementById('language').value })
    this.setState({ year: document.getElementById('year').value })
    console.log(this.state)
  }

  render = () => <div className='createMovie'>
    <div className='container'>
      <div className='row'>
        <div className='col-md-8 m-auto'>
          <br />
          <Link to='/' className='btn btn-outline-warning float-left'>
            All Movies
          </Link>
        </div>
        <div className='col-md-8 m-auto'>
          <h1 className='display-4 text-center'>Add Movie</h1>
          <p className='lead text-center'>Create New Movie</p>
          <form noValidate onSubmit={this.handleOnSubmit}>
            <div className='form-group'>
              <input type='text' placeholder='title?' id='title' className='form-control' />
            </div>
            <br />
            <div className='form-group'>
              <textarea placeholder='starring?' id='starring' className='form-control' />
            </div>
            <br />
            <div className='form-group'>
              <textarea placeholder='directors?' id='directors' className='form-control' />
            </div>
            <br />
            <div className='form-group'>
              <select multiple size='15' id='genres' className='form-control'>
                <option value="" disabled>---Select Genres---</option>
                {this.genres.map(genre =>
                  <option value={genre}>{genre}</option>
                )}
              </select>
            </div>
            <br />
            <div className='form-group'>
              <select id='language' className='form-control'>
                <option value="" disabled>---Select Language---</option>
                {this.languages.map(language =>
                  <option value={language}>{language}</option>
                )}
              </select>
            </div>
            <br />
            <div className='form-group'>
              <input type='number' placeholder='year?' id='year'
                className='form-control' min='1900' max='2023' />
            </div>
            <input type='submit' className='btn btn-outline-warning btn-block mt-4' />
          </form>
        </div>
      </div>
    </div>
  </div>
}