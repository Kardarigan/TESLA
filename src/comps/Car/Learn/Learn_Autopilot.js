import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useRef } from "react";

const Learn_Autopilot = (props) => {
  const { car } = props;
  const carAutopilot = car.autoPilot.features;

  const videoSlide = document.getElementsByClassName("splide__slide");

  useEffect(() => {
    const intervalId = setInterval(() => {
      for (let i = 0; i < videoSlide.length; i++) {
        if (videoSlide[i] && videoSlide[i].classList.contains("is-visible")) {
          const video = videoSlide[i].querySelector("video");
          if (video) {
            video.play();
          }
        } else {
          const video = videoSlide[i].querySelector("video");
          if (video) {
            video.pause();
            video.currentTime = 0;
          }
        }
      }
    }, 50000000000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <section className="padding bg-slate-50 text-slate-950">
      <div className="padding-x">
        <h2 className="md:text-3xl text-xl mb-5">Features</h2>
        <p>{carAutopilot.describe}</p>
      </div>

      <Splide
        aria-label="Power Train"
        options={{
          type: "fade",
          rewind: true,
          autoplay: true,
          arrows: false,
          pagination: false,
        }}
      >
        {carAutopilot.items.map((feature) => {
          return (
            <SplideSlide data-splide-interval={feature.duration}>
              <video loop className="bg-fullobject w-full">
                <source
                  src={feature.video}
                  type={`video/${feature.video.split(".").pop()}`}
                />
                Your browser does not support the video tag.
              </video>
            </SplideSlide>
          );
        })}
      </Splide>

      <div className="lg:w-4/5 flex padding-x py-4 gap-x-3 mx-auto">
        {carAutopilot.items.map((model) => {
          return (
            <div className="w-1/4 border-t-2 border-slate-900 pt-3">
              <h5 className="text-xl">{model.title}</h5>
              <p className="text-sm pt-5">{model.describe}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Learn_Autopilot;
