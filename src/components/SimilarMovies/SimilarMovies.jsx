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
      neighbors: 4
    };
  }

  goToFirst = () => {
    this.setState({
      currentPage: 1
    });
  };

  goToLast = lastPage => {
    this.setState({
      currentPage: lastPage
    });
  };

  goToPage = e => {
    this.setState({
      currentPage: Number(e.target.dataset.page)
    });
  };

  nextPage = () => {
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
    this.setState({ currentPage: 1 });
    this.setState({ loading: false });
  };

  filterByGenre = (movies, genre) => {
    if (genre !== 'All') {
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
            <Fa icon="star" color="#db5461" /> MOVIES YOU MIGHT LIKE
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
            pagesTotal={Math.ceil(movies.length / 20)}
            goToFirst={this.goToFirst}
            goToLast={this.goToLast}
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
