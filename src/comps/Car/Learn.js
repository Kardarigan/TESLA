import { useParams } from "react-router-dom";
import { vehicles } from "../../constants";
import {
  Learn_Amenities,
  Learn_Exterior,
  Learn_Hero,
  Learn_Inter,
  Learn_Intertop,
  Learn_Middle,
  Learn_Powertrain,
  Learn_Speed,
  Learn_Middle_Image,
} from "../Portal";

const Learn = () => {
  const { model } = useParams();
  const car = vehicles.find((e) => e.model.toLowerCase() === model);
  const carPlaid = car.plaid;

  return (
    <div id="learn">
      <Learn_Hero car={car} />
      <Learn_Speed car={car} />
      <Learn_Intertop car={car} />
      <Learn_Inter car={car} />
      <Learn_Amenities car={car} />
      <Learn_Middle
        title={carPlaid.title}
        topic={carPlaid.topic}
        describe={carPlaid.describe}
        orderLink={car.orderLink}
        light
      />
      <Learn_Powertrain car={car} />
      {car.utility && (
        <Learn_Middle_Image
          topic="Utility"
          title={car.utility.title}
          cover={car.utility.cover}
          describe={car.utility.descrbie}
          orderLink={car.orderLink}
          inventoryLink={car.inventoryLink}
          numbers={car.utility.numbers}
        />
      )}
      <section
        className="h-[60vh] bg-fullcenter"
        style={{
          backgroundImage: "url(" + car.designTop + ")",
        }}
      ></section>
      <Learn_Middle
        title={carPlaid.title}
        topic={carPlaid.topic}
        describe={carPlaid.describe}
        orderLink={car.orderLink}
        inventoryLink={car.inventoryLink}
      />
      <Learn_Exterior car={car} />
      <Learn_Middle_Image
        topic="Range"
        title={car.range.title}
        cover={car.range.cover}
        describe={car.range.descrbie}
        orderLink={car.orderLink}
        inventoryLink={car.inventoryLink}
        numbers={car.range.numbers}
        right
      />
    </div>
  );
};

export default Learn;
