import { commercial } from "../../constants";
import { En_Hero, Middle, Middle_Image } from "../Portal";

const Commercial = () => {
  return (
    <>
      <En_Hero
        prod={commercial}
        title="Commercial Energy"
        get={commercial.getLink}
      />
      <Middle_Image
        topic="Storage"
        title={commercial.storage.title}
        describe={commercial.storage.describe}
        cover={commercial.storage.cover}
        learnLink={commercial.learnLink}
      />
      <section>
        <img
          src={commercial.controlCenter}
          alt="Control-Center"
          className="bg-fullobject w-full h-[80vh]"
        />
      </section>
      <Middle
        topic="Reliability"
        title={commercial.reliability.title}
        describe={commercial.reliability.describe}
        light
      />
      <Middle
        topic="Software"
        title={commercial.software.title}
        describe={commercial.software.describe}
        learnLink={commercial.learnLink}
        light
      />
    </>
  );
};

export default Commercial;
