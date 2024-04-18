import React from "react";

const Learn_Bgsection = ({ car, seperate = false }) => {
  return (
    <section className="padding">
      {seperate ? (
        <div className="min-h-[120vh]">
          <img
            src={car.cover}
            alt={car.title}
            className="bg-fullobject rounded"
          />
          <div className="max-w-[800px] mt-8">
            <h3 className="title">{car.title}</h3>
            <p className="mt-5">{car.describe}</p>
          </div>
        </div>
      ) : (
        <div
          className="min-h-[120vh] flex flex-col justify-end bg-fullcenter"
          style={{ backgroundImage: "url(" + car.cover + ")" }}
        >
          <div className="max-w-[800px]">
            <h3 className="title">{car.title}</h3>
            <p className="mt-5">{car.describe}</p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Learn_Bgsection;
