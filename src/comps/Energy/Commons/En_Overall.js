import Button from "../../Button";

const En_Overall = ({ title, descrbie, link, label }) => {
  return (
    <section className="fullSection padding">
      <div className="md:w-2/5 text-center">
        <h3 className="title">{title}</h3>
        <p className="py-2">{descrbie}</p>
        <Button to={link} label={label} outline="light" />
      </div>
    </section>
  );
};

export default En_Overall;
