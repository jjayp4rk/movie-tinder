import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesSimilar, getMoviesSimilarFirst } from './actions';
import Loading from '../Loading/Loading';
import { Fa } from 'mdbreact';
import Slider from 'react-slick';
import SimpleMovieCard from '../LikedMovies/components/SimpleMovieCard';
// import { MoviesSimilarList } from './components';

class SimilarMovies extends Component {
  state = {
    loading: false
  };

  async componentDidMount() {
    this.setState({ loading: true });
    await this.props.getMoviesSimilarFirst(this.props.likedMovie[0].id);
    this.setState({ loading: false });
  }

  render() {
    if (this.state.loading) {
      return <Loading />;
    }

    const movies = this.props.moviesSimilar;

    return (
      <div className="liked-movies">
        <h1>
          <Fa icon="star" color="#db5461" /> MOVIES
        </h1>

        {movies.map((movie, index) => (
          <SimpleMovieCard key={index} movie={movie} />
        ))}
      </div>
      // <MoviesSimilarList
      //   liked={this.props.likedMovie}
      //   movies={this.props.moviesSimilar.movies}
      //   getMoviesSimilar={this.props.getMoviesSimilar}
      // />
    );
  }
}

export default connect(
  state => ({
    likedMovie: state.likedMovie,
    moviesSimilar: state.moviesSimilar
  }),
  { getMoviesSimilar, getMoviesSimilarFirst }
)(SimilarMovies);
