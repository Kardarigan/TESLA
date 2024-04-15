import Button from "../../Button";

const En_Overall = ({ title, descrbie, link, label }) => {
  return (
    <section className="fullSection padding">
      <div className="md:w-2/5 text-center">
        <h3 className="md:text-3xl text-2xl font-bold">{title}</h3>
        <p className="pt-5 pb-3 md:text-sm">{descrbie}</p>
        <Button to={link} label={label} outline="light" />
      </div>
    </section>
  );
};

export default En_Overall;
