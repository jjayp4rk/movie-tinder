import React, { Component } from 'react';
import { removeMovieFromList } from '../MovieLiker/actions';
import { connect } from 'react-redux';
import LikedMovies from '../LikedMovies/LikedMovies';
import SimilarMovies from '../SimilarMovies/SimilarMovies';
import './MyMovies.scss';

class MyMovies extends Component {
  render() {
    return (
      <div className="my-movies">
        <div className="mb-4 mt-2">
          <LikedMovies />
        </div>
        <div className="mb-1 mt-1">
          <SimilarMovies />
        </div>
      </div>
    );
  }
}

export default connect(
  state => ({
    likedMovies: state.likedMovie
  }),
  { removeMovieFromList }
)(MyMovies);
