import React from "react";
import { vehicles } from "../../../constants";

const Learn_Speed = (props) => {
  const { car } = props;
  const caeNumebrs = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).numbers;

  return (
    <section
      className="bg-slate-950 bg-fullcenter h-auto"
      style={{ backgroundImage: "url(" + car.roadImage + ")" }}
    >
      <div className="flex-seperate size-full shadowFromBottom md:px-32 padding">
        {caeNumebrs.map((item) => {
          return (
            <div key={item.key} className="text-center">
              <h4 className="font-bold md:text-4xl sm:text-2xl text-md">
                {item.value}{" "}
                <span className="md:text-xl text-[10px]">{item.unit}</span>
              </h4>
              <p className="md:text-sm sm:text-[10px] text-[8px]">{item.key}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Learn_Speed;
