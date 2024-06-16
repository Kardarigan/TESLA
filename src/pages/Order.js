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
    <div className="flex pt-24">
      <section className="w-2/3 max-md:hidden h-screen fixed"></section>
      <section className="md:w-1/3">
        <Order_Options car={car} />
      </section>
    </div>
  );
};

export default Order;
