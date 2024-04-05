import { vehicles } from "../../constants";
import Button from "../Button";
const Ow_Cars = () => {
  return (
    <>
      {vehicles.map((car) => {
        return (
          <section
            className="fullSection"
            style={{ backgroundImage: " url(" + car.cover + ")" }}
          >
            <div className="text-center h-3/5 flex flex-col justify-between">
              <div>
                <h2>{car.model}</h2>
                <p>{car.subtitle}</p>
              </div>
              <div>
                <Button to={car.learnLink} label="Learn About" outline />
                <Button
                  to={car.orderLink}
                  label="Order Now"
                  customClass="md:mt-0 mt-2"
                  dark
                />
              </div>
            </div>
          </section>
        );
      })}
    </>
  );
};

export default Ow_Cars;
