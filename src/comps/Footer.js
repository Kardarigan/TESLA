import { Link } from "react-router-dom";
import { footLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="shadowFromBottom w-full absolute bottom-0 text-slate-100 mix-blend-exclusion text-xs text-center z-20">
      <ul className="pb-3 mx-auto md:w-4/5 grid md:grid-cols-4 grid-cols-2 gap-4">
        {footLinks.map((item) => {
          return (
            <li key={item}>
              <Link to={item.href}>{item.label}</Link>
            </li>
          );
        })}
      </ul>
      <p className="pt-3 pb-2">
        <Link to="/about">Tesla © 2024</Link>
      </p>
    </footer>
  );
};

export default Footer;
