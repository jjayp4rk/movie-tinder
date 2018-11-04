import React, { Component } from 'react';
import { removeMovieFromList } from '../MovieLiker/actions';
import { connect } from 'react-redux';
import Slider from 'react-slick';
import './LikedMovies.scss';
import { Fa } from 'mdbreact';
import SimpleMovieCard from './components/SimpleMovieCard';

class LikedMovies extends Component {
  render() {
    const likedMovies = this.props.likedMovies;
    const slides = likedMovies.length > 5 ? 5 : likedMovies.length;

    const settings = {
      speed: 500,
      infinite: true,
      slidesToShow: slides,
      slidesToScroll: slides,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 4
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3
          }
        },
        {
          breakpoint: 400,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2
          }
        }
      ]
    };

    return (
      <div className="liked-movies">
        <h1>
          <Fa icon="heart" color="#db5461" /> MOVIES
        </h1>
        <Slider ref={c => (this.slider = c)} {...settings}>
          {likedMovies.map((movie, index) => (
            <SimpleMovieCard key={index} movie={movie} />
          ))}
        </Slider>
      </div>
    );
  }
}

export default connect(
  state => ({
    likedMovies: state.likedMovie
  }),
  { removeMovieFromList }
)(LikedMovies);
