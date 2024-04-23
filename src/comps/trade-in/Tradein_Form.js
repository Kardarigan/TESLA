import React from "react";
import { Link } from "react-router-dom";
import { tradeinForm } from "../../constants";

const Tradein_Form = () => {
  const isMobile = window.matchMedia(
    "only screen and (max-width: 767px)"
  ).matches;
  return (
    <section className="max-w-[800px] mx-auto pt-32 padding">
      <p>
        <i className="fal fa-chevron-left" />
        <Link to="/" className="link ms-2">
          Back
        </Link>
      </p>
      <h1 className="title mt-8">Vehicle Details</h1>
      <div className="mt-3 grid sm:grid-cols-2 gap-6">
        {tradeinForm.vahicle.map((item, index) => {
          const id = item.label.replace(/\s+/g, "-").toLowerCase();
          return (
            <div key={index}>
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
                      let isSelected = false;
                      if (item.label === "Contact Preference") {
                        if (isMobile) {
                          isSelected = index === 0;
                        } else {
                          isSelected = index === 1;
                        }
                      }
                      return (
                        <option key={index} selected={isSelected}>
                          {option}
                        </option>
                      );
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
      <h1 className="title mt-8">Contact Information</h1>
      <div className="mt-3 grid sm:grid-cols-2 gap-6">
        {tradeinForm.contact.map((item, index) => {
          const id = item.label.replace(/\s+/g, "-").toLowerCase();
          return (
            <div key={index}>
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
                      let isSelected = false;
                      if (item.label === "Contact Preference") {
                        if (isMobile) {
                          isSelected = index === 0;
                        } else {
                          isSelected = index === 1;
                        }
                      }
                      return (
                        <option key={index} selected={isSelected}>
                          {option}
                        </option>
                      );
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
