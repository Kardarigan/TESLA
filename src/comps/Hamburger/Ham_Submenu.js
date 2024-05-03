import { Link } from "react-router-dom";

const Ham_Submenu = ({ title, items }) => {
  return (
    <>
      <h4 className="w-20 mx-auto translate-y-[-45px] h-0 text-center">
        {title}
      </h4>

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
