import React from "react";
import { CardImage, Card, Fa } from "mdbreact";
import { POSTER } from "../../../constants/api";

const LikeFront = ({ movie }) => {
  return (
    <div>
      <Card>
        <CardImage className="img-fluid" src={`${POSTER}/${movie.image}`} />
      </Card>
    </div>
  );
};

export default LikeFront;
