import Background from "../../assets/Overviewpage-Group-83.jpg";
import Button from "../Button";

const Ow_Hero = () => {
  return (
    <section
      className="fullSection padding"
      style={{ backgroundImage: "url(" + Background + ")" }}
    >
      <div className="text-center h-full">
        <div className="text-center flex flex-col justify-between">
          <div>
            <h1>Find Your Best, Then Customize It</h1>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit</p>
          </div>
          <section className="xl:pt-60 lg:pt-44 md:pt-24 sm:pt-64 pt-72">
            <Button to="/inventory" label="View Invertory" light />
            <p className="max-w-[600px] mx-auto sm:text-sm text-xs pt-3">
              Lorem ipsum dolor sit amet consectetur, it amet consectetur,
              adipisicing elit ipsum id! Tenetur inventore earum maiores neque
              animi <u>et odit eligendi, sequi velit.</u>
            </p>
          </section>
        </div>
      </div>
    </section>
  );
};

export default Ow_Hero;
