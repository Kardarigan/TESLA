import { Select_Price } from "../Portal";

const Order_Options = ({ car }) => {
  return (
    <section className="p-5 text-center">
      <h2 className="title-lg">{car.model}</h2>
      <p className="para my-3 text-slate-300">
        Estimated Delivery: {car.order.estimated}
      </p>
      <div className="flex-fullcenter">
        <i className="fa-solid fa-circle-info text-blue-500 me-1" />
        <p className="link para text-slate-200">Enter Postal Code</p>
      </div>
      <div className="my-3 grid grid-cols-3">
        {car.numbers.map((item, index) => {
          if (index != 2) {
            return (
              <div>
                <h3 className="md:text-lg text-base">
                  {item.value}
                  <span className="md:text-[10px] text-[8px]">{item.unit}</span>
                </h3>
                <p className="md:text-[10px] text-[8px]">{item.key}</p>
              </div>
            );
          }
        })}
      </div>
      <Select_Price />
    </section>
  );
};

export default Order_Options;
