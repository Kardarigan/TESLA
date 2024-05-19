import { Link } from "react-router-dom";
import { footLinks } from "../../constants";

const Footer = () => {
  return (
    <footer className="shadowFromBottom w-full absolute bottom-0 text-slate-100 mix-blend-exclusion text-xs text-center z-20">
      <ul className="pb-3 mx-auto md:w-3/5 grid md:grid-cols-5 grid-cols-2 gap-4">
        {footLinks.map((item) => {
          return (
            <li key={item}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
    </footer>
  );
};

export default Footer;
