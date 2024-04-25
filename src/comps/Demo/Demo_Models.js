import { vehicles } from "../../constants";
import { useEffect, useState } from "react";

const Demo_Models = () => {
  const [showModel, setShowModel] = useState(null);
  const demoModel = document.getElementsByClassName("demoDriveModel");
  const demoButton = document.getElementsByClassName("demoDriveButton");

  const handleClick = (id) => {
    const theDemoModel = document.querySelector(`[data-tabcontent="${id}"]`);
    const theDemoButton = document.querySelector(`[data-tabcontent="${id}"]`);
    if (theDemoModel && theDemoButton) {
      for (let i = 0; i < demoModel.length; i++) {
        if (demoModel[i] && demoModel[i].classList.contains("block")) {
          demoModel[i].classList.remove("block");
        }
        if (
          demoButton[i] &&
          demoButton[i].classList.contains("border-2", "border-sky-500")
        ) {
          demoButton[i].classList.remove("border-2", "border-sky-500");
          demoButton[i].classList.add("border", "border-slate-100");
        }
      }
      theDemoModel.classList.add("block");
      theDemoButton.classList.remove("border", "border-slate-100");
      theDemoButton.classList.add("border-2", "border-sky-500");
    }
  };

  useEffect(() => {
    if (showModel) {
      handleClick(showModel);
    }
  }, [showModel]);

  return (
    <section className="flex max-md:flex-col">
      <div className="md:w-4/12 flex flex-col gap-2">
        {vehicles.map((item, index) => {
          const id = item.model.replace(/\s+/g, "-").toLowerCase();
          return (
            <button
              key={index}
              data-model={`demo_${id}`}
              onClick={() => setShowModel(`demo_${id}`)}
              className="demoDriveButton rounded border border-slate-100 text-sm text-center py-3"
            >
              <h3>{item.model}</h3>
            </button>
          );
        })}
      </div>
      <div className="md:w-8/12">
        {vehicles.map((item, index) => {
          const id = item.model.replace(/\s+/g, "-").toLowerCase();
          return (
            <div
              key={index}
              data-model={`demo_${id}`}
              className="flex-centralizer"
            >
              <img
                src={item.trsModel}
                alt="Transparent Model"
                data-model-demo={`demo_${id}`}
                className={`demoDriveModel ${
                  showModel === `demo_${id}` ? "block" : "hidden"
                }`}
              />
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Demo_Models;
