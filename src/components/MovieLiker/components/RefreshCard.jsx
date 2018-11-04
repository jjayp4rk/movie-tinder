import React from "react";
import { connect } from "react-redux";
import { getMoviesPopular, incrementPage } from "../../Home/actions";
import { Card, CardBody, Fa, Button } from "mdbreact";
import PugImage from "../../../images/pug1.jpeg";

const RefreshCard = ({ getMoviesPopular, incrementPage, page }) => (
  <div className="refresh-card">
    <Card>
      <CardBody>
        <img src={PugImage} alt="sleeping-pug" />
      </CardBody>
      <CardBody>
        <h1>No more movies!</h1>
        <p>Get more movies and start liking!</p>

        <Button
          onClick={() => {
            incrementPage();
          }}
        >
          <Fa icon="refresh" size="3x" />
        </Button>
      </CardBody>
    </Card>
  </div>
);

export default connect(
  null,
  { getMoviesPopular, incrementPage }
)(RefreshCard);
