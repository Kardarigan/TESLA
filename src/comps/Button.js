import { Link } from "react-router-dom";

const Button = ({ to, label, light = false, outline = false, customClass }) => {
    const typeClasses = outline ? "text-slate-100 bg-transparent border-2 border-slate-100 hover:bg-slate-100 hover:text-slate-600" : light ? "text-slate-600 bg-slate-100" : "text-slate-200 bg-slate-700";
    const buttonClass = `transition duration-200 lg:text-sm text-center backdrop-blur-sm bg-opacity-70 hover:bg-opacity-80 text-[12px] rounded md:w-auto inline-block w-full px-10 py-3 ${typeClasses}`;

    return (
        <Link to={to} className={`${buttonClass} ${customClass}`}>
            {label}
        </Link>
    );
};

export default Button;