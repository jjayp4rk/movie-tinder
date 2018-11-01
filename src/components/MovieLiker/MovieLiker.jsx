import React, { Component } from 'react';
import { connect } from 'react-redux';
import { addMovieToLikedList } from './actions';
import RefreshCard from './components/RefreshCard';
import {
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from 'mdbreact';
import MovieCard from '../MovieCard/MovieCard';

import './MovieLiker.scss';

class MovieLiker extends Component {
  state = { cardIndex: 0 };

  _clickLikeButton = () => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
    const movie = this.props.movies[this.state.cardIndex];
    this.props.addMovieToLikedList({
      id: movie.id,
      title: movie.title,
      image: movie.poster_path
    });
  };

  _clickDislikeButton = () => {
    this.setState({ cardIndex: this.state.cardIndex + 1 });
  };

  render() {
    const { movies } = this.props;
    if (this.state.cardIndex > movies.length - 1) {
      return <RefreshCard />;
    }
    return (
      <div className="movie-liker">
        <div>
          <MovieCard movie={movies[this.state.cardIndex]} />
          <span>
            <Button onClick={this._clickLikeButton}>LIKE</Button>
            <Button onClick={this._clickDislikeButton}>DISLIKE</Button>
          </span>
        </div>
      </div>
    );
  }
}

export default connect(
  null,
  {
    addMovieToLikedList
  }
)(MovieLiker);
