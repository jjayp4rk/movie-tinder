import React, { Component } from "react";
import { removeMovieFromList } from "../MovieLiker/actions";
import { connect } from "react-redux";
import Slider from "react-slick";
import { POSTER } from "../../constants/api";
import "./LikedMovies.scss";
import { CardImage, Card, Fa } from "mdbreact";

class LikedMovies extends Component {
  render() {
    const likedMovies = this.props.likedMovies;
    const slides = likedMovies.length > 5 ? 5 : likedMovies.length;

    const settings = {
      dots: true,
      speed: 500,
      slidesToShow: slides,
      slidesToScroll: slides - 2
    };

    return (
      <div className="liked-movies">
        <Slider {...settings}>
          {likedMovies.map((movie, index) => (
            <Card>
              <CardImage
                key={index}
                className="img-fluid"
                src={`${POSTER}/${movie.image}`}
              />
            </Card>
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
