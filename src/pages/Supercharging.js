import { En_Hero, Free_slider, Middle, Middle_Image } from "../comps/Portal";
import { supercharging } from "../constants";

const Supercharging = () => {
  return (
    <>
      <En_Hero prod={supercharging} title="Supercharger" />
      <Middle_Image
        topic="Locations"
        title="Go Anywhere"
        cover={supercharging.locations.cover}
        describe="With 50,000+ Superchargers, Tesla owns and operates the largest global, fast charging network in the world. Located on major routes near convenient amenities, Superchargers keep you charged when you're away from home. Simply plug in, charge and go."
        link="/"
        label="Find Us"
      />
      <Middle
        topic="Experience"
        title="Freedom to Travel"
        describe="To use a Supercharger, simply plug in and charge automatically. With the Tesla app, you can view Supercharger stall availability, monitor your charge status or get notified when you’re ready to go."
        light
      />
      <Free_slider />
    </>
  );
};

export default Supercharging;
