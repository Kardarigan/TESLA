import { Link } from "react-router-dom";

const Button = ({ to, label, light = false, customClass }) => {
    const typeClasses = light ? "text-slate-600 button bg-slate-100 bg-gradient-to-br hover:bg-slate-200" : "text-slate-200 button bg-gray-700 bg-gradient-to-br hover:bg-slate-600";
    const buttonClass = `transition duration-200 lg:text-sm text-center bg-opacity-80 hover:bg-opacity-90 text-[10px] rounded md:w-auto inline-block w-full px-10 py-3 ${typeClasses}`;

    return (
        <Link to={to} className={`${buttonClass} ${customClass}`}>
            {label}
        </Link>
    );
};

export default Button;