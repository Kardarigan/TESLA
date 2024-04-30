import { Button, Learn_Bgsection, En_Hero } from "../comps/Portal";
import { semi } from "../constants";

const Semi = () => {
  return (
    <>
      <En_Hero
        prod={semi}
        title="Semi"
        subtitle="The Future of Trucking is Electric"
        dark
      />
      <section className="min-h-[50vh] padding text-center">
        <h2 className="title">It's a Beast</h2>
        <p className="my-6">
          More powerful, more efficient and fully electric. Semi is the future
          of electric trucking.
        </p>
        <Button to="/" label="Get Updates" outline="light" />
      </section>
      <Learn_Bgsection car={semi.performance} />

      <Learn_Bgsection car={semi.safety} seperate />
      <Learn_Bgsection car={semi.range} seperate />

      <Learn_Bgsection car={semi.owenership} />
    </>
  );
};

export default Semi;