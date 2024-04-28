import React from "react";
import { Link } from "react-router-dom";
import { tradeinForm } from "../../constants";
import { Checkbox } from "../Portal";

const Tradein_Form = () => {
  const isMobile = window.matchMedia(
    "only screen and (max-width: 767px)"
  ).matches;
  return (
    <section className="pagecenter pb-32">
      <p>
        <i className="fal fa-chevron-left" />
        <Link to="/" className="link ms-2">
          Back
        </Link>
      </p>
      <form action="">
        <h2 className="title mt-8">Vehicle Details</h2>
        <div className="mt-3 grid sm:grid-cols-2 gap-6">
          {tradeinForm.vahicle.map((item, index) => {
            const id = item.label.replace(/\s+/g, "-").toLowerCase();
            return (
              <div key={index}>
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
        </div>
        <h2 className="title mt-8">Contact Information</h2>
        <div className="mt-3 grid sm:grid-cols-2 gap-6">
          {tradeinForm.contact.map((item, index) => {
            const id = item.label.replace(/\s+/g, "-").toLowerCase();
            return (
              <div key={index}>
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
        </div>
        <h2 className="mt-8 mb-4">Product Interests</h2>
        <div className="mt-3 flex flex-col gap-y-4">
          {tradeinForm.model.map((item, index) => {
            const id = item.replace(/\s+/g, "-").toLowerCase();
            return (
              <div key={index}>
                <Checkbox label={item} id={id} />
              </div>
            );
          })}
        </div>
        <p className="flex mt-8">
          <Checkbox label="Get" />
          <Link to="/" className="link ms-1">
            Tesla Updates
          </Link>
        </p>
        <p className="text-xs mt-6">
          By clicking 'Next', I authorize Tesla to contact me, including to
          follow up, about this request via the contact information I provide. I
          understand calls or texts may use automatic or computer-assisted
          dialing or pre-recorded messages. Normal message and data rates apply.
          I can opt out at any time in the Tesla app or by{" "}
          <Link to="/" className="link">
            unsubscribing
          </Link>
          .
        </p>
        <button type="submit" className="button button-sky mt-6 px-24">
          Next
        </button>
      </form>
    </section>
  );
};

export default Tradein_Form;
