import React from "react";
import { vehicles } from "../../../constants";

const Learn_Amenities = (props) => {
  const { car } = props;
  const carAmenities = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).amenities;

  return <section></section>;
};

export default Learn_Amenities;
