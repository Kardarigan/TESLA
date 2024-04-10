import { Link } from "react-router-dom";

const Button = ({ to, label, light = false, outline = false, customClass }) => {
  let typeClasses;

  if (outline === "light") {
    typeClasses =
      "text-slate-100 bg-transparent fakeBorderLight hover:bg-slate-50 hover:text-slate-800";
  } else if (outline === "dark") {
    typeClasses =
      "text-slate-900 bg-transparent fakeBorderDark hover:bg-slate-900 hover:text-slate-200";
  } else {
    typeClasses = light
      ? "text-slate-800 bg-slate-200 bg-opacity-70 hover:bg-opacity-80"
      : "text-slate-200 bg-slate-700 bg-opacity-70 hover:bg-opacity-80";
  }

  const buttonClass = `transition duration-200 lg:text-sm text-center font-semibold backdrop-blur-sm text-[12px] rounded md:w-auto inline-block w-full px-10 py-2 ${typeClasses}`;

  return (
    <Link to={to} className={`${buttonClass} ${customClass}`}>
      {label}
    </Link>
  );
};

export default Button;
