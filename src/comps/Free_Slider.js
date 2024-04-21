import { Splide, SplideSlide } from "@splidejs/react-splide";
import React, { useEffect } from "react";

const Free_slider = ({ prod, dark = false }) => {
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
    <section className={`padding ${!dark && "bg-slate-50 text-slate-950"}`}>
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
        {prod.map((ability, index) => {
          return (
            <SplideSlide
              data-splide-interval={ability.duration}
              data-tabcontent={`tabAutopilot_${index}`}
            >
              {ability.cover.endsWith(".mp4") ||
              ability.cover.endsWith(".webm") ? (
                <video muted loop className="bg-fullobject w-full rounded">
                  <source
                    src={ability.cover}
                    type={`video/${ability.cover.split(".").pop()}`}
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={ability.cover}
                  alt={ability.title}
                  className="bg-fullobject w-full rounded"
                />
              )}
            </SplideSlide>
          );
        })}
      </Splide>

      <div className="flex padding-x py-5 gap-x-8 mx-auto">
        {prod.map((ability, index) => {
          return (
            <div
              className={`border-t-2 px-1 pt-3 ${
                dark ? "border-slate-100" : "border-slate-900"
              }`}
              data-tabbutton={`tabAutopilot_${index}`}
              onClick={() => handleTabClick(`tabAutopilot_${index}`)}
            >
              <h5 className={`${ability.describe ? "text-xl" : "text-sm"}`}>
                {ability.title}
              </h5>
              {ability.describe && (
                <p className="mt-3 text-xs">{ability.describe}</p>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Free_slider;
