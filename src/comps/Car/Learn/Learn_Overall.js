import Button from "../../Button";

const Learn_Overall = ({ title, message, image, orderLink, light = false }) => {
  return (
    <section className={`padding ${light && "bg-slate-50 text-slate-950"}`}>
      <div className="grid md:grid-cols-2 gap-5">
        <div className="padding-x pt-20">
          <h2 className="sm:text-4xl text-2xl">{title}</h2>
          <p>
            Design yours or get a trade-in estimate for your current vehicle.
          </p>
          <div className="flex sm:flex-row flex-col mt-12">
            <Button
              to={orderLink}
              label="Custom Order"
              outline={light ? "dark" : "light"}
              customClass="me-2 sm:mb-0 mb-2"
            />
            {light ? (
              <Button to="/" label="Get an Estimate" light />
            ) : (
              <Button to="/" label="Get an Estimate" />
            )}
          </div>
        </div>
        <div>
          <img src={image} alt={title} />
        </div>
      </div>
      <p className="md:w-3/5 opacity-80 text-center text-sm mx-auto padding-x pt-24 pb-32">
        {message}
      </p>
    </section>
  );
};

export default Learn_Overall;
