import Cybertruck from "../assets/Mega-Menu-Vehicles-Cybertruck-1x.png";
import Model_Y from "../assets/Mega-Menu-Vehicles-Model-Y.png";
import Model_X from "../assets/Mega-Menu-Vehicles-Model-X.png";
import Ow_Model_S from "../assets/Overview/ModelS_71.jpg";
import Ow_Model_Y from "../assets/Overview/ModelY_58.jpg";
import Ow_Model_X from "../assets/Overview/ModelX_93.jpg";
import Ow_Model_3 from "../assets/Overview/Model3-67.jpg";
import Ow_Cybertruck from "../assets/Overview/Cybertruck_63.jpg";

import Slide_1_3 from "../assets/Single/S/Slide_Model3_1.jpg";
import Slide_2_3 from "../assets/Single/S/Slide_Model3_2.jpg";
import Slide_3_3 from "../assets/Single/S/Slide_Model3_3.jpg";
import Interios_3 from "../assets/Single/S/Interior_Model3.jpg.jpg";
import Inter_Slide_1_3 from "../assets/Single/S/InteriorSlide_Model3_1.jpg";
import Inter_Slide_2_3 from "../assets/Single/S/InteriorSlide_Model3_2.jpg";
import Inter_Slide_3_3 from "../assets/Single/S/InteriorSlide_Model3_3.jpg";
import Inter_Slide_4_3 from "../assets/Single/S/InteriorSlide_Model3_4.jpg";
import Amenity_1_3 from "../assets/Single/S/MS-Interior-Grid-A-Desktop.avif";
import Amenity_2_3 from "../assets/Single/S/MS-Interior-Grid-2-Audio-Desktop.webm";
import Amenity_3_3 from "../assets/Single/S/MS-Interior-Grid-D-Desktop.avif";
import Road_3 from "../assets/Single/S/Road_Model3.jpg";

export const navLinks = [
  { href: "./vehicles", label: "VEHICLE" },
  { href: "./energy", label: "ENERGY" },
  { href: "./charging", label: "CHARGING" },
  { href: "./discover", label: "DISCOVER" },
  { href: "./shop", label: "SHOP" },
];

export const navTools = [
  { href: "./guid", class: "fal fa-question-circle" },
  { href: "./language", class: "fal fa-globe" },
  { href: "./account", class: "fa-light fa-circle-user" },
];

export const footLinks = [
  { href: "./privacy", label: "Privacy & Legal" },
  { href: "./recalls", label: "Vehicle Recalls" },
  { href: "./contact", label: "Contact" },
  { href: "./news", label: "News" },
  { href: "./updates", label: "Get Updates" },
  { href: "./locations", label: "Locations" },
];

export const statistics = [
  { count: "+5M", label: "ACTIVE TESLAS" },
  { count: "+2M", label: "DOLLORS SOLD IN 2023" },
  { count: "+50K", label: "SUPERCHARGERS" },
  { count: "1st", label: "EV CARS RANK" },
];

export const heroSlides = [
  {
    title: "Electric Cars, Solar & Clean Energy. This is The Tesla",
    subtitle:
      "Discover which model is best for you based on your budget, driving habits and lifestyle.",
    image: Cybertruck,
    alt: "Cybertruck",
    link1: "/",
    link1_label: "Shop Available",
    link2: "/",
    link2_label: "Demo Drive",
  },
  {
    title: "Model Y Starting at $36,490 After Federal Tax Credit",
    subtitle:
      "Discover which model is best for you based on your budget, driving habits and lifestyle.",
    image: Model_Y,
    alt: "Model-Y",
    link1: "/",
    link1_label: "Demo Drive",
    link2: "/",
    link2_label: "Custom Order",
  },
  {
    title: "Find the Tesla for You",
    subtitle:
      "Discover which model is best for you based on your budget, driving habits and lifestyle.",
    image: Model_X,
    alt: "Model-X",
    link1: "/",
    link1_label: "Help Me Choose",
  },
];

