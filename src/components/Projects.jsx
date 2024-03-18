import React from "react";
import { Link } from "react-router-dom";

export const Projects = () => {
  return (
    <section
      className=" text-white  gap-5
      w-full flex flex-col h-full"
      id="#projects"
    >
      <h1 className="text-center  bg-white w-full text-black text-3xl">Projects</h1>
      <ul
        className="
       flex justify-center flex-wrap items-center gap-2 "
      >
        <li className="bg-gray-900 p-20 rounded-md hover:border-lime-500 border-2 border-transparent transition-all duration-500 flex flex-col">
          <p>Heroes-Clash</p>
          <span>I was a part of the team, where we built a superhero game</span>
          <a className="underline text-blue-600" href={"https://github.com/Abdelrahmanaman/Heroes-Clash"}>Github Link</a>
        </li>
        <li className="bg-purple-900 p-20 rounded-md hover:border-lime-500 border-2 border-transparent transition-all duration-500">Upcoming Project</li>
        <li className="bg-pink-900 p-20 rounded-md hover:border-lime-500 border-2 border-transparent transition-all duration-500">Upcoming Project</li>
        <li className="bg-indigo-900 p-20 rounded-md hover:border-lime-500 border-2 border-transparent transition-all duration-500">Upcoming Project</li>
      </ul>
    </section>
  );
};
