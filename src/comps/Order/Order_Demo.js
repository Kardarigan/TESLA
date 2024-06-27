import { Splide, SplideSlide } from "@splidejs/react-splide";

const Order_Demo = ({ car }) => {
  return (
    <section className="h-full bg-slate-50">
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
              <img src={item} alt={index} />
            </SplideSlide>
          );
        })}
      </Splide>
    </section>
  );
};

export default Order_Demo;
