import React, { Component } from 'react';
import { CardImage, Card, CardBody, Fa } from 'mdbreact';
import { POSTER } from '../../../constants/api';
import './SimpleMovieCard.scss';

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
    const { hover } = this.state;

    return (
      <div className="simple-movie-card">
        <Card onMouseEnter={this.showInfo} onMouseLeave={this.closeInfo}>
          <CardImage
            key={movie.id}
            className="img-fluid"
            src={`${POSTER}/${movie.image}`}
          />
          {this.state.hover ? (
            <CardBody>
              <h3>{movie.title}</h3>
              <span>
                {movie.vote_average} {''}
                <Fa icon="star" />
              </span>
            </CardBody>
          ) : null}
        </Card>
      </div>
    );
  }
}

export default SimpleMovieCard;
