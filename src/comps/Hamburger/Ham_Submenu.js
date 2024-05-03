import { Link } from "react-router-dom";

const Ham_Submenu = ({ title, items }) => {
  return (
    <>
      <h4 className="absolute w-full text-center top-[18px]">{title}</h4>
      <ul className="flex flex-col gap-4">
        {items.links.map((item, index) => {
          return (
            <li key={index}>
              <Link to="/" className="block navitem py-4">
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Ham_Submenu;
