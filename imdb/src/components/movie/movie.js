import React from "react";
import "./movie.css";

export default class Movie extends React.Component {
  render = () => <div className="movie">
    <h4 className="title">{this.props.movie.title}</h4>
    <span className="release"><li>{this.props.movie.release}</li></span>
    <span className="rating"><li>IMDb Rating {this.props.movie.rating}/10</li></span>
    <span className="language"><li>{this.props.movie.language}</li></span> <br />
    <span className="director"><strong>Director </strong> {this.props.movie.director}</span> <br />
    <span className="stars"><strong>Stars </strong> {this.props.movie.stars}</span>
  </div>
}