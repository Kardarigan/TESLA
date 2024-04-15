import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect, useRef, useState } from "react";

const Pw_Home = ({ pw }) => {
  const videoSlide = document.getElementsByClassName("splide__slide");

  useEffect(() => {
    const intervalId = setInterval(() => {
      for (let i = 0; i < videoSlide.length; i++) {
        if (videoSlide[i] && videoSlide[i].classList.contains("is-visible")) {
          const video = videoSlide[i].querySelector("video");
          if (video && video.paused && document.hasFocus()) {
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
    }, 50);

    return () => clearInterval(intervalId);
  }, []);

  const handleTabClick = (tabId) => {
    const videoSlide = document.querySelector(`[data-tabcontent="${tabId}"]`);
    if (videoSlide && !videoSlide.classList.contains("is-visible")) {
      const visibleVideoSlide = document.querySelector(
        ".splide__slide.is-visible"
      );
      if (visibleVideoSlide) {
        const video = visibleVideoSlide.querySelector("video");
        if (video) {
          video.pause();
          video.currentTime = 0;
        }
        visibleVideoSlide.classList.remove("is-visible", "is-active");
      }
      videoSlide.classList.add("is-visible", "is-active");
      const video = videoSlide.querySelector("video");
      if (video) {
        video.play();
      }
    }
  };

  return (
    <section className="padding">
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
        {pw.map((ability, index) => {
          return (
            <SplideSlide
              data-splide-interval={ability.duration}
              data-tabcontent={`tabAutopilot_${index}`}
            >
              <video muted loop className="bg-fullobject w-full">
                <source
                  src={ability.video}
                  type={`video/${ability.video.split(".").pop()}`}
                />
                Your browser does not support the video tag.
              </video>
            </SplideSlide>
          );
        })}
      </Splide>

      <div className="flex padding-x py-12 gap-x-8 mx-auto">
        {pw.map((ability, index) => {
          return (
            <div
              className="w-1/4 border-t-2 border-slate-100 pt-3"
              data-tabbutton={`tabAutopilot_${index}`}
              onClick={() => handleTabClick(`tabAutopilot_${index}`)}
            >
              <h5 className="text-sm">{ability.title}</h5>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Pw_Home;
