import React, { Component } from "react";

class SimilarMoviesList extends Component {
  state = {
    movies: null,
    loading: false,
    apiIndex: 0
  };

  componentDidUpdate(prevProps) {
    this.setState({
      loading: false,
      movies: this.props.movies
    });
  }

  getMoreMovies = async () => {
    const { getMoviesSimilar, liked } = this.props;
  };

  render() {
    return <div />;
  }
}

export default SimilarMoviesList;
