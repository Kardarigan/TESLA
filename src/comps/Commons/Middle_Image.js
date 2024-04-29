import { Fadein, Button } from "../Portal";

const Middle_Image = ({
  topic,
  title,
  cover,
  describe,
  learnLink = false,
  orderLink = false,
  inventoryLink = false,
  contact = false,
  numbers = false,
  darkNumbers = false,
  right = false,
  pw = false,
}) => {
  return (
    <section
      className={`min-h-screen bg-slate-50 flex ${
        right ? "lg:flex-row-reverse" : "lg:flex-row"
      } flex-col-reverse`}
    >
      <div className="lg:w-1/3 text-slate-900">
        <div className="padding flex flex-col justify-between h-full">
          <div>
            <h2>{topic}</h2>
            <h3 className="title">{title}</h3>
            <p className="mt-4">{describe}</p>
          </div>
          <div>
            {learnLink && (
              <Button
                to={learnLink}
                label="Learn More"
                outline="dark"
                customClass="w-full mt-24 mb-3"
              />
            )}
            {orderLink && (
              <Button
                to={orderLink}
                label={pw ? "Get Powerwall" : "Order Now"}
                outline="dark"
                customClass="w-full mt-24 mb-3"
              />
            )}
            {inventoryLink && (
              <Button
                to={inventoryLink}
                label="View Inventory"
                light
                customClass="w-full mt-24 mb-3"
              />
            )}
            {contact && (
              <Button
                to="/callback"
                label="Contact"
                light
                customClass="w-full mt-24 mb-3"
              />
            )}
          </div>
        </div>
      </div>
      <div className="lg:w-2/3 relative">
        {cover.endsWith(".mp4") || cover.endsWith(".webm") ? (
          <video autoPlay muted loop className="bg-fullobject size-full">
            <source src={cover} type={`video/${cover.split(".").pop()}`} />
            Your browser does not support the video tag.
          </video>
        ) : (
          <img src={cover} alt={title} className="size-full bg-fullobject" />
        )}
        {numbers && (
          <div
            className={`absolute grid grid-cols-3 gap-x-5 mx-auto bottom-0 w-full padding-x pb-12 ${
              darkNumbers ? "text-slate-950" : "shadowFromBottom"
            }`}
          >
            {numbers.map((item) => {
              return (
                <Fadein>
                  <div className="text-center">
                    <h4 className="md:text-3xl text-xl">
                      {item.icon ? <i class={item.icon}></i> : item.value}
                      {item.unit && (
                        <span className="md:text-xl text-sm"> {item.unit}</span>
                      )}
                    </h4>
                    <p className="sm:text-[12px] text-[10px] mt-1">
                      {item.describe}
                    </p>
                  </div>
                </Fadein>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default Middle_Image;
