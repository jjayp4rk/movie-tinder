import React, { Component } from "react";
import { connect } from "react-redux";
import { getMoviesPopular } from "./actions";

class Home extends Component {
  componentDidMount() {
    this.props.getMoviesPopular();
  }
  render() {
    const { data } = this.props;
    if (!data.isFetched) {
      return <div>Loading...</div>;
    } else if (!data.error) {
      return (
        <div>
          <h1>{data.movies[0].title}</h1>
        </div>
      );
    }
    return <div>ERROR</div>;
  }
}

export default connect(
  state => ({
    data: state.home
  }),
  { getMoviesPopular }
)(Home);
