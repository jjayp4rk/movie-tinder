import { fetchMoviesSimilar } from "../../helpers";

export const GET_MOVIES_SIMILAR = "GET_MOVIES_SIMILAR";
export const GET_MOVIES_SIMILAR_FIRST = "GET_MOVIES_SIMILAR_FIRST";
export const REMOVE_DUPLICATES = "REMOVE_DUPLICATES";

// export const getMoviesSimilar = moviesArray => {
//   let data = [];
//   // console.log(
//   //   moviesArray.map(movie => data.concat(fetchMoviesSimilar(movie.id).results))
//   // );
//   // moviesArray.map(movie => console.log(movie));
//   const datapoint = fetchMoviesSimilar(moviesArray[0].id);
//   console.log(datapoint);

//   return {
//     type: GET_MOVIES_SIMILAR_FIRST,
//     payload: data
//   };
// };

export const getMoviesSimilar = id => {
  const data = fetchMoviesSimilar(id);

  return {
    type: GET_MOVIES_SIMILAR,
    payload: data
  };
};
