import { Link } from "react-router-dom";
import Background from "../assets/Events.avif";

const Events = () => {
  return (
    <>
      <div
        className="h-96 bg-fullcenter md:text-4xl text-2xl flex items-center padding-cont"
        style={{ backgroundImage: "url(" + Background + ")" }}
      >
        <h1>Events</h1>
      </div>
      <section className="pagecenter-x flex max-md:flex-col">
        <div className="">
          <h2>Near Chicago, Illinois</h2>
          <p>
            Can't find an event you're looking for?{" "}
            <Link to="/" className="link">
              Receive notifications for future events.
            </Link>
          </p>
        </div>
      </section>
    </>
  );
};

export default Events;
