import { useEffect, useState } from "react";

const Free_slider = ({ prod, dark = false }) => {
  const [showModel, setShowModel] = useState(0);
  const [sliderHeight, setSliderHeight] = useState(0);
  const [duration, setDuration] = useState(1000);

  useEffect(() => {
    const interval = setInterval(() => {
      setShowModel((showModel) => (showModel + 1) % prod.length);
    }, duration);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const modelSlide = document.querySelector(".modelSlide");
    if (modelSlide) {
      setSliderHeight(modelSlide.offsetHeight);
    }
  }, [prod]);

  const demoButton = Array.from(
    document.getElementsByClassName("demoDriveButton")
  );

  demoButton.forEach((button, index) => {
    button.addEventListener("click", () => {
      setShowModel(index);
    });
  });

  return (
    <section className={`padding ${!dark && "bg-slate-50 text-slate-950"}`}>
      <div style={{ height: `${sliderHeight}px` }} className="relative">
        {prod.map((item, index) => {
          return (
            <div
              key={index}
              className={`absolute modelSlide transition-all duration-500 ${
                showModel === index ? "opacity-100" : "opacity-0"
              }`}
              data-splide-interval={item.duration}
            >
              {item.cover.endsWith(".mp4") || item.cover.endsWith(".webm") ? (
                <video
                  autoPlay
                  muted
                  loop
                  className="bg-fullobject w-full rounded"
                >
                  <source
                    src={item.cover}
                    type={`video/${item.cover.split(".").pop()}`}
                  />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={item.cover}
                  alt={item.title}
                  className="bg-fullobject w-full rounded"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="flex padding-x py-5 gap-x-8 mx-auto">
        {prod.map((item, index) => {
          return (
            <div
              onClick={() => setShowModel(index)}
              className={`border-t-2 px-1 pt-3 transition-all cursor-pointer ${
                dark ? "border-slate-100" : "border-slate-900"
              } ${showModel === index ? "opacity-100" : "opacity-45"}`}
            >
              <h5 className={`${item.describe ? "text-xl" : "text-sm"}`}>
                {item.title}
              </h5>
              {item.describe && <p className="mt-3 text-xs">{item.describe}</p>}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Free_slider;
