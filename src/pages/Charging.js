import { Charg_Three, En_Hero, Middle } from "../comps/Portal";
import { charging } from "../constants";
import ModelY_Charging from "../assets/Charging/Charging-Convenient-Lifestyle-Desktop.avif";

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
      <Charg_Three thing={charging.plugin} />
      <section
        className="bg-fullcenter h-screen"
        style={{ backgroundImage: "url(" + ModelY_Charging + ")" }}
      />
      <Middle
        title="Start Your Day Charged"
        describe="Charge at home and wake up to a charged battery every day. Our charging options are designed for every property."
        learnLink="/"
      />
    </>
  );
};

export default Charging;
