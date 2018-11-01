import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import { getMovieTrailer } from './actions';
import Front from './components/Front';
import Back from './components/Back';
import { Card } from 'mdbreact';
import './MovieCard.scss';

class MovieCard extends Component {
  state = { isFlipped: false };

  componentDidMount() {
    this.props.getMovieTrailer(this.props.movie.id);
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    const { isFlipped } = this.state;
    return (
      <div className="movie-card">
        <Card onClick={this.handleClick}>
          {!isFlipped ? (
            <Front movie={this.props.movie} />
          ) : (
            <Back movie={this.props.movie} />
          )}
        </Card>
      </div>
    );
  }
}

export default connect(
  state => ({ data: state.movieCard }),
  { getMovieTrailer }
)(MovieCard);
