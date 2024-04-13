const Learn_Safety = (props) => {
  const { car } = props;
  const carSafe = car.safety;

  return (
    <section className="min-h-screen padding">
      <div className="relative">
        <img src={carSafe.cover} alt={carSafe.title} />
        {carSafe.marks.map((item) => {
          return (
            <div
              className={`safemark text-slate-50`}
              style={{
                "::before": {
                  top: `${item.y}%`,
                  left: `${item.x}%`,
                },
                "::after": {
                  top: `${item.y}%`,
                  left: `${item.x - 1}%`,
                },
              }}
            >
              {item.title}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Learn_Safety;
