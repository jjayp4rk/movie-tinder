import React, { Component } from 'react';
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

  componentDidUpdate(prevProps) {
    if (this.props.movie.id !== prevProps.movie.id) {
      this.setState({ isFlipped: false });
      this.props.getMovieTrailer(this.props.movie.id);
    }
  }

  handleClick = e => {
    e.preventDefault();
    this.setState({ isFlipped: !this.state.isFlipped });
  };

  render() {
    const { isFlipped } = this.state;
    console.log(this.props);
    return (
      <div className="movie-card">
        <Card onClick={this.handleClick}>
          {!isFlipped ? (
            <Front movie={this.props.movie} />
          ) : (
            <Back
              movie={this.props.movie}
              trailers={this.props.movieCard.videos}
            />
          )}
        </Card>
      </div>
    );
  }
}

export default connect(
  state => ({ movieCard: state.movieCard }),
  { getMovieTrailer }
)(MovieCard);
