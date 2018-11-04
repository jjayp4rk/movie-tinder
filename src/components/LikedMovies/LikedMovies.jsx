import React, { Component } from "react";
import { removeMovieFromList } from "../MovieLiker/actions";
import { connect } from "react-redux";
import Slider from "react-slick";
import "./LikedMovies.scss";
import { Fa } from "mdbreact";
import SimpleMovieCard from "./components/SimpleMovieCard";
import LikeFront from "./components/LikeFront";

class LikedMovies extends Component {
  render() {
    const likedMovies = this.props.likedMovies;
    const slides = likedMovies.length > 5 ? 5 : likedMovies.length;

    const settings = {
      speed: 500,
      slidesToShow: slides,
      slidesToScroll: slides - 2,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 4,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1
          }
        }
      ]
    };

    return (
      <div className="liked-movies">
        <h1>
          <Fa icon="heart" color="#db5461" /> MOVIES
        </h1>
        <Slider {...settings}>
          {likedMovies.map((movie, index) => (
            <LikeFront key={index} movie={movie} />
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
