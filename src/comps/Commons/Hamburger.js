import React from "react";
import { hamburgerItems } from "../../constants";

const Hamburger = ({ closeHam }) => {
  return (
    <div className="px-6 py-2">
      <div className="text-end">
        <button className="navitem w-[48px] text-2xl" onClick={closeHam}>
          <i className="fa-light fa-xmark" />
        </button>
      </div>
      <ul className="flex flex-col gap-4 mt-4">
        {hamburgerItems.map((item, index) => {
          return (
            <li
              className={`navitem py-4 ${item.submenu && "flex-seperate"}`}
              key={index}
            >
              {item.icon ? (
                <>
                  <div className="flex items-center">
                    <i className={`${item.icon} text-2xl me-2`} />
                    <span>{item.label}</span>
                    {item.label === "Languge" && (
                      <span className="ms-8 mt-10 absolute text-xs text-slate-700 font-thin">
                        English
                      </span>
                    )}
                  </div>
                  {item.submenu && <i className="fa fa-chevron-right" />}
                </>
              ) : (
                <>
                  <span>{item.label}</span>
                  {item.submenu && <i className="fa fa-chevron-right" />}
                </>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Hamburger;
