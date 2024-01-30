
import { NavLink } from "react-router-dom";

const Header = () => {
  
  return (
    <>
      <ul className=" flex justify-center">
        <li className=" p-3">
          <NavLink
            to={""}
            className={({ isActive }) => {
              return isActive ? "text-red-500" : "text-black";
            }}
          >
            Home
          </NavLink>
        </li>
        <li className=" p-3">
          <NavLink
            to={"/About"}
            className={({ isActive }) => {
              return isActive ? "text-red-500" : "text-black";
            }}
          >
            About
          </NavLink>
        </li>
        <li className=" p-3">
          <NavLink
            to={"/Contact"}
            className={({ isActive }) => {
              return isActive ? "text-red-500" : "text-black";
            }}
          >
            Contact us
          </NavLink>
        </li>
      </ul>
    </>
  );
};

export default Header;
