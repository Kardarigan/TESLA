import React from "react";

const From = ({ title }) => {
  return (
    <section className="flex max-md:flex-col-reverse">
      <div>
        <h2 className="title">{title}</h2>
      </div>
      <form>
        <label htmlFor=""></label>
      </form>
    </section>
  );
};

export default From;
