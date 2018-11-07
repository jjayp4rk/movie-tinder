import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoviesSimilar } from "./actions";
import Loading from "../Loading/Loading";
import { Fa } from "mdbreact";
import "./SimilarMovies.scss";
import SimilarMoviesList from "./components/SimilarMoviesList";
import FilterBar from "./components/FilterBar";

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const rand = Math.floor(Math.random() * (i + 1));
    [array[i], array[rand]] = [array[rand], array[i]];
  }
  return array;
}

class SimilarMovies extends Component {
  state = {
    loading: false,
    genre: "None"
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.props.likedMovie.map(movie => this.props.getMoviesSimilar(movie.id));
    this.setState({ loading: false });
  }

  setGenre = e => {
    this.setState({ loading: true });
    this.setState({ genre: e.target.value });
    this.setState({ loading: false });
  };

  filterByGenre = (movies, genre) => {
    if (genre !== "None") {
      return movies.filter(movie => movie.genre_ids.includes(Number(genre)));
    } else {
      return movies;
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      const movies = shuffleArray(
        this.filterByGenre(this.props.similarMovies.movies, this.state.genre)
      );
      return (
        <div className="similar-movies">
          <h1>
            <Fa icon="star" color="#db5461" /> MOVIES
          </h1>
          <FilterBar setGenre={this.setGenre} />
          <SimilarMoviesList movies={movies} />
        </div>
      );
    }
  }
}

export default connect(
  state => ({
    likedMovie: state.likedMovie,
    similarMovies: state.similarMovies
  }),
  { getMoviesSimilar }
)(SimilarMovies);
