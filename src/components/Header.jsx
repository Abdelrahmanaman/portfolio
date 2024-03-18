import { useState } from "react";
import { Link } from "react-router-dom";

export const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
    console.log(openMenu);
  };
  return (
    <header className="text-white bg-zinc-900 py-4 flex justify-between items-center px-2 w-full">
      <h1 className="text-5xl font-bold">A.B.</h1>
      <nav className="">
        <button onClick={handleMenuOpen} className="relative border-2 p-1  rounded-md bg-black size-12 flex flex-wrap items-center">
          <div className={` ${openMenu ? "rotate-45 translate-y-[10px]" : ""} transition-all duration-300 w-full h-[2px] bg-gray-300`}></div>
          <div className={`${openMenu ? "hidden" : "block"} w-[75%] h-[2px] bg-gray-300 `}></div>
          <div className={`${openMenu ? "-rotate-45 -translate-y-3 translate-x-" : ""} transition-all duration-300 w-full h-[1px] bg-white`}></div>
        </button>
        <ul className={`${openMenu ? "opacity-100 z-0 translate-y-2" : "opacity-0 -z-50 translate-y-6"} flex z-10 pt-10 transition-all duration-1000    text-3xl gap-10 flex-col min-h-[350px] w-[450px] absolute right-0 rounded-b-md pb-2 px-3  bg-zinc-900`}>
          <li className="flex justify-center">
            <a className="text-center w-full py-3 rounded-md bg-zinc-950" href="#about-me">
              About me
            </a>
          </li>
          <li className="flex justify-center">
            <a className="text-center w-full py-3 rounded-md bg-zinc-950" href="#projects">
              Projects
            </a>
          </li>
          <li className="  flex justify-center">
            <a className="text-center w-full py-3 rounded-md bg-zinc-950" href="#contact-me">
              Contact me
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};
