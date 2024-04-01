import Cybertruck from '../assets/Mega-Menu-Vehicles-Cybertruck-1x.png'
import Model_Y from '../assets/Mega-Menu-Vehicles-Model-Y.png'
import Model_X from '../assets/Mega-Menu-Vehicles-Model-X.png'


export const navLinks = [
    { href: "./vehicles", label: "VEHICLE" },
    { href: "./energy", label: "ENERGY" },
    { href: "./charging", label: "CHARGING" },
    { href: "./discover", label: "DISCOVER" },
    { href: "./shop", label: "SHOP" },
]

export const navTools = [
    { href: "./guid", class: "fal fa-question-circle" },
    { href: "./language", class: "fal fa-globe" },
    { href: "./account", class: "fa-light fa-circle-user" },
]

export const footLinks = [
    { href: './about', label: 'Tesla © 2024' },
    { href: './privacy', label: 'Privacy & Legal' },
    { href: './recalls', label: 'Vehicle Recalls' },
    { href: './contact', label: 'Contact' },
    { href: './news', label: 'News' },
    { href: './updates', label: 'Get Updates' },
    { href: './locations', label: 'Locations' },
]

export const statistics = [
    { count: "+5M", label: "ACTIVE TESLAS" },
    { count: "+2M", label: "DOLLORS SOLD IN 2023" },
    { count: "+50K", label: "SUPERCHARGERS" },
    { count: "1st", label: "EV CARS RANK" }
]

export const heroSlides = [
    { title: "Electric Cars, Solar & Clean Energy. This is The Tesla", subtitle: "Discover which model is best for you based on your budget, driving habits and lifestyle.", image: Cybertruck, alt: "Cybertruck", link1: "/", link1_label: "Shop Available", link2: "/", link2_label: "Demo Drive" },
    { title: "Model Y Starting at $36,490 After Federal Tax Credit", subtitle: "Discover which model is best for you based on your budget, driving habits and lifestyle.", image: Model_Y, alt: "Model-Y", link1: "/", link1_label: "Demo Drive", link2: "/", link2_label: "Custom Order" },
    { title: "Find the Tesla for You", subtitle: "Discover which model is best for you based on your budget, driving habits and lifestyle.", image: Model_X, alt: "Model-X", link1: "/", link1_label: "Help Me Choose" },
]

export const homeVehicles = [
    { model: "Model X", path: "/", describe: "Something Truely Special" },
    { model: "Model 3", path: "/", describe: "Something Truely Special" },
    { model: "Model Y", path: "/", describe: "Something Truely Special" },
    { model: "Model S", path: "/", describe: "Something Truely Special" },
    { model: "Cybertruck", path: "/", describe: "Something Truely Special" }
]