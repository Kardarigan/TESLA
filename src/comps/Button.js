import { Link } from "react-router-dom";

const Button = ({ to, label, light = false, outline = false, customClass }) => {
  let typeClasses;

  if (outline === "light") {
    typeClasses =
      "text-slate-100 bg-transparent border-2 border-slate-100 hover:bg-slate-100 hover:text-slate-800";
  } else if (outline === "dark") {
    typeClasses =
      "text-slate-900 bg-transparent border-2 border-slate-900 hover:bg-slate-900 hover:text-slate-200";
  } else {
    typeClasses = light
      ? "text-slate-800 bg-slate-200 border-2 border-slate-200"
      : "text-slate-200 bg-slate-700 border-2 border-slate-700";
  }

  const buttonClass = `transition duration-200 lg:text-sm text-center font-semibold backdrop-blur-sm bg-opacity-70 border-opacity-70 hover:bg-opacity-80 hover:border-opacity-80 text-[12px] rounded md:w-auto inline-block w-full px-10 py-2 ${typeClasses}`;

  return (
    <Link to={to} className={`${buttonClass} ${customClass}`}>
      {label}
    </Link>
  );
};

export default Button;
