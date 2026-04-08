import { NavLink } from "react-router-dom";

const NavLinkCustom = ({ name, path }) => {
  return (
    <NavLink
      to={path}
      className={({ isActive }) =>
        `px-6 py-2 rounded-md transition-colors ${
          isActive
            ? "bg-gray-700 text-white"
            : "text-gray-300 hover:bg-gray-800"
        }`
      }
    >
      {name}
    </NavLink>
  );
};

export default NavLinkCustom;
