import { NavLink } from "react-router-dom";
import useDarkMode from "../hooks/useDarkHook";
import { FiMenu, FiMoon, FiSun } from "react-icons/fi";
import { useState } from "react";
import { MdOutlineClose } from "react-icons/md";

const Navbar = () => {
  const [isDarkMode, setIsDarkMode] = useDarkMode();
  const [menu, setmenu] = useState("hidden");
  function toggleMenu() {
    if (menu === "hidden") {
      setmenu(
        "flex flex-col items-center justify-center absolute top-16 left-0 w-[70%] bg-gray-100 dark:bg-gray-700 text-black dark:text-gray-200"
      );
    } else {
      setmenu("hidden");
    }
  }
  // console.log(localStorage)
  return (
    <nav className="flex justify-between  py-6 transition-all  dark:bg-gray-800 bg-gray-100 text-black dark:text-gray-200    px-8">
      <div className="w-[50%] md:flex hidden">
        <NavLink className="mx-4 hover:text-red-500 hover:border-b-2 text-lg py-4 border-red-500 transition-colors">
          Home
        </NavLink>
        <a
          href={"#about"}
          className="mx-4 hover:text-red-500 hover:border-b-2 text-lg py-4 border-red-500 transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          className="mx-4 hover:text-red-500 hover:border-b-2 text-lg py-4 border-red-500 transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="mx-4 hover:text-red-500 hover:border-b-2 text-lg py-4 border-red-500 transition-colors"
        >
          Contact
        </a>
      </div>
      <button
        onClick={toggleMenu}
        className=" hover:bg-gray-200 dark:hover:bg-gray-600  text-center text-2xl rounded-lg p-2  transition-colors md:hidden"
      >
        <FiMenu />
      </button>
      <div className={`md:hidden ${menu}   w-[50%]`}>
        <div className="flex justify-end w-full p-4">
          <button className="mx-4 hover:bg-gray-200 dark:hover:bg-gray-600  text-center text-lg p-2  transition-colors">
            <MdOutlineClose
              className="text-2xl font-bold"
              onClick={() => setmenu("hidden")}
            />
          </button>
        </div>
        <NavLink className="mx-4 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-center text-lg py-4  transition-colors">
          Home
        </NavLink>
        <a
          href={"#about"}
          className="mx-4 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-center text-lg py-4  transition-colors"
        >
          About
        </a>
        <a
          href="#projects"
          className="mx-4 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-center text-lg py-4  transition-colors"
        >
          Projects
        </a>
        <a
          href="#contact"
          className="mx-4 hover:bg-gray-200 dark:hover:bg-gray-600 w-full text-center text-lg py-4  transition-colors"
        >
          Contact
        </a>
      </div>
      <div className="w-[50%] flex justify-end">
        <button
          onClick={() => setIsDarkMode(!isDarkMode)}
          className="text-lg p-3 rounded-lg  hover:bg-gray-300 dark:hover:bg-gray-700"
        >
          {isDarkMode ? (
            <FiSun className="text-gray-200   transition-colors" />
          ) : (
            <FiMoon className="text-gray-500" />
          )}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
