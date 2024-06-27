import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./Portal";

const Layout = () => {
  var url = window.location.href;
  var lastPart = url.substr(url.lastIndexOf("/") + 1);

  return (
    <>
      <Navbar
        className={lastPart === "order" ? "fixed bg-slate-950" : "absolute"}
      />
      <main className="relative bg-slate-950 text-slate-100">
        <Outlet />
      </main>
      <Footer className={lastPart === "order" && "hidden"} />
    </>
  );
};

export default Layout;
