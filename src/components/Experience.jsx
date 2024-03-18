// main.jsx

import "../App.css"; // Make sure this import statement is in your JavaScript/JSX file
export const AboutMe = () => {
  return (
    <section className="flex flex-col gap-5 mt-5 h-full">
      <figure className="bg-white w-52 h-52 md:size-80 profile-img rounded-t-md">
        <picture className="">
          <img className="rounded-full size-52 md:size-full object-cover" src="./prof.jpeg" alt="Abdelrahman" />
        </picture>
      </figure>
      <h1 className="header-animation w-fit md:py-3 rounded-r-md  md:text-3xl">Hello my name is Abdelrahman...</h1>
      <p className="about-me md:w-3/4 text-black md:text-2xl">I am a junior Full-Stack devloper, passionate about bringing ideas to life and experimenting with new technologies for better understanding. I thrive on creating seamless, user-friendly experience. Let&rsquo;s collaborate and build something extraordinary together.</p>
    </section>
  );
};

export const Experience = () => {
  return (
    <section
      className="
     h-full
    "
    >
      <h2 className="text-black bg-white text-center text-2xl mb-2 underline">Tech Stack</h2>
      <ul className="size-10 flex flex-col w-full h-full md:grid md:grid-cols-4  gap-2 mx-auto">
        <li className="bg-zinc-800  size-52  md:size-44 cursor-pointer hover:bg-zinc-950  hover:border-white border-2 border-zinc-800 transition-all duration-300 rounded-md p-2">
          <img className="" src="./html.svg" alt="" />
        </li>
        <li className="bg-zinc-800  size-52  md:size-44 cursor-pointer hover:bg-zinc-950  hover:border-white border-2 border-zinc-800 transition-all duration-300 rounded-md p-2">
          <img src="./CSS.svg" alt="" />
        </li>
        <li className="bg-zinc-800  size-52  md:size-44 cursor-pointer hover:bg-zinc-950  hover:border-white border-2 border-zinc-800 transition-all duration-300 rounded-md p-2">
          <img src="./javascript.svg" alt="" />
        </li>
        <li className="bg-zinc-800  size-52  md:size-44 cursor-pointer hover:bg-zinc-950  hover:border-white border-2 border-zinc-800 transition-all duration-300 rounded-md p-2">
          <img className="" src="./mongodb.svg" alt="" />
        </li>
        <li className="bg-zinc-800  size-52  md:size-44 cursor-pointer hover:bg-zinc-950  hover:border-white border-2 border-zinc-800 transition-all duration-300 rounded-md p-2">
          <img className="size-[117px] md:size-full" src="./mongoose.svg" alt="" />
        </li>
        <li className="bg-zinc-800  size-52  md:size-44 cursor-pointer hover:bg-zinc-950  hover:border-white border-2 border-zinc-800 transition-all duration-300 rounded-md p-2">
          <img src="./mysql.svg" alt="" />
        </li>
        <li className="bg-zinc-800  size-52  md:size-44 cursor-pointer hover:bg-zinc-950  hover:border-white border-2 border-zinc-800 transition-all duration-300 rounded-md p-2">
          <img src="./sequelize.svg" alt="" />
        </li>
        <li className="bg-zinc-800  size-52  md:size-44 cursor-pointer hover:bg-zinc-950  hover:border-white border-2 border-zinc-800 transition-all duration-300 rounded-md p-2">
          <img src="./tailwind.svg" alt="" />
        </li>
        <li className="bg-zinc-800  size-52  md:size-44 cursor-pointer hover:bg-zinc-950  hover:border-white border-2 border-zinc-800 transition-all duration-300 rounded-md p-2">
          <img src="./nodejs.svg" alt="" />
        </li>
        <li className="bg-zinc-800 cursor-pointer  size-52  hover:bg-zinc-950 transition-all duration-500 hover:border-white border-2 border-zinc-800 rounded-md p-2 md:size-44 ">
          <img src="./reactjs.svg" alt="" />
        </li>
      </ul>
    </section>
  );
};
