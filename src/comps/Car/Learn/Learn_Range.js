import React from "react";
import { vehicles } from "../../../constants";

const Learn_Range = (props) => {
  const { car } = props;
  const carSlides = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).slides;
  return <div>Learn_Range</div>;
};

export default Learn_Range;
