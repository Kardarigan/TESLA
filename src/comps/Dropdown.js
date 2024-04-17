import { Link } from "react-router-dom";

const Dropdown = ({ prods = false, links = false, discover = false }) => {
  return (
    <section className="absolute top-[50px] start-0 w-full bg-slate-50 text-slate-950 z-30 max-h-[500px]">
      <div className="flex px-12">
        <div className="w-3/4 grid grid-cols-4 gap-3 padding">
          {prods.map((item, index) => {
            console.log(item.links);
            return (
              <Link to={item.getLink} key={index} className="text-center">
                <div className="flex justify-center">
                  <img
                    src={item.cover}
                    alt={item.title}
                    className="h-[100px]"
                  />
                </div>
                <h4 className="font-bold">{item.title}</h4>
                <p className="text-xs mt-2">
                  {item.links.map((link, index) => {
                    return (
                      <Link
                        to={link.to}
                        key={index}
                        className={`link ${index != 0 && "ms-1"}`}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </p>
              </Link>
            );
          })}
        </div>
        <div className="w-1/4 flex flex-col justify-center">
          <ul className="border-s ps-16 py-5 text-sm min-h-[350px]">
            {links.map((link, index) => (
              <li key={index} className="py-1">
                <Link
                  to={link.to}
                  className="hover:underline hover:decoration-2"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Dropdown;
