import React from "react";
import { Link } from "react-router-dom";
import { tradeinForm } from "../../constants";

const Tradein_Form = () => {
  return (
    <section className="max-w-[800px] mx-auto pt-32">
      <p>
        <i className="fal fa-chevron-left" />
        <Link to="/" className="link ms-2">
          Back
        </Link>
      </p>
      <h1 className="title mt-2">Vehicle Details</h1>
      <div className="mt-12 grid md:grid-cols-2 gap-6">
        {tradeinForm.map((item, index) => {
          const id = item.label.replace(/\s+/g, "-").toLowerCase();
          return (
            <div>
              <label
                htmlFor={id}
                className="text-slate-200 md:text-sm text-xs font-bold"
              >
                {item.label}
              </label>
              <div className="mt-1">
                {item.type === "textarea" ? (
                  <textarea className="field min-h-[120px]"></textarea>
                ) : item.type === "select" ? (
                  <select className="field">
                    {item.options.map((option, index) => {
                      return <option key={index}>{option}</option>;
                    })}
                  </select>
                ) : (
                  <input id={id} type={item.type} className="field" />
                )}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Tradein_Form;
