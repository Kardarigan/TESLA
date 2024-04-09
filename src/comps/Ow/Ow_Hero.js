import Background from "../../assets/Overviewpage-Group-83.jpg";
import Button from "../Button";

const Ow_Hero = () => {
  return (
    <section
      className="fullSection"
      style={{ backgroundImage: "url(" + Background + ")" }}
    >
      <div className="text-center h-full">
        <div className="text-center flex flex-col justify-between">
          <div>
            <h1>Find Your Best, Then Customize It</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          </div>
          <div className="flex flex-col">
            <Button to="/inventory" label="View Invertory" />

            <p className="text-slate-300">
              You Can Also Check Out the Inventory To Find Already Made Vehicles
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ow_Hero;
