import { useState } from "react";
import { stories } from "../../constants";
import { Link } from "react-router-dom";

const All_Stories = () => {
  const [page, setPage] = useState(1);

  const theStories = [];
  for (let i = (page - 1) * 12; i < page * 12; i++) {
    if (stories[i]) {
      theStories.push(stories[i]);
    }
  }

  const pageDiviisons = [];
  for (let i = 1; i < stories.length / 12 + 1; i++) {
    pageDiviisons.push(i);
  }

  const handlePageChanging = (e) => {
    const pageNumber = parseInt(e.target.value);
    setPage(pageNumber);
  };

  return (
    <>
      <section className="mt-8 grid md:grid-cols-3 gap-8">
        {theStories.map((item, index) => {
          return (
            <Link key={index} to={item.path} className="group">
              <div className="w-full h-44 overflow-hidden rounded">
                <img
                  src={item.cover}
                  alt={item.title}
                  className="size-full bg-fullobject group-hover:scale-105 transition-all"
                />
              </div>
              <h6 className="text-lg mt-5 mb-1 line-clamp-2 text-ellipsis">
                {item.title}
              </h6>
              <p className="text-slate-500 text-xs">{item.uploadDate}</p>
            </Link>
          );
        })}
      </section>

      <p className="max-w-[250px] mx-auto px-1 text-center mt-12">
        <button>Prev</button>
        <select
          name=""
          id=""
          className="mx-5 bg-transparent border-0"
          onChange={handlePageChanging}
        >
          {pageDiviisons.map((item, index) => {
            return (
              <option key={index} value={item}>
                {item} from {stories.length / 12}
              </option>
            );
          })}
        </select>
        <button>Next</button>
      </p>
    </>
  );
};

export default All_Stories;
