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
              className={`absolute size-full inset-0 text-slate-50
                after:absolute
                before:absolute
                after:content-[""]
                before:content-[""]
                after:top-[15px]
              after:bg-slate-50 after:block
              after:w-[2px] after:h-[120px]
              
              before:top-[15px] before:block
              before:w-[4px] before:h-[4px]
              before:rounded-full before:ring-1
            before:ring-slate-50 before:bg-slate-950
              `}
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
