import React from "react";

const Specs = ({ title, cover, items }) => {
  return (
    <section className="md:h-screen flex md:flex-row flex-col md:px-12 px-8">
      <div className="md:w-1/2 overflow-hidden">
        <img src={cover} alt={title} className="bg-fullobject" />
      </div>
      <div className="md:w-1/2 padding">
        <h2 className="md:text-3xl text-2xl">
          {title}
          <span> Specs</span>
        </h2>
        <div className="flex gap-x-12">
          <div className="pt-10">
            {items.fisrtCol.map((item, index) => {
              return (
                <div className="md:text-sm pt-5" key={index}>
                  <hr className="pb-3 border-slate-500 w-8" />
                  <h4>{item.title}</h4>
                  <ul className="text-slate-200 leading-5 text-xs">
                    {item.details.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
          <div className="pt-10">
            {items.secondCol.map((item, index) => {
              return (
                <div className="md:text-sm pt-5" key={index}>
                  <hr className="pb-3 border-slate-500 w-8" />
                  <h4>{item.title}</h4>
                  <ul className="text-slate-200 leading-5 text-xs">
                    {item.details.map((item, index) => {
                      return <li key={index}>{item}</li>;
                    })}
                  </ul>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Specs;
