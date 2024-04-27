import { useEffect, useState } from "react";

const Free_slider = ({ prod, dark = false, duretion = 3000 }) => {
  const [showModel, setShowModel] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setShowModel((showModel) => (showModel + 1) % prod.length);
    }, duretion);

    return () => clearInterval(interval);
  }, []);

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
      <div className="relative  h-[60vw]">
        {prod.map((ability, index) => {
          return (
            <div
              key={index}
              className={`absolute modelSlide h-auto transition-all duration-500 ${
                showModel === index ? "opacity-100" : "opacity-0"
              }`}
              data-splide-interval={ability.duration}
            >
              {ability.cover.endsWith(".mp4") ||
              ability.cover.endsWith(".webm") ? (
                <video
                  autoPlay
                  muted
                  loop
                  className="bg-fullobject w-full rounded"
                >
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
            </div>
          );
        })}
      </div>

      <div className="flex padding-x py-5 gap-x-8 mx-auto">
        {prod.map((ability, index) => {
          return (
            <div
              onClick={() => setShowModel(index)}
              className={`border-t-2 px-1 pt-3 transition-all cursor-pointer ${
                dark ? "border-slate-100" : "border-slate-900"
              } ${showModel === index ? "opacity-100" : "opacity-45"}`}
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
