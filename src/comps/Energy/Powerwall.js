import React from "react";
import { En_Hero } from "../Portal";
import { powerwall } from "../../constants";

const Powerwall = () => {
  return (
    <>
      <En_Hero prod={powerwall} title="Powerwall" get={powerwall.getLink} />
    </>
  );
};

export default Powerwall;
