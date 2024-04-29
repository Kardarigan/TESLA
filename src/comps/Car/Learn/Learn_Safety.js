import { Button } from "../../Portal";

const Learn_Safety = ({ car }) => {
  const carSafe = car.safety;

  return (
    <section
      className={`min-h-screen padding-y overflow-hidden ${
        (car.model == "Model S" || car.model == "Model S") &&
        "text-slate-950 bg-slate-50"
      }`}
    >
      <div className="relative safemark">
        <img src={carSafe.cover} alt={carSafe.title} />
        {carSafe.marks.map((item) => {
          return (
            <div
              className={`safemark ${
                (car.model == "Model S" || car.model == "Model S") &&
                "safemark-dark"
              }`}
            >
              <span>{item}</span>
            </div>
          );
        })}
      </div>
      <div className="md:px-48 px-14 pt-24">
        <h2 className="title">{carSafe.title}</h2>
        <p className="py-7">{carSafe.describe}</p>
        <Button
          label="Safety Overview"
          to="/"
          outline={
            car.model == "Model S" || car.model == "Model S" ? "dark" : "light"
          }
        />
      </div>
    </section>
  );
};

export default Learn_Safety;
