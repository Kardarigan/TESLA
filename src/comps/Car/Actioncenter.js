import { useParams } from "react-router-dom";
import { vehicles } from "../../constants";
import Button from "../Button";

const Actioncenter = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => e.model.toLowerCase() === model);

  return (
    <>
      <button className="z-10 fixed sm:block hidden right-[2vw] bottom-[2vh] size-[50px] transition duration-200 lg:text-sm text-center font-semibold backdrop-blur-sm text-[6px] rounded text-slate-200 bg-slate-700 bg-opacity-70 hover:bg-opacity-80">
        <i class="fal fa-comment-alt-dots text-lg" />
      </button>
      <div className="sm:hidden z-10 actioncenter flex gap-x-1 fixed w-full px-4 bottom-[2vh]">
        <button className="w-[56px] h-[41px] transition duration-200 lg:text-sm text-center font-semibold backdrop-blur-sm text-[6px] rounded inline-block text-slate-200 bg-slate-700 bg-opacity-70 hover:bg-opacity-80">
          <i class="fal fa-comment-alt-dots text-lg" />
        </button>
        <Button
          label={`Custom Order ${car.model}`}
          to={car.orderLink}
          customClass="py-3 h-[41px]"
        />
        <button className="w-[56px] h-[41px] transition duration-200 lg:text-sm text-center font-semibold backdrop-blur-sm text-[12px] rounded inline-block text-slate-200 bg-slate-700 bg-opacity-70 hover:bg-opacity-80">
          <i className="fal fa-chevron-up text-lg" />
        </button>
      </div>
    </>
  );
};

export default Actioncenter;