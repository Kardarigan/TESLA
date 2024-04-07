import React from "react";
import { vehicles } from "../../../constants";
import { Learn_Inter_Slide } from "../../Portal";
import { Splide } from "@splidejs/react-splide";

const Learn_Inter = (props) => {
  const { car } = props;

  return (
    <div className="padding sectionSplide">
      <Splide
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
        }}
      >
        {car.interiorSlides.map((slide) => {
          return (
            <Learn_Inter_Slide
              image={slide.image}
              title={slide.title}
              describe={slide.describe}
            />
          );
        })}
        <div className="md:block hidden splide__progress">
          <div className="splide__progress__bar" />
        </div>
      </Splide>
    </div>
  );
};

export default Learn_Inter;
