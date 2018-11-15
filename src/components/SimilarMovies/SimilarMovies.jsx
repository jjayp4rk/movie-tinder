import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getMoviesSimilar } from './actions';
import Loading from '../Loading/Loading';
import { Fa } from 'mdbreact';
import './SimilarMovies.scss';
import SimilarMoviesList from './components/SimilarMoviesList';
import FilterBar from './components/FilterBar';
import PaginationBar from '../Pagination/PaginationBar';

class SimilarMovies extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      genre: 'None',
      genres: [],
      currentPage: 1,
      pagesTotal:
        null || Math.ceil(this.props.similarMovies.movies.length / 20),
      neighbors: 4
    };
  }

  goToPage = e => {
    this.setState({
      currentPage: Number(e.target.dataset.page)
    });
  };

  nextPage = () => {
    if (this.state.currentPage < this.state.pagesTotal)
      this.setState({
        currentPage: this.state.currentPage + 1
      });
  };

  prevPage = () => {
    if (this.state.currentPage > 1) {
      this.setState({
        currentPage: this.state.currentPage - 1
      });
    }
  };

  setGenre = e => {
    console.log(e.target.value);
    this.setState({ loading: true });
    this.setState({ genre: e.target.value });
    this.setState({ loading: false });
  };

  filterByGenre = (movies, genre) => {
    if (genre !== 'None') {
      return movies.filter(movie => movie.genre_ids.includes(Number(genre)));
    } else {
      return movies;
    }
  };

  render() {
    if (this.state.loading) {
      return <Loading />;
    } else {
      let movies = this.filterByGenre(
        this.props.similarMovies.movies,
        this.state.genre
      );

      return (
        <div className="similar-movies">
          <h1>
            <Fa icon="star" color="#db5461" /> MOVIES
          </h1>
          <FilterBar setGenre={this.setGenre} />
          <SimilarMoviesList
            movies={movies.slice(
              (this.state.currentPage - 1) * 20,
              this.state.currentPage * 20
            )}
          />
          <PaginationBar
            currentPage={this.state.currentPage}
            pagesTotal={this.state.pagesTotal}
            nextPage={this.nextPage}
            prevPage={this.prevPage}
            goToPage={this.goToPage}
          />
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
