import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState("home");

  const navActivate = (item) => {
    return `m-3 text-center md:text-left cursor-pointer ${
      active === item && " border-b-2 border-blue-600  shadow-blue-500/100"
    }`;
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const navLinks = (
    <>
      <NavLink
        onClick={() => setActive("home")}
        className={navActivate("home")}
      >
        <Link to="/">Home</Link>
      </NavLink>
      <NavLink
        onClick={() => setActive("mnpl")}
        className={navActivate("mnpl")}
      >
        <Link to="">MNPL</Link>
      </NavLink>
      <NavLink
        onClick={() => setActive("profile")}
        className={navActivate("profile")}
      >
        <Link to="">Player Profile</Link>
      </NavLink>
      <NavLink
        onClick={() => setActive("fixture")}
        className={navActivate("fixture")}
      >
        <Link to="">Fixture</Link>
      </NavLink>
      <NavLink
        onClick={() => setActive("point")}
        className={navActivate("point")}
      >
        <Link to="">Point Table</Link>
      </NavLink>
      <NavLink
        onClick={() => setActive("rankings")}
        className={navActivate("rankings")}
      >
        <Link to="">Rankings</Link>
      </NavLink>
      <NavLink
        onClick={() => setActive("rules")}
        className={navActivate("rules")}
      >
        <Link to="">Rules</Link>
      </NavLink>
      <NavLink
        onClick={() => setActive("tournament")}
        className={navActivate("tournament")}
      >
        <Link to="">Tournament</Link>
      </NavLink>
      <NavLink
        onClick={() => setActive("about")}
        className={navActivate("about")}
      >
        <Link to="">About us</Link>
      </NavLink>
    </>
  );
  return (
    <div
      className={`navbar text-white fixed z-10 ${
        scrolled ? "bg-white bg-opacity-80 text-black" : "bg-transparent"
      } transition-colors duration-300`}
    >
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="text-black menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            {navLinks}
          </ul>
        </div>
        <div className="flex justify-center items-center ml-7">
          <img className="w-8 h-8" src="/public/images/90minfc.png" alt="" />
          <a className="btn btn-ghost text-xl p-0 font-mono">90 Minutes FC</a>
        </div>
      </div>
      <div className="navbar-end text-end hidden md:block">
        <ul className="menu menu-horizontal px-1">{navLinks}</ul>
      </div>
    </div>
  );
};

export default Navbar;
