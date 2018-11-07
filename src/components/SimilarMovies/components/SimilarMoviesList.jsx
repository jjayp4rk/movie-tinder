import React from "react";
import SimpleMovieCard from "../../LikedMovies/components/SimpleMovieCard";

const SimilarMoviesList = ({ movies }) => {
  return (
    <div className="similar-movies-list">
      {movies.map((movie, index) => (
        <SimpleMovieCard key={index} movie={movie} />
      ))}
    </div>
  );
};

export default SimilarMoviesList;
