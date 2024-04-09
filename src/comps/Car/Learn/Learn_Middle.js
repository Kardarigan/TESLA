import Button from "../../Button";

const Learn_Middle = ({
  title = false,
  topic = false,
  describe = false,
  orderLink,
  inventoryLink,
  light = false,
}) => {
  if (title) {
    return (
      <section
        className={`padding-x py-8 flex ${
          light && "bg-slate-50 text-slate-950"
        }`}
      >
        <div className="lg:w-2/5 w-full lg:px-10">
          <h5>{topic}</h5>
          <h2 className="sm:text-4xl text-2xl mt-1 mb-3">{title}</h2>
          <p className="lg:hidden py-5">{describe}</p>
          <div className="md:flex lg:flex-col md:flex-row w-full">
            <Button
              to={orderLink}
              label="Order Now"
              customClass="sm:max-w-[220px] lg:my-3 sm:my-0 my-3"
              outline={light ? "dark" : "light"}
            />
            <Button
              to={inventoryLink}
              label="Veiw Inventory"
              customClass="sm:max-w-[220px] lg:ms-0 sm:ms-2"
              light
            />
          </div>
        </div>
        <p className="w-3/5 px-10 lg:block hidden">{describe}</p>
      </section>
    );
  }
};

export default Learn_Middle;
