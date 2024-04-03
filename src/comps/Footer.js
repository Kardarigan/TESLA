import React from "react";
import { Link } from "react-router-dom";
import { footLinks } from "../constants";

const Footer = () => {
    return (
        <footer className="w-full absolute bottom-0 text-slate-100 text-sm font-thin text-center">
            <ul className="pb-3 mx-auto md:w-4/5 grid md:grid-cols-6 sm:grid-cols-2 gap-4">
                {footLinks.map((item) => {
                    return (
                        <li>
                            <Link to={item.href}>{item.label}</Link>
                        </li>
                    )
                })}
            </ul>
            <p className='py-3'><Link to='/about'>Tesla © 2024</Link></p>
        </footer>
    );
};

export default Footer;