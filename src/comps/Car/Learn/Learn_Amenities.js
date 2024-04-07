import React from "react";
import { vehicles } from "../../../constants";

const Learn_Amenities = (props) => {
  const { car } = props;
  const carAmenities = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).amenities;

  return (
    <section className="lg:px-10 py-5 mx-auto max-w-[1200px]">
      {carAmenities.map((item, index) => {
        return (
          <div
            key={index}
            className={`flex justify-between sm:${
              index % 2 === 1 ? "flex-row-reverse" : "flex-row"
            } flex-col sm:px-5 py-1`}
          >
            <div className="sm:w-1/2 flex items-center">
              {item.image.endsWith(".mp4") || item.image.endsWith(".webm") ? (
                <video autoPlay muted loop className=" bg-fullobject w-full">
                  <source
                    src={item.image}
                    type={`video/${item.image.split(".").pop()}`}
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full bg-fullobject"
                />
              )}
            </div>
            <div className="sm:w-1/2 flex items-center">
              <div className="px-5 sm:py-0 py-10">
                <h3 className="font-bold">{item.title}</h3>
                <p className="mt-3">{item.describe}</p>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
};

export default Learn_Amenities;
