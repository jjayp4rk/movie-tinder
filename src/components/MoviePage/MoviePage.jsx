import React, { Component } from "react";
import Loading from "../Loading/Loading";
import { connect } from "react-redux";
import { getMoviePage } from "./actions";
import { getMovieTrailer } from "../MovieCard/actions";
import { POSTER } from "../../constants/api";
import { Fa } from "mdbreact";
import "./MoviePage.scss";
import Icon from "./components/Icon";
import ReactPlayer from "react-player";

const YouTubeUrl = key => {
  return `https://www.youtube.com/watch?v=${key}`;
};

class MoviePage extends Component {
  state = { loading: false };

  componentDidMount() {
    this.setState({
      loading: true
    });
    this.props.getMoviePage(this.props.match.params.id);
    this.props.getMovieTrailer(this.props.match.params.id);
    this.setState({
      loading: false
    });
  }

  render() {
    const { movie } = this.props.movie;
    const { videos } = this.props.trailers;
    return (
      <div>
        {this.state.loading || movie === null || videos === null ? (
          <Loading />
        ) : (
          <div className="movie-page mt-5">
            <div className="player-wrapper">
              <ReactPlayer
                url={YouTubeUrl(videos[0].key)}
                width="100%"
                height="100%"
                config={{
                  youtube: {
                    playerVars: { showinfo: 1 }
                  }
                }}
              />
            </div>
            <img
              className="backdrop-img"
              src={`${POSTER}/${movie.backdrop_path}`}
              alt={`back-drop-${movie.title}`}
            />
            <h1>{movie.title}</h1>
            <p>
              <Fa icon="calendar" /> {movie.release_date}
              <span>&ensp;&nbsp;</span>
              <Fa icon="clock-o" /> {movie.runtime}
              <span>&ensp;&nbsp;</span>
              <Fa icon="star" /> {movie.vote_average}
            </p>
            <p>
              <b>Genres</b>: <span>&nbsp;</span>
              {movie.genres.map((genre, index) => (
                <span key={index}>
                  {genre.name}
                  &nbsp;
                  <Icon genre={genre.name} />
                  &nbsp;&nbsp;
                </span>
              ))}
            </p>
            <p>Overview: {movie.overview}</p>
          </div>
        )}
      </div>
    );
  }
}

export default connect(
  state => ({
    movie: state.moviePage,
    trailers: state.movieCard
  }),
  { getMovieTrailer, getMoviePage }
)(MoviePage);