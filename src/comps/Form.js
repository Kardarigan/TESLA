import React from "react";
import { Link } from "react-router-dom";

const Form = ({ title = null, form }) => {
  const isMobile = window.matchMedia(
    "only screen and (max-width: 767px)"
  ).matches;
  return (
    <section className="padding">
      <div className="mx-auto max-w-[1000px] flex md:gap-x-24 max-md:flex-col-reverse">
        <div className="md:w-3/5">
          <h2 className="title">{title}</h2>
        </div>
        <form className="md:w-2/5">
          {form.map((item, index) => {
            const id = item.label.replace(/\s+/g, "-").toLowerCase();
            return (
              <div key={index} className={`${index > 0 && "mt-6"}`}>
                <label htmlFor={id} className="label">
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
          <button className="button button-sky w-full mt-12" type="submit">
            Submit
          </button>
          <div className="mt-8 text-center px-5 text-xs text-slate-200">
            <p>
              By clicking "Submit", I authorize Tesla to contact me about this
              request via the contact information I provide. I understand calls
              or texts may use automatic or computer-assisted dialing or
              pre-recorded messages. Normal message and data rates apply. I can
              opt out at any time in the Tesla app or by{" "}
              <Link to="/">unsubscribing</Link>. This consent is not required to
              complete your request.
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default Form;
