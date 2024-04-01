import React from "react";
import { Link } from "react-router-dom";
import { footLinks } from "../constants";
import Button from "./Button"
import Background from "../assets/Cybertruck-Second-Hero-Desktop.jpg"

const Footer = () => {
    return (
        <footer className="w-full flex flex-col justify-between min-h-[50vh] bg-fullcenter" style={{ backgroundImage: "url(" + Background + ")" }}>
            <div className="text-center padding">
                <h2 className="text-slate-100 font-semibold md:text-4xl text-2xl">Join to the Tesla's Family</h2>
                <Button to="/" label="Choose Yours" customClass="mt-3" />
            </div>

            <ul className="pb-3 mx-auto font-thin text-center grid md:grid-cols-7 sm:grid-cols-2 gap-4 text-slate-100 text-sm">
                {footLinks.map((item) => {
                    return (
                        <li className="">
                            <Link to={item.href}>{item.label}</Link>
                        </li>
                    )
                })}
            </ul>
        </footer>
    );
};

export default Footer;
