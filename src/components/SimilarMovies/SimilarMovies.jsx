import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoviesSimilar, getMoviesSimilarFirst } from "./actions";
import Loading from "../Loading/Loading";
import { Fa } from "mdbreact";
import SimpleMovieCard from "../LikedMovies/components/SimpleMovieCard";
// import { MoviesSimilarList } from './components';
import "./SimilarMovies.scss";

class SimilarMovies extends Component {
  state = {
    loading: false,
    genre: null
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.props.likedMovie.map(movie => this.props.getMoviesSimilar(movie.id));
    this.setState({ loading: false });
  }

  setGenre = e => {
    this.setState({ genre: e.target.value });
  };

  filterByGenre = (movies, genre) => {
    let filteredByGenre = movies.filter(movie => {
      movie.genre_ids.includes(genre);
    });
    return filteredByGenre.map((movie, index) => (
      <SimpleMovieCard key={index} movie={movie} />
    ));
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const movies = this.props.similarMovies.movies;

    return (
      <div className="similar-movies">
        <h1>
          <Fa icon="star" color="#db5461" /> MOVIES
        </h1>
        <div className="filter-bar">
          <select name="genre" onChange={this.setGenre}>
            <option value="None">None</option>
            <option value="28">Action</option>
            <option value="12">Adventure</option>
            <option value="16">Animation</option>
            <option value="35">Comedy</option>
            <option value="80">Crime</option>
            <option value="99">Documentary</option>
            <option value="18">Drama</option>
            <option value="14">Fantasy</option>
            <option value="10751">Family</option>
            <option value="36">History</option>
            <option value="27">Horror</option>
            <option value="10402">Music</option>
            <option value="9648">Mystery</option>
            <option value="10749">Romance</option>
            <option value="878">Science Fiction</option>
            <option value="53">Thriller</option>
            <option value="10752">War</option>
            <option value="37">Western</option>
          </select>
        </div>
        <div className="similar-movies-list">
          {this.state.genre === null
            ? this.filterByGenre(movies, this.state.genre)
            : movies.map((movie, index) => (
                <SimpleMovieCard key={index} movie={movie} />
              ))}
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    likedMovie: state.likedMovie,
    similarMovies: state.similarMovies
  }),
  { getMoviesSimilar, getMoviesSimilarFirst }
)(SimilarMovies);
