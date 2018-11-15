import React, { Component } from 'react';
import MovieLiker from '../MovieLiker/MovieLiker';
import { connect } from 'react-redux';
import { getMoviesPopular } from './actions';
import Loading from '../Loading/Loading';

class Home extends Component {
  componentDidMount() {
    this.props.getMoviesPopular(this.props.home.page);
  }

  componentDidUpdate(prevProps) {
    if (prevProps.home.page !== this.props.home.page) {
      this.props.getMoviesPopular(this.props.home.page);
    }
  }

  render() {
    const { home } = this.props;
    if (!home.isFetched) {
      return <Loading />;
    } else if (!home.error) {
      return (
        <div>
          <MovieLiker movies={home.movies} page={home.page} />
        </div>
      );
    }
    return <div>ERROR</div>;
  }
}

export default connect(
  state => ({
    home: state.home
  }),
  { getMoviesPopular }
)(Home);
