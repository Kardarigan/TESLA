import React from "react";
import { Checkbox, Demo_Models, Field } from "../comps/Portal";
import { demoForm } from "../constants";
import { Link } from "react-router-dom";

const Demo = () => {
  return (
    <section className="pagecenter pb-32">
      <h1 className="title">Schedule a Demo Drive</h1>
      <p className="text-xs my-3">Demo Drive a Tesla at a store near you.</p>
      <Demo_Models />
      <div className="my-24">
        <h2 className="title">Find Time and Location</h2>
        <p className="my-6">
          Input your postal code to search for Tesla showrooms and schedule a
          Test Drive
        </p>
        <div className="max-w-[320px]">
          <Field
            icon="fa-magnifying-glass"
            id="postalCode"
            placeholder="Postal Code"
          />
        </div>
      </div>

      <div className="mt-24">
        <h2 className="title">Contact Information</h2>
        <div className="mt-6 grid sm:grid-cols-2 gap-6">
          {demoForm.map((item, index) => {
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
      </div>
      <p className="flex my-10">
        <Checkbox label="Get" />
        <Link to="/" className="ms-1 link">
          Updates
        </Link>
      </p>
      <p className="text-xs">
        By clicking "Schedule Demo Drive", I authorize Tesla to contact me about
        this request as well as with more information about Tesla products,
        services and regional events via the contact information I provide. I
        understand calls or texts may use automatic or computer-assisted dialing
        or pre-recorded messages. Normal message and data rates apply. I can opt
        out at any time in the Tesla app or by{" "}
        <Link to="/communication-preferences/unsubscribe" className="link">
          unsubscribing
        </Link>
        . This is not required for purchase.
      </p>
      <button type="submit" className="button button-sky mt-12">
        Schedule Demo Drive
      </button>
    </section>
  );
};

export default Demo;
