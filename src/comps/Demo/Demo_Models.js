import { vehicles } from "../../constants";
import { useEffect, useState } from "react";

const Demo_Models = () => {
  const [showModel, setShowModel] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowModel((showModel) => (showModel + 1) % vehicles.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const demoButton = Array.from(
    document.getElementsByClassName("demoDriveButton")
  );

  demoButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      setShowModel(index);
    });
  });

  return (
    <section className="flex max-md:flex-col-reverse gap-5 mt-12">
      <div className="md:w-4/12 grid max-md:grid-cols-6 gap-2">
        {vehicles.map((item, index) => {
          return (
            <button
              key={index}
              onClick={() => setShowModel(index)}
              className={`demoDriveButton rounded border border-slate-200 transition-all ${
                showModel === index && "bg-slate-200 text-slate-950"
              } text-xs py-3 max-md:min-h-[100px] flex-fullcenter`}
            >
              <h3 className="max-md:rotate-90 max-md:h-3 text-nowrap ">
                {item.model}
              </h3>
            </button>
          );
        })}
      </div>
      <div className="md:w-8/12 bg-slate-50 rounded flex-fullcenter relative min-h-[317px]">
        {vehicles.map((item, index) => {
          return (
            <div
              key={index}
              className={`absolute transition-all duration-500 ${
                showModel === index ? "opacity-100" : "opacity-0"
              }`}
            >
              <img src={item.trsModel} alt="Transparent Model" />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Demo_Models;
