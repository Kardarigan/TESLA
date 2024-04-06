import React from "react";
import { vehicles } from "../../../constants";

const Learn_Exterior = (props) => {
  const { car } = props;
  const carSlides = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).slides;

  return <div>Learn_Exterior</div>;
};

export default Learn_Exterior;
