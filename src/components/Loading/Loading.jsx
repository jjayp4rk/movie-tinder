import React from "react";
import { GridLoader } from "react-spinners";
import "./Loading.scss";

const Loading = () => {
  return (
    <div className="loader">
      <GridLoader sizeUnit={"px"} size={74} color={"#DB5461"} />
      <p>
        M O V I E S{"  "}L O A D I N G
        <span aria-label="smile">
          {"  "}
          😎
        </span>
      </p>
    </div>
  );
};

export default Loading;
