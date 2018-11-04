import React, { Component } from "react";
import { removeMovieFromList } from "../MovieLiker/actions";
import { connect } from "react-redux";
import LikedMovies from "../LikedMovies/LikedMovies";
import "./MyMovies.scss";

class MyMovies extends Component {
  render() {
    return (
      <div className="my-movies">
        <div className="mb-4 mt-2">
          <LikedMovies />
        </div>
        <h1>SIMILAR MOVIES</h1>
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
