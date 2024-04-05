import { useParams } from "react-router-dom";
import { vehicles } from "../../constants";
import Learn_Hero from "./Learn/Learn_Hero";

const Learn = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => e.model.toLowerCase() === model);

  return (
    <div id="learn">
      <Learn_Hero car={car} />
    </div>
  );
};

export default Learn;
