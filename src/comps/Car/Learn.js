import { useParams } from "react-router-dom";
import { vehicles } from "../../constants";
import { Learn_Hero, Learn_Inter, Learn_Speed } from "../Portal";

const Learn = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => e.model.toLowerCase() === model);

  return (
    <div id="learn">
      <Learn_Hero car={car} />
      <Learn_Speed car={car} />
      <Learn_Inter car={car} />
    </div>
  );
};

export default Learn;
