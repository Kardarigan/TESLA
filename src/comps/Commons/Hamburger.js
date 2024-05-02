import { useState } from "react";
import { Ham_Menu } from "../Portal";

const Hamburger = ({ closeHam }) => {
  const [currentMenu, setCurrentMenu] = useState(<Ham_Menu />);

  return (
    <div className="px-6 py-2">
      <div className="text-end">
        <button className="navitem w-[48px] text-2xl" onClick={closeHam}>
          <i className="fa-light fa-xmark" />
        </button>
      </div>
      <div className="mt-1">{currentMenu}</div>
    </div>
  );
};

export default Hamburger;
