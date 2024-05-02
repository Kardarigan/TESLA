import { useState } from "react";
import { hamburgerItems } from "../../constants";

const Ham_Menu = () => {
  const [submenu, setSubMenu] = useState(null);

  const handleClick = (items) => {
    setSubMenu(items);
  };

  return (
    <ul className="flex flex-col gap-4">
      {hamburgerItems.map((item, index) => {
        return (
          <li
            className={`navitem py-4 ${item.submenu && "flex-seperate"}`}
            key={index}
          >
            {item.icon ? (
              <>
                <div
                  className="flex items-center"
                  onClick={item.submenu && handleClick(item.submenu)}
                >
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
  );
};

export default Ham_Menu;
