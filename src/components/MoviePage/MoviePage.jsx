import React, { Component } from 'react';
import Loading from '../Loading/Loading';
import { connect } from 'react-redux';
import { getMoviePage } from './actions';
import { getMovieTrailer } from '../MovieCard/actions';
import { POSTER } from '../../constants/api';
import { Fa } from 'mdbreact';
import './MoviePage.scss';
import Icon from './components/Icon';
import YouTube from 'react-youtube';

class MoviePage extends Component {
  state = { loading: true };

  componentDidMount() {
    this.props.getMoviePage(this.props.match.params.id);
    this.props.getMovieTrailer(this.props.match.params.id);
    this.setState({ loading: false });
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
              {!videos[0].key ? null : (
                <YouTube
                  videoId={videos[0].key}
                  opts={{
                    height: '100%',
                    width: '100%',
                    playerVars: {
                      autoplay: 0
                    }
                  }}
                />
              )}
            </div>
            {movie.backdrop_path ? (
              <img
                className="backdrop-img"
                src={`${POSTER}/${movie.backdrop_path}`}
                alt={`back-drop-${movie.title}`}
              />
            ) : null}

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
