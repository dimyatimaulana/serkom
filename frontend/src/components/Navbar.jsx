import { NavLink } from "react-router-dom";
import { useEffect } from "react";

const Navbar = () => {
  const openCloseNav = (e) => {
    e.preventDefault();
    const navItems = document.querySelector("#navItems");
    if (navItems.classList.contains("hidden")) {
      navItems.classList.remove("hidden");
    } else {
      navItems.classList.add("hidden");
    }
  };

  useEffect(() => {
    const activeLink = document.querySelector(".active");
    activeLink.classList.add("bg-white");
    activeLink.classList.add("text-black");
    activeLink.classList.add("rounded-md");
  }, []);

  return (
    <>
      <nav className="w-full bg-primary shadow-md top-0 sticky z-2">
        <div className="flex justify-between p-1 px-12">
          <div className="flex items-center text-white text-20px font-bold">
            <h1>Scholarship Connect</h1>
          </div>
          <button
            className="p-3 my-2 space-y-2 bg-secondary rounded shadow md:hidden"
            id="hamBtn"
            onClick={openCloseNav}
          >
            <span className="block w-7 h-0.5 bg-gray-100"></span>
            <span className="block w-7 h-0.5 bg-gray-100"></span>
            <span className="block w-7 h-0.5 bg-gray-100"></span>
          </button>
          <ul className="hidden md:flex  text-white p-1 w-full justify-end gap-3 items-center basis-3/4 text-xs font-semibold">
            <NavLink className="p-2" to={"/"}>
              <p>HOME</p>
            </NavLink>
            <NavLink className="p-2" to={"/daftar"}>
              <p>DAFTAR</p>
            </NavLink>
            <NavLink className="p-2" to={"/hasil"}>
              <p>HASIL</p>
            </NavLink>
          </ul>
        </div>
        <ul
          className="text-white p-3 pt-0 flex w-full justify-evenly md:hidden text-xs font-semibold"
          id="navItems"
        >
          <NavLink className="p-2" to={"/"}>
            <p>HOME</p>
          </NavLink>
          <NavLink className="p-2" to={"/daftar"}>
            <p>DAFTAR</p>
          </NavLink>
          <NavLink className="p-2" to={"/hasil"}>
            <p>HASIL</p>
          </NavLink>
        </ul>
      </nav>
    </>
  );
};

export default Navbar;
