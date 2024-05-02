import React, { useState } from "react";
import { Ham_Menu, Ham_Submenu } from "../Portal";

const Hamburger = ({ closeHam }) => {
  const handleClick = (items) => {
    if (items) {
      setCurrentMenu(<Ham_Submenu items={items} />);
    } else {
      setCurrentMenu(<Ham_Menu handleClick={handleClick} />);
    }
  };

  const [currentMenu, setCurrentMenu] = useState(
    <Ham_Menu handleClick={handleClick} />
  );

  const clickBack = () => {
    setCurrentMenu(<Ham_Menu handleClick={handleClick} />);
  };

  return (
    <div className="px-6 py-2">
      <div className="flex justify-between">
        {currentMenu !== <Ham_Menu /> && (
          <button className="navitem w-[48px] text-2xl" onClick={clickBack}>
            Back
          </button>
        )}
        <button className="navitem w-[48px] text-2xl" onClick={closeHam}>
          <i className="fa-light fa-xmark" />
        </button>
      </div>
      <div className="mt-1">{currentMenu}</div>
    </div>
  );
};

export default Hamburger;
