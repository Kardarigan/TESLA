import React from "react";
import { vehicles } from "../../../constants";

const Learn_Storage = (props) => {
  const { car } = props;
  const carSlides = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).slides;
  return <div>Learn_Storage</div>;
};

export default Learn_Storage;
