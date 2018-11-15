import React, { Component } from 'react';
import { removeMovieFromList } from '../MovieLiker/actions';
import { getMoviesSimilar } from '../SimilarMovies/actions';
import { connect } from 'react-redux';
import LikedMovies from '../LikedMovies/LikedMovies';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import './MyMovies.scss';

class MyMovies extends Component {
  state = {
    loading: false
  };

  componentDidMount() {
    this.setState({ loading: true });
    this.props.likedMovies.map(movie => this.props.getMoviesSimilar(movie.id));
    this.setState({
      loading: false
    });
  }

  render() {
    const similarMovies = this.props.similarMovies.movies;
    const likedMovies = this.props.likedMovies;
    return (
      <div className="my-movies">
        <div className="mb-4 mt-2">
          <LikedMovies likedMovies={likedMovies} />
        </div>
        <div className="mb-1 mt-1">
          <SimilarMovies similarMovies={similarMovies} />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    likedMovies: state.likedMovie,
    similarMovies: state.similarMovies
  }),
  { removeMovieFromList, getMoviesSimilar }
)(MyMovies);
