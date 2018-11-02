import React from "react";
import { connect } from "react-redux";
import { getMoviesPopular } from "../../Home/actions";
import { Card, CardBody, Fa, Button } from "mdbreact";
import PugImage from "../../../images/pug1.jpeg";

const RefreshCard = ({ getMoviesPopular, page }) => (
  <div className="refresh-card">
    <Card>
      <CardBody>
        <img src={PugImage} alt="sleeping-pug" />
      </CardBody>
      <CardBody>
        <h1>No more movies!</h1>
        <p>Get more movies and start liking!</p>

        <Button onClick={() => getMoviesPopular(page)}>
          <Fa icon="refresh" size="3x" />
        </Button>
      </CardBody>
    </Card>
  </div>
);

export default connect(
  null,
  { getMoviesPopular }
)(RefreshCard);
