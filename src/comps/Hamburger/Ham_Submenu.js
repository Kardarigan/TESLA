import { Link } from "react-router-dom";

const Ham_Submenu = ({ items }) => {
  return (
    <ul className="flex flex-col gap-4">
      {items.map((item, index) => {
        return (
          <li key={index}>
            <Link to="/" className="block navitem py-4">
              <span>{item.label}</span>
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Ham_Submenu;