export const vehicles = [
  {
    model: "Model X",
    subtitle: "Affortable But Special",
    orderLink: "/model x/order",
    learnLink: "/model x/learn",
    cover: Ow_Model_3,
    slidesbg: [
      {
        bg: Slide_1_3,
        title: "Reengineered",
        subtitle: "Lease starting at $329/mo*",
      },
      {
        bg: Slide_2_3,
        title: "Reengineered",
        subtitle: "Lease starting at $329/mo*",
      },
      {
        bg: Slide_3_3,
        title: "Reengineered",
        subtitle: "Lease starting at $329/mo*",
      },
    ],
    saving:
      "*Price before savings is $74,990, excluding taxes and fees. Subject to change.",
    interImage: Interios_3,
    interior: {
      topImage: Interios_3,
      slides: [
        {
          image: Inter_Slide_1_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_2_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_3_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_4_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
      ],
    },
    amenities: [
      {
        image: Amenity_1_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_2_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_3_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
    ],
    roadImage: Road_3,
    range: 326,
    mph060: 3.99,
    peakPower: 1020,
  },
  {
    model: "Model 3",
    subtitle: "Big Fast Dude",
    orderLink: "/model 3/order",
    learnLink: "/model 3/learn",
    cover: Ow_Model_Y,
    slidesbg: [Slide_1_3, Slide_2_3, Slide_3_3],
    saving:
      "*Price before savings is $74,990, excluding taxes and fees. Subject to change.",
    interImage: Interios_3,
    interior: {
      topImage: Interios_3,
      slides: [
        {
          image: Inter_Slide_1_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_2_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_3_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_4_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
      ],
    },
    amenities: [
      {
        image: Amenity_1_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_2_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_3_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
    ],
    roadImage: Road_3,
    range: 326,
    mph060: 3.99,
    peakPower: 1020,
  },
  {
    model: "Model Y",
    subtitle: "Speed for Miles",
    orderLink: "/model y/order",
    learnLink: "/model y/learn",
    cover: Ow_Model_S,
    slidesbg: [Slide_1_3, Slide_2_3, Slide_3_3],
    saving:
      "*Price before savings is $74,990, excluding taxes and fees. Subject to change.",
    interImage: Interios_3,
    interior: {
      topImage: Interios_3,
      slides: [
        {
          image: Inter_Slide_1_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_2_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_3_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_4_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
      ],
    },
    amenities: [
      {
        image: Amenity_1_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_2_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_3_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
    ],
    roadImage: Road_3,
    range: 326,
    mph060: 3.99,
    peakPower: 1020,
  },
  {
    model: "Model S",
    subtitle: "Big Boss",
    orderLink: "/model s/order",
    learnLink: "/model s/learn",
    cover: Ow_Model_X,
    slidesbg: [Slide_1_3, Slide_2_3, Slide_3_3],
    saving:
      "*Price before savings is $74,990, excluding taxes and fees. Subject to change.",
    interImage: Interios_3,
    interior: {
      topImage: Interios_3,
      slides: [
        {
          image: Inter_Slide_1_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_2_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_3_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_4_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
      ],
    },
    amenities: [
      {
        image: Amenity_1_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_2_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_3_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
    ],
    roadImage: Road_3,
    range: 326,
    mph060: 3.99,
    peakPower: 1020,
  },
  {
    model: "Cybertruck",
    subtitle: "Not Just for Earth",
    orderLink: "/cybertruck/order",
    learnLink: "/cybertruck/learn",
    cover: Ow_Cybertruck,
    slidesbg: [Slide_1_3, Slide_2_3, Slide_3_3],
    saving:
      "*Price before savings is $74,990, excluding taxes and fees. Subject to change.",
    interImage: Interios_3,
    interior: {
      topImage: Interios_3,
      slides: [
        {
          image: Inter_Slide_1_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_2_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_3_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
        {
          image: Inter_Slide_4_3,
          title: "Cinematic Experience",
          describe:
            "A 17” touchscreen with left-right tilt offers 2200 x 1300 resolution, true colors and exceptional responsiveness for gaming, movies and more.",
        },
      ],
    },
    amenities: [
      {
        image: Amenity_1_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_2_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
      {
        image: Amenity_3_3,
        title: "Stay Connected",
        describe:
          "Instantly connect with multi-device Bluetooth, or fast charge devices with wireless and 36-watt USB-C charging.",
      },
    ],
    roadImage: Road_3,
    range: 326,
    mph060: 3.99,
    peakPower: 1020,
  },
];
