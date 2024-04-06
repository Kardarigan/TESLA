import React from "react";
import { vehicles } from "../../../constants";

const Learn_Design = (props) => {
  const { car } = props;
  const carSlides = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).slides;

  return <div>Learn_Design</div>;
};

export default Learn_Design;
