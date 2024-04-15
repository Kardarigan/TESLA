import React from "react";
import {
  En_Hero,
  Middle,
  Middle_Image,
  Pw_Abilities,
  Pw_Home,
  Specs,
  Three,
} from "../Portal";
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
      <Middle
        title={powerwall.control.title}
        topic="Control"
        describe={powerwall.control.describe}
        orderLink={powerwall.getLink}
        light
        pw
      />
      <Middle_Image
        topic="Design"
        title={powerwall.design.title}
        cover={powerwall.design.cover}
        describe={powerwall.design.descrbie}
        orderLink={powerwall.getLink}
        numbers={powerwall.design.numbers}
        pw
      />
      <Specs
        title={powerwall.specs.title}
        cover={powerwall.specs.cover}
        items={powerwall.specs.items}
      />
    </>
  );
};

export default Powerwall;
