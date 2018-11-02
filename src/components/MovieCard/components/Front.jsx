import React from "react";
import { POSTER } from "../../../constants/api";
import { CardImage } from "mdbreact";

const Front = ({ movie }) => {
  return (
    <div className="card-front">
      <CardImage
        className="img-fluid"
        src={`${POSTER}/${movie.poster_path}`}
        waves
      />
    </div>
  );
};

export default Front;
