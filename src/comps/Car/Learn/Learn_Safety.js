import Button from "../../Button";

const Learn_Safety = ({ car }) => {
  const carSafe = car.safety;

  return (
    <section className="min-h-screen padding-y overflow-hidden">
      <div className="relative safemark">
        <img src={carSafe.cover} alt={carSafe.title} />
        {carSafe.marks.map((item) => {
          return (
            <div className={`safemark`}>
              <span>{item.title}</span>
            </div>
          );
        })}
      </div>
      <div className="md:px-48 px-14 pt-24">
        <h2 className="title">{carSafe.title}</h2>
        <p className="py-7">{carSafe.describe}</p>
        <Button label="Safety Overview" to="/" outline="light" />
      </div>
    </section>
  );
};

export default Learn_Safety;
