import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovieToLikedList } from "./actions";
import RefreshCard from "./components/RefreshCard.jsx";
import { Button, Fa } from "mdbreact";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieLiker.scss";

class MovieLiker extends Component {
  state = { cardIndex: 0, page: 1 };

  componentDidMount() {
    this.setState({ page: this.state.page + 1 });
  }

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
      return <RefreshCard page={this.state.page} />;
    }
    return (
      <div className="movie-liker">
        <div>
          <MovieCard movie={movies[this.state.cardIndex]} />
          <br />
          <span>
            <Button color="success" onClick={this._clickLikeButton}>
              <Fa icon="heart" size="2x" />
            </Button>
            <Button color="danger" onClick={this._clickDislikeButton}>
              <Fa icon="close" size="3x" />
            </Button>
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
