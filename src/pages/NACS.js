import { En_Hero, Full_Middle } from "../comps/Portal";
import { chargingForAll } from "../constants";

const NACS = () => {
  return (
    <>
      <En_Hero
        prod={chargingForAll}
        title="Charging for All"
        customLinkLabel="Find Us"
        get="/"
      />
      <Full_Middle
        title={chargingForAll.access.title}
        cover={chargingForAll.access.cover}
        describe={chargingForAll.access.describe}
        center
      />
    </>
  );
};

export default NACS;
