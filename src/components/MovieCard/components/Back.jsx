import React from "react";
import { POSTER } from "../../../constants/api";
import { CardBody, CardImage, CardTitle, Fa } from "mdbreact";
import YouTube from "react-youtube";
import "../MovieCard.scss";

const Back = ({ movie, trailers }) => {
  return (
    <div className="card-back">
      <CardImage
        className="img-fluid"
        src={`${POSTER}/${movie.poster_path}`}
        waves
      />
      <CardBody>
        <CardTitle>{movie.title}</CardTitle>
        <p>{movie.overview}</p>
        <ul className="list-unstyled list-inline font-small">
          <li className="list-inline-item pr-2">
            <Fa icon="calendar" /> {""}
            {movie.release_date}
          </li>
          <li className="list-inline-item pr-2">
            <Fa icon="star" /> {""}
            {movie.vote_average}
          </li>
        </ul>
        {trailers[0] ? (
          <YouTube
            videoId={trailers[0].key}
            opts={{
              height: "35%",
              width: "100%",
              playerVars: {
                autoplay: 0
              }
            }}
          />
        ) : null}
      </CardBody>
    </div>
  );
};

export default Back;
