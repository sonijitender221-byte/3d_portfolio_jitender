import { NavLink } from "react-router-dom";
import { profile } from "../constants";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `rounded-md px-1 py-2 text-sm font-semibold transition-colors duration-200 sm:text-base ${
      isActive ? "text-blue-600" : "text-slate-700 hover:text-blue-600"
    }`;

  return (
    <header className="absolute left-0 top-0 z-20 flex w-full items-center justify-between gap-3 px-4 py-4 sm:px-8 md:px-12">
      <NavLink to="/" className="shrink-0 text-lg font-bold text-blue-600 sm:text-2xl" aria-label={`${profile.name} home`}>
        {profile.name}
      </NavLink>
      <nav aria-label="Main navigation" className="flex flex-wrap items-center justify-end gap-2 sm:gap-5 md:gap-7">
        <NavLink to="/" className={linkClass} end>Home</NavLink>
        <NavLink to="/about" className={linkClass}>About</NavLink>
        <NavLink to="/projects" className={linkClass}>Projects</NavLink>
        <NavLink to="/contact" className={linkClass}>Contact</NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
