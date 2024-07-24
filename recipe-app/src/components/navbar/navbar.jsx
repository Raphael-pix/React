import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { GlobalContext } from "../../context";

export default function Navbar() {
  const { searchParams, setSearchParams, handleSubmit } =
    useContext(GlobalContext);

  return (
    <nav className="flex justify-between items-center py-4 container mx-auto flex-col lg:flex-row gap-5 lg:gap-0">
      <NavLink to={"/"}>
        <h1 className="text-2xl font-semibold">Foodie</h1>
      </NavLink>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="search"
          value={searchParams}
          onChange={(e) => setSearchParams(e.target.value)}
          name="search"
          className="bg-white/75 p-3 px-6  rounded-full outline-none lg:w-96 shadow-sm shadow-red-100 focus:shadow-red-200 "
        />
      </form>

      <ul className="flex gap-5">
        <li>
          <NavLink
            to={"/"}
            className="text-black hover:text-gray-700 duration-300 capitalize"
            style={({isActive})=>{return {color: isActive? "blue" : ""} }}
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to={"/favorites"}
            className="text-black hover:text-gray-700 duration-300 capitalize"
            style={({isActive})=>{return {color: isActive? "blue" : ""} }}
          >
            favourites
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}
