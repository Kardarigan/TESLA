import Button from "../../Button";

const En_Hero = ({ prod, title, subtitle = false, get, dark }) => {
  return (
    <>
      <section
        className={`fullSection h-screen ${dark && "text-slate-950"}`}
        style={{ backgroundImage: "url(" + prod.heroCover + ")" }}
      >
        {prod.heroVideo && (
          <video
            autoPlay
            muted
            loop
            className="absolute bg-fullobject w-full h-screen"
          >
            <source
              src={prod.heroVideo}
              type={`video/${prod.heroVideo.split(".").pop()}`}
            />
            Your browser does not support the video tag.
          </video>
        )}
        <div className="padding text-center z-20 h-full flex flex-col justify-between">
          <div>
            <h1>{title}</h1>
            {subtitle && <h6>{subtitle}</h6>}
          </div>
          <div>
            <div className="grid lg:grid-cols-4 grid-cols-3 gap-x-5">
              {prod.heroAbilities.map((item, index) => {
                return (
                  <div className="text-center" key={index}>
                    {item.icon ? (
                      <i className={item.icon + " md:text-3xl text-xl"} />
                    ) : (
                      <h3 className="md:text-3xl text-xl">{item.title}</h3>
                    )}
                    <h6 className="sm:text-base text-xs mt-2">
                      {item.describe}
                    </h6>
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
        </div>
      </section>
    </>
  );
};

export default En_Hero;
