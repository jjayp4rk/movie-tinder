import React from 'react';
import { connect } from 'react-redux';
import { getMoviesPopular } from '../../Home/actions';

const RefreshCard = ({ getMoviesPopular }) => (
  <div>
    <h2>NO MORE MOVIES</h2>
    <button onClick={() => getMoviesPopular()}>GET MORE MOVIES</button>
  </div>
);

export default connect(
  null,
  { getMoviesPopular }
)(RefreshCard);
