import { SplideSlide } from "@splidejs/react-splide";

const Learn_Inter_Slide = ({ image, title, describe }) => {
  return (
    <SplideSlide>
      <section className="min-h-screen w-full bg-fullcenter">
        <img
          className="bg-fullobject w-full rounded h-[80vh]"
          src={image}
          alt={title}
        />
        <div className="mt-20 max-w-56">
          <h3 className="text-xl">{title}</h3>
          <p>{describe}</p>
        </div>
      </section>
    </SplideSlide>
  );
};
export default Learn_Inter_Slide;
