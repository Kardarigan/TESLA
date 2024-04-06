import React from "react";
import { vehicles } from "../../../constants";

const Learn_Amenities = (props) => {
  const { car } = props;
  const carSlides = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).slides;

  return <div>Learn_Amenities</div>;
};

export default Learn_Amenities;
