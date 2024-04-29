import { En_Hero, Fadein, Free_slider } from "../comps/Portal";
import { fleet } from "../constants";

const Fleet = () => {
  return (
    <>
      <En_Hero prod={fleet} title="Fleet and Business" get="" contact />
      <section
        className="h-screen bg-fullcenter"
        style={{ backgroundImage: "url(" + fleet.betterCover + ")" }}
      >
        <div className="max-w-[800px] mx-auto pt-12 flex max-md:flex-col gap-5 text-slate-950">
          <h2 className="min-w-[10rem] title">A Better Fleet</h2>
          <p>
            With low cost of ownership and zero emissions, owning a Tesla fleet
            benefits your business, your drivers and the environment. State and
            local incentives for electric vehicles also help to reduce overall
            costs.
          </p>
        </div>
      </section>
      <section className="text-xs padding flex max-md:flex-col gap-y-12 bg-slate-50 text-slate-950">
        {fleet.betterList.map((item, index) => {
          return (
            <div className="max-w-[300px] mx-auto">
              <h3 className="mb-3">{item.key}</h3>
              <ul className="grid gap-y-1 list-disc ps-4">
                {item.items.map((item, index) => {
                  return <li>{item}</li>;
                })}
              </ul>
            </div>
          );
        })}
      </section>
      <section className="max-w-[800px] mx-auto padding">
        <Fadein>
          <h2 className="title">Charge Anywhere</h2>
          <p>
            Your drivers can plug in at the office, on the road or anywhere with
            electricity. Travel farther on a single charge and keep going with
            access to 50,000+ Superchargers along your route.
          </p>
        </Fadein>
      </section>
      <Free_slider prod={fleet.charge} dark />
    </>
  );
};

export default Fleet;
