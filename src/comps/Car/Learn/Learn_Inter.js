import React from "react";
import { vehicles } from "../../../constants";

const Learn_Inter = (props) => {
  const { car } = props;
  const carSlides = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).slides;

  return <div>Learn_Inter</div>;
};

export default Learn_Inter;
