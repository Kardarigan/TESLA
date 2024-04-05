import { useParams } from "react-router-dom";
import { vehicles } from "../../../constants";

const Learn_Hero = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => toUpperCase(e.model) === toUpperCase(model));

  return <div>Learn_Hero</div>;
};

export default Learn_Hero;
