import { megapack } from "../../constants";
import { En_Hero, Full_Middle, Padding_Middle } from "../Portal";

const Megapack = () => {
  return (
    <>
      <En_Hero
        prod={megapack}
        title="Megapack"
        subtitle="Massive Energy Storage"
        get={megapack.getLink}
        dark
      />
      <Padding_Middle
        title={megapack.cleaner.title}
        cover={megapack.cleaner.cover}
        describe={megapack.cleaner.describe}
      />
      <Full_Middle
        title={megapack.resiliency.title}
        describe={megapack.resiliency.describe}
        cover={megapack.resiliency.cover}
        center
      />
      <Padding_Middle
        title={megapack.install.title}
        cover={megapack.install.cover}
        describe={megapack.install.describe}
        right
      />
      <Full_Middle
        title={megapack.integrated.title}
        describe={megapack.integrated.describe}
        cover={megapack.integrated.cover}
      />
      <Padding_Middle
        title={megapack.design.title}
        cover={megapack.design.cover}
        describe={megapack.design.describe}
      />
    </>
  );
};

export default Megapack;
