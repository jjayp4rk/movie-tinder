import React from "react";
import { CardImage, Card, Fa } from "mdbreact";
import { POSTER } from "../../../constants/api";

const BackFront = ({ movie }) => {
  return (
    <div>
      <Card>
        <CardImage
          key={movie.id}
          className="img-fluid"
          src={`${POSTER}/${movie.image}`}
        />
      </Card>
    </div>
  );
};

export default BackFront;
