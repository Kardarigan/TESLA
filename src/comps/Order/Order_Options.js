import { Order_Paint, Select_Price } from "../Portal";

const Order_Options = ({ car }) => {
  return (
    <div className="p-5 text-center grid gap-y-32">
      <section className="grid gap-y-3">
        <h2 className="title-lg">{car.model}</h2>
        <p className="para  text-slate-300">
          Estimated Delivery: {car.order.estimated}
        </p>
        <div className="flex-fullcenter">
          <i className="fa-solid fa-circle-info text-blue-500 me-1" />
          <p className="link para text-slate-200">Enter Postal Code</p>
        </div>
        <div className=" grid grid-cols-3">
          {car.numbers.map((item, index) => {
            if (index != 2) {
              return (
                <div>
                  <h3 className="md:text-lg text-base">
                    {item.value}
                    <span className="para-sm">{item.unit}</span>
                  </h3>
                  <p className="para-sm">{item.key}</p>
                </div>
              );
            }
          })}
        </div>
        <Select_Price car={car.order} />
        <p className="para-sm my-5">
          * Costs above include potential incentives and gas savings of $10,100.
        </p>
        <button className="button button-dark">Feature Details</button>
      </section>
      <Order_Paint car={car.order} />
    </div>
  );
};

export default Order_Options;
