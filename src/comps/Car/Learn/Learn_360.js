import Cover from "../../../assets/Autopilot/360.jpg";
import { vision360 } from "../../../constants";

const Learn_360 = () => {
  return (
    <section
      className="fullSection"
      style={{ backgroundImage: "url(" + Cover + ")" }}
    >
      <ul className="padding flex md:flex-col flex-row md:text-start text-center size-full justify-between">
        {vision360.map((item, index) => {
          return (
            <li key={index}>
              <h3 className="md:text-4xl text-xl">
                {item.title ? item.title : <i className="fal fa-webcam" />}
                {item.unit && <span className="text-base"> {item.unit}</span>}
              </h3>
              <p className="sm:text-sm text-xs">{item.sub}</p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Learn_360;
