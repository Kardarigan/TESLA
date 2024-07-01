import { Link } from "react-router-dom";
import {
  Order_Check,
  Order_Interior,
  Order_Paint,
  Order_Self,
  Order_Wheel,
  Select_Price,
  Outlaw,
} from "../Portal";
import { useState } from "react";

const Order_Options = ({ car }) => {
  const [postOpen, setPostOpen] = useState(false);

  return (
    <div className="px-10 py-5 text-center grid gap-y-32">
      <section className="grid gap-y-3">
        <h2 className="title-lg">{car.model}</h2>
        <p className="para  text-slate-300">
          Estimated Delivery: {car.order.estimated}
        </p>
        <div className="flex-fullcenter">
          <i className="fa-solid fa-circle-info text-blue-500 me-1" />
          <button
            className="link para text-slate-200"
            onClick={() => setPostOpen(true)}
          >
            Enter Postal Code
          </button>
          <Outlaw
            Outlaw
            title="Enter Your Postal Code"
            isOpen={postOpen}
            onClose={() => setPostOpen(false)}
          >
            <form className="mt-10">
              <input type="text" className="field" />
              <button type="submit" className="button button-sky mt-12">
                Confirm
              </button>
            </form>
          </Outlaw>
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
      <Order_Wheel car={car.order} />
      <Order_Interior car={car.order} />
      <Order_Self />
      <Order_Check thing={car.order.charging} />
      <Order_Check thing={car.order.accessories} />
      <section className="grid gap-y-5">
        <h2 className="title-sm">Order Your {car.model}</h2>
        <p className="para-sm text-slate-300">
          Estimated Delivery: {car.order.estimated}
        </p>
        {car.order.iZEV && (
          <div className="flex gap-x-3 px-5">
            <i class="fa-light fa-check text-green-400" />
            <p className="text-justify para-sm">
              Your design may qualify for a $5,000 iZEV incentive for eligible
              buyers. Incentives are deducted after taxes and fees.
              <Link to="/" className="link ms-2">
                Learn More
              </Link>
            </p>
          </div>
        )}
        <button className="button button-sky">Continue</button>
      </section>
    </div>
  );
};

export default Order_Options;
