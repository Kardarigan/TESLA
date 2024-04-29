import React from "react";

const Full_Middle = ({ title, describe, cover, center = false }) => {
  return (
    <section
      className="h-[120vh] padding-x pt-2 bg-fullcenter"
      style={{ backgroundImage: "url(" + cover + ")" }}
    >
      <div className={`max-w-[700px] ${center && "text-center mx-auto"}`}>
        <h2 className="title text-slate-950">{title}</h2>
        <p className="text-sm text-slate-700 pt-6">{describe}</p>
      </div>
    </section>
  );
};

export default Full_Middle;
