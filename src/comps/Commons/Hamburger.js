import React, { useState } from "react";
import { Ham_Menu, Ham_Submenu } from "../Portal";

const Hamburger = ({ closeHam }) => {
  const handleClick = (title, items) => {
    if (items) {
      setCurrentMenu(<Ham_Submenu title={title} items={items} />);
    } else {
      setCurrentMenu(<Ham_Menu handleClick={handleClick} />);
    }
  };

  const [currentMenu, setCurrentMenu] = useState(
    <Ham_Menu handleClick={handleClick} />
  );
  const isHamSubmenu = currentMenu.type === Ham_Submenu;
  const clickBack = () => {
    setCurrentMenu(<Ham_Menu handleClick={handleClick} />);
  };

  return (
    <div className="px-6 py-2">
      <div
        className={`bg-slate-50 flex ${
          isHamSubmenu ? "justify-between" : "justify-end"
        }`}
      >
        {isHamSubmenu && (
          <button className="navitem w-[48px] text-xl" onClick={clickBack}>
            <i className="fal fa-chevron-left" />
          </button>
        )}
        <button className="navitem w-[48px] text-2xl" onClick={closeHam}>
          <i className="fa-light fa-xmark" />
        </button>
      </div>
      <div className="mt-2">{currentMenu}</div>
    </div>
  );
};

export default Hamburger;
