import { Outlet } from "react-router-dom";
import { Navbar, Footer } from "./Portal";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="relative bg-slate-950 text-slate-100">
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default Layout;
