import React, { Component } from "react";
import { CardImage, Card, CardBody, Fa } from "mdbreact";
import { POSTER } from "../../../constants/api";
import { Link } from "react-dom";
import "./SimpleMovieCard.scss";

class SimpleMovieCard extends Component {
  state = { hover: false };

  showInfo = () => {
    this.setState({ hover: !this.state.hover });
  };

  closeInfo = () => {
    this.setState({ hover: !this.state.hover });
  };

  render() {
    const { movie } = this.props;

    return (
      <div className="simple-movie-card">
        <a href={`movie/${movie.id}`}>
          <Card onMouseEnter={this.showInfo} onMouseLeave={this.closeInfo}>
            <CardImage
              key={movie.id}
              className="img-fluid"
              src={`${POSTER}/${movie.poster_path}`}
            />
            {this.state.hover ? (
              <CardBody>
                <h3>{movie.title}</h3>
                <span>
                  {movie.vote_average} {""}
                  <Fa icon="star" />
                </span>
              </CardBody>
            ) : null}
          </Card>
        </a>
      </div>
    );
  }
}

export default SimpleMovieCard;
