import React, { Component } from 'react';
import MovieLiker from '../MovieLiker/MovieLiker';
import { connect } from 'react-redux';
import { getMoviesPopular } from './actions';

class Home extends Component {
  componentDidMount() {
    this.props.getMoviesPopular();
  }
  render() {
    const { home } = this.props;
    if (!home.isFetched) {
      return <div>Loading...</div>;
    } else if (!home.error) {
      return (
        <div>
          <MovieLiker movies={home.movies} />
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
