import React from "react";
import { En_Hero, Middle, Pw_Abilities, Pw_Home, Three } from "../Portal";
import { powerwall } from "../../constants";

const Powerwall = () => {
  return (
    <>
      <En_Hero prod={powerwall} title="Powerwall" get={powerwall.getLink} />
      <Pw_Abilities pw={powerwall.abilities} cover={powerwall.abilitiesCover} />
      <Middle
        title={powerwall.security.title}
        topic="Security"
        describe={powerwall.security.describe}
        orderLink={powerwall.getLink}
        pw
      />
      <Middle
        title={powerwall.independence.title}
        topic="Independence"
        describe={powerwall.independence.describe}
        orderLink={powerwall.getLink}
        pw
      />
      <Pw_Home pw={powerwall.slides} />
      <Three items={powerwall.mobile} cover={powerwall.mobileCover} />
    </>
  );
};

export default Powerwall;
