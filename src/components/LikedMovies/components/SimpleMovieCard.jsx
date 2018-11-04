import { React, Component } from "react";
import { CardImage, Card, Fa } from "mdbreact";
import { POSTER } from "../../../constants/api";

class SimpleMovieCard extends Component {
  render() {
    const { movie } = this.props;
    console.log(movie);
    return (
      <Card>
        <CardImage
          key={movie.id}
          className="img-fluid"
          src={`${POSTER}/${movie.image}`}
        />
      </Card>
    );
  }
}

export default SimpleMovieCard;
