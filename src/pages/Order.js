import { useParams } from "react-router-dom";
import { Order_Options } from "../comps/Portal";
import { vehicles } from "../constants";

const Order = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => e.model.toLowerCase() === model);

  if (!model) {
    return <div>Loading...</div>;
  }

  return (
    <div className="flex pt-24 min-h-screen relative">
      <section className="w-3/4 max-md:hidden h-screen fixed"></section>
      <section className="md:w-1/4 absolute right-0">
        <Order_Options car={car} />
      </section>
    </div>
  );
};

export default Order;
