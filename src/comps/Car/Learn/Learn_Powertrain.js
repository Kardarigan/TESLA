import React from "react";
import { vehicles } from "../../../constants";

const Learn_Powertrain = (props) => {
  const { car } = props;
  const carSlides = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).slides;

  return <div>Learn_Powertrain</div>;
};

export default Learn_Powertrain;
