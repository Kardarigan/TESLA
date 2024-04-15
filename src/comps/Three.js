import React from "react";

const Three = ({ items, cover }) => {
  return (
    <section
      className="fullSection"
      style={{ backgroundImage: "url(" + cover + ")" }}
    >
      <ul className="padding flex md:flex-col flex-row md:text-start text-center size-full justify-between">
        {items.map((item, index) => {
          console.log(item.icon);
          return (
            <li key={index}>
              <div className="md:text-4xl text-xl">
                {item.title ? (
                  <h3>
                    {item.title}
                    <span className="md:text-base text-xs"> {item.unit}</span>
                  </h3>
                ) : (
                  <i className={item.icon} />
                )}
              </div>
              <p className="sm:text-sm text-xs">{item.sub}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Three;
