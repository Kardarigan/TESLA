import { useParams } from "react-router-dom";
import { vehicles } from "../../constants";

const Learn = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => e.model.toLowerCase() === model);

  return <div>Learn</div>;
};

export default Learn;
