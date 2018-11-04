import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovieToLikedList } from "./actions";
import { incrementPage } from "../Home/actions";
import RefreshCard from "./components/RefreshCard.jsx";
import { Button, Fa } from "mdbreact";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieLiker.scss";

let index = 0;

class MovieLiker extends Component {
  state = { cardIndex: index };

  componentDidMount() {
    this.setState({ cardIndex: index });
  }

  _clickLikeButton = () => {
    if (this.state.cardIndex !== 20) {
      this.setState({ cardIndex: this.state.cardIndex + 1 });
      const movie = this.props.movies[this.state.cardIndex];
      this.props.addMovieToLikedList({
        id: movie.id,
        title: movie.title,
        image: movie.poster_path
      });
    } else {
      this.setState({ cardIndex: 0 });
    }
  };

  _clickDislikeButton = () => {
    if (this.state.cardIndex !== 20) {
      this.setState({ cardIndex: this.state.cardIndex + 1 });
    } else {
      this.setState({ cardIndex: 0 });
    }
  };

  // componentDidUpdate(prevProps) {
  //   if (this.props.movies !== prevProps.movies) {
  //     this.setState({ cardIndex: 0 });
  //   }
  // }

  componentWillUnmount() {
    index = this.state.cardIndex;
  }

  render() {
    const { movies } = this.props;
    if (this.state.cardIndex > movies.length - 1) {
      index = 0;
      return <RefreshCard page={this.props.page} />;
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
    incrementPage,
    addMovieToLikedList
  }
)(MovieLiker);
