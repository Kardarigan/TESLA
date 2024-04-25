import React from "react";
import { Demo_Models } from "../comps/Portal";

const Demo = () => {
  return (
    <section className="max-w-[800px] mx-auto pt-32 padding">
      <h1 className="title">Schedule a Demo Drive</h1>
      <p className="text-xs my-3">Demo Drive a Tesla at a store near you.</p>
      <Demo_Models />
    </section>
  );
};

export default Demo;
