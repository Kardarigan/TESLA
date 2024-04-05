import { Splide } from "@splidejs/react-splide";
import Learn_Slide from "../Learn/Learn_Slide";
import { vehicles } from "../../../constants";

const Learn_Hero = (props) => {
  const { car } = props;
  const carSlides = vehicles.find(
    (vehicle) => vehicle.model === car.model
  ).slides;

  return (
    <section className="h-screen flex-centralizer">
      <div className="w-full">
        <Splide
          aria-label={`${car.model} hero slider`}
          options={{
            type: "fade",
            rewind: true,
            autoplay: true,
            arrows: false,
          }}
        >
          {carSlides.map((slide) => {
            return (
              <Learn_Slide
                key={slide.title}
                model={car.model}
                title={slide.title}
                subtitle={slide.subtitle}
                backgournd={slide.bg}
                to={car.orderLink}
              />
            );
          })}
          <div className="md:block hidden splide__progress">
            <div className="splide__progress__bar" />
          </div>
        </Splide>
      </div>
    </section>
  );
};

export default Learn_Hero;
