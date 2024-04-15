import Button from "../../Button";

const En_Hero = ({ prod, title, get, dark }) => {
  return (
    <section
      className={`fullSection h-screen padding flex-col justify-between ${
        dark && "text-slate-950"
      }`}
      style={{ backgroundImage: "url(" + prod.heroCover + ")" }}
    >
      <div className="text-center">
        <h1>{title}</h1>
        {prod.subtitle && <h6>{prod.subtitle}</h6>}
      </div>
      <div className="text-center">
        <div className="grid lg:grid-cols-4 grid-cols-3 gap-x-5">
          {prod.heroAbilities.map((item, index) => {
            return (
              <div className="text-center" key={index}>
                {item.icon ? (
                  <i className={item.icon + " md:text-3xl text-xl"} />
                ) : (
                  <h3 className="md:text-3xl text-xl">{item.title}</h3>
                )}
                <h6 className="sm:text-base text-xs mt-2">{item.describe}</h6>
              </div>
            );
          })}
          <div className="lg:block hidden pt-3">
            <Button
              label={"Get " + title}
              to={get}
              outline={dark ? "dark" : "light"}
            />
          </div>
        </div>
        <Button
          label={"Get " + title}
          to={get}
          outline={dark ? "dark" : "light"}
          customClass="lg:hidden block mt-7 mx-auto"
        />
      </div>
    </section>
  );
};

export default En_Hero;
