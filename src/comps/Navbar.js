import { Link } from "react-router-dom";
import { navLinks, navTools } from "../constants";
import Dropdown from "./Dropdown";
import { useState } from "react";
const Navbar = () => {
  const [navOver, setNavOver] = useState(false);
  const [currentItem, setCurrentItem] = useState(null);
  const dropdown = document.querySelectorAll(".dropdownContainer");

  const handleMouseOver = (item) => {
    setNavOver(true);
    for (var i = 0; i < dropdown.length; i += 1) {
      if ((dropdown[i].style.display = "none")) {
        dropdown[i].style.display = "block";
      }
    }
    if (!currentItem) {
      setCurrentItem(item);
    }
  };
  const handleMouseOut = (event) => {
    if (!event.relatedTarget || !event.relatedTarget.closest("nav")) {
      setNavOver(false);
      setTimeout(() => {
        for (var i = 0; i < dropdown.length; i += 1) {
          if (dropdown[i] && dropdown[i].style) {
            if (dropdown[i].style.display === "block" && !navOver) {
              dropdown[i].style.display = "none";
            }
          }
        }
      }, 500);
    }
  };

  return (
    <header className="absolute w-full z-50" onClick={handleMouseOut}>
      <nav
        className={`padding-x py-3 w-full z-10 flex-seperate text-slate-50 relative shadowFromTop transition-all ${
          navOver && "text-slate-950"
        }`}
        onMouseOut={handleMouseOut}
      >
        <Link to="/" className="z-50">
          <svg
            class="tds-icon tds-icon-logo-wordmark tds-site-logo-icon"
            width={130}
            viewBox="0 0 342 35"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0 .1a9.7 9.7 0 0 0 7 7h11l.5.1v27.6h6.8V7.3L26 7h11a9.8 9.8 0 0 0 7-7H0zm238.6 0h-6.8v34.8H263a9.7 9.7 0 0 0 6-6.8h-30.3V0zm-52.3 6.8c3.6-1 6.6-3.8 7.4-6.9l-38.1.1v20.6h31.1v7.2h-24.4a13.6 13.6 0 0 0-8.7 7h39.9v-21h-31.2v-7h24zm116.2 28h6.7v-14h24.6v14h6.7v-21h-38zM85.3 7h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 13.8h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zm0 14.1h26a9.6 9.6 0 0 0 7.1-7H78.3a9.6 9.6 0 0 0 7 7zM308.5 7h26a9.6 9.6 0 0 0 7-7h-40a9.6 9.6 0 0 0 7 7z"
              fill="currentColor"
            ></path>
          </svg>
        </Link>
        <ul className="lg:flex hidden gap-4 ps-4">
          {navLinks.map((item, index) => {
            return (
              <>
                <li key={index} className="z-50">
                  <Link
                    to={item.href}
                    className={`navitem ${navOver && "hover"}`}
                    onMouseOver={() => {
                      handleMouseOver(item);
                      setCurrentItem(item);
                    }}
                  >
                    {item.label}
                  </Link>
                </li>
                <div className="dropdownContainer absolute w-full max-h-[500px] top-0 left-0">
                  {currentItem &&
                    (currentItem.label === "DISCOVER" ? (
                      <Dropdown
                        className={
                          navOver
                            ? "top-0 opacity-100"
                            : "top-[-200px]  opacity-0"
                        }
                        links={currentItem.links}
                        discover
                      />
                    ) : (
                      <Dropdown
                        className={
                          navOver
                            ? "top-0 opacity-100"
                            : "top-[-200px]  opacity-0"
                        }
                        prods={currentItem.products}
                        links={currentItem.links}
                      />
                    ))}
                </div>
              </>
            );
          })}
        </ul>
        <div className="lg:flex hidden justify-center w-[130px]">
          {navTools.map((item, index) => {
            return (
              <Link
                to={item.href}
                key={index}
                className="navitem text-xl px-2 py-1 z-50"
              >
                <i class={item.class} />
              </Link>
            );
          })}
        </div>
        <button className="lg:hidden block transition text-sm font-semibold rounded px-3 py-2  bg-opacity-10 bg-slate-500 backdrop-blur-sm">
          <span>MENU</span>
        </button>
      </nav>
    </header>
  );
};

export default Navbar;
