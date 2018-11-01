import React from 'react';
import { POSTER } from '../../../constants/api';
import { CardBody, CardImage, CardTitle, CardText } from 'mdbreact';
import { connect } from 'react-redux';
import '../MovieCard.scss';

const Back = ({ movie }) => {
  return (
    <div className="card-back">
      <CardImage
        className="img-fluid mh-40"
        src={`${POSTER}/${movie.poster_path}`}
        waves
      />
      <CardBody>
        <CardTitle>{movie.title}</CardTitle>
        <CardText>{movie.overview}</CardText>
      </CardBody>
    </div>
  );
};

export default Back;
