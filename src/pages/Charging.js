import { En_Hero } from "../comps/Portal";
import { charging } from "../constants";

const Charging = () => {
  return (
    <>
      <En_Hero
        prod={charging}
        title="Charging"
        subtitle="Go Anywhere, Charge Everywhere"
        customLinkLabel="Demo Drive"
        get="/demo"
      />
    </>
  );
};

export default Charging;
