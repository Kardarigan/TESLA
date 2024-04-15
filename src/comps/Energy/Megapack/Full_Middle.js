import React from "react";

const Full_Middle = ({ title, describe, cover, center = false }) => {
  return (
    <section
      className="h-screen padding-x pt-2 bg-fullcenter"
      style={{ backgroundImage: "url(" + cover + ")" }}
    >
      <div className={`max-w-[700px] ${center && "text-center mx-auto"}`}>
        <h2 className="md:text-3xl text-2xl text-slate-950 font-bold">
          {title}
        </h2>
        <p className="text-sm text-slate-700 pt-6">{describe}</p>
      </div>
    </section>
  );
};

export default Full_Middle;
