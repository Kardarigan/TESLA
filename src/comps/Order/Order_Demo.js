import { Splide, SplideSlide } from "@splidejs/react-splide";

const Order_Demo = ({ car }) => {
  return (
    <section className="bg-slate-50 fixed w-2/3 h-full top-20">
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
        {car.order.demo.map((item, index) => {
          return (
            <SplideSlide>
              <img src={item} alt={index} className="bg-fullobject size-full" />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Order_Demo;
