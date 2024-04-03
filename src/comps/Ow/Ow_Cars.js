import { overVehicles } from "../../constants"
import Button from "../Button"
const Ow_Cars = () => {
    return (
        <>
            {overVehicles.map((car) => {
                return (
                    <section className="h-screen w-full flex-centralizer bg-fullcenter" style={{ backgroundImage: " url(" + car.cover + ")" }}>
                        <div className="text-center h-3/5 flex flex-col justify-between">
                            <div>
                                <h2 className='font-bold xl:text-4xl text-2xl'>{car.model}</h2>
                                <p className='my-3'>{car.subtitle}</p>
                            </div>
                            <div className="md:flex gap-5 md:mx-auto padding">
                                <Button to={car.orderLink} label="Learn About" outline />
                                <Button to={car.learnLink} label="Order Now" customClass="md:mt-0 mt-2" dark />
                            </div>
                        </div>
                    </section>
                )
            })}
        </>
    );
};

export default Ow_Cars;
