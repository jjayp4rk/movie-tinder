import React, { Component } from "react";
import { connect } from "react-redux";
import { addMovieToLikedList } from "./actions";
import { incrementPage, setCardIndex } from "../Home/actions";
import RefreshCard from "./components/RefreshCard.jsx";
import { Button, Fa } from "mdbreact";
import MovieCard from "../MovieCard/MovieCard";

import "./MovieLiker.scss";

class MovieLiker extends Component {
  state = { cardIndex: this.props.home.index };

  componentDidMount() {
    if (this.props.home.index !== 20) {
      this.setState({ cardIndex: this.props.home.index });
    } else {
      this.setState({ cardIndex: 0 });
    }
  }

  _clickLikeButton = () => {
    if (this.state.cardIndex !== 20) {
      this.setState({
        cardIndex: this.state.cardIndex + 1
      });
      const movie = this.props.movies[this.state.cardIndex];
      this.props.addMovieToLikedList({
        id: movie.id,
        title: movie.title,
        poster_path: movie.poster_path,
        popularity: movie.popularity,
        vote_average: movie.vote_average,
        release_date: movie.release_date
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

  componentWillUnmount() {
    // console.log(this.state.cardIndex);
    this.props.setCardIndex(this.state.cardIndex);
  }

  render() {
    const { movies } = this.props;
    if (this.state.cardIndex > movies.length - 1) {
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
  state => ({
    home: state.home
  }),
  {
    incrementPage,
    addMovieToLikedList,
    setCardIndex
  }
)(MovieLiker);
