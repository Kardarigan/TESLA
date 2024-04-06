import { useParams } from "react-router-dom";
import { vehicles } from "../../constants";
import {
  Learn_Amenities,
  Learn_Design,
  Learn_Exterior,
  Learn_Hero,
  Learn_Inter,
  Learn_Intertop,
  Learn_Powertrain,
  Learn_Range,
  Learn_Speed,
  Learn_Storage,
} from "../Portal";

const Learn = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => e.model.toLowerCase() === model);

  return (
    <div id="learn">
      <Learn_Hero car={car} />
      <Learn_Speed car={car} />
      <Learn_Intertop car={car} />
      <Learn_Inter car={car} />
      <Learn_Amenities car={car} />
      <Learn_Design car={car} />
      <Learn_Exterior car={car} />
      <Learn_Range car={car} />
      <Learn_Powertrain car={car} />
      <Learn_Storage car={car} />
    </div>
  );
};

export default Learn;
