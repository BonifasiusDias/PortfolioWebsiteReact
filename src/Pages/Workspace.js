import React from "react";
import { Link } from "react-router-dom";
import project1 from "../../src/Assets/Project1.jpg";
import project2 from "../../src/Assets/Project2.jpg";
import project3 from "../../src/Assets/Project3.jpg";
import project4 from "../../src/Assets/Project4.jpg";
import project5 from "../../src/Assets/Project5.jpg";
import { ChevronLeft } from "react-hero-icon/outline";
import { AiFillGitlab, AiFillGithub } from "react-icons/ai";

function Workspace() {
  return (
    <div>
      <Link to="/">
        <button className="absolute left-20 top-10">
          <ChevronLeft className="w-8 h-10" />
        </button>{" "}
      </Link>
      <div className="my-20 w-full flex flex-col items-center ">
        <h1 className="mr-36 font-bold text-5xl">Welcome to my </h1>
        <h1 className="ml-36 font-bold text-5xl">Work Journey!</h1>
        <p className="text-md font-semibold mt-4">
          my projects with the tools i use
        </p>
      </div>
      <div className="grid grid-cols-2">
        <div className="ml-96 2xl: border-r-4 rounded- border-black h-auto">
          <div className="mt-20  flex flex-row ">
            <div className="mr-3 flex flex-col items-center">
              <img src={project1} className="rounded-lg h-36 w-96" />
              <h1 className="font-semibold ">Discord Bot</h1>
              <p className="text-sm">Language :</p>
              <p className="text-sm">Python</p>
            </div>
            <div className="mt-16 h-1 rounded-l-full w-3/4 bg-black" />
          </div>
          <div className="mt-28  flex flex-row ">
            <div className="mr-3 flex flex-col items-center">
              <img src={project3} className="border-2  rounded-lg h-36 w-96" />
              <h1 className="font-semibold ">To Do List with Vue</h1>
              <p className="text-sm">Language :</p>
              <p className="text-sm">HTML, CSS, JS</p>
              <p className="text-sm">Framework :</p>
              <p className="text-sm">Vue</p>
            </div>
            <div className="mt-16 h-1 rounded-l-full w-3/4 bg-black" />
          </div>
          <div className="mt-28  flex flex-row ">
            <div className="mr-3 flex flex-col items-center">
              <img src={project5} className="rounded-lg h-36 w-96" />
              <h1 className="font-semibold ">Gramedia Digital Revamp Intern</h1>
              <p className="text-sm">Language :</p>
              <p className="text-sm">Typescript, CSS</p>
              <p className="text-sm">Framework :</p>
              <p className="text-sm">React, Tailwind</p>
            </div>
            <div className="mt-16 h-1 rounded-l-full w-3/4 bg-black" />
          </div>
        </div>
        <div className="mr-96">
          <div className="mt-56  flex  ">
            <div className="mt-16  h-1 w-3/4 rounded-r-full bg-black" />
            <div className="ml-3 flex flex-col items-center">
              <img src={project2} className="rounded-lg h-36 w-96" />
              <h1 className="font-semibold ">Basic Portfolio Website</h1>
              <p className="text-sm">Language :</p>
              <p className="text-sm">HTML, CSS, JavaScript</p>
            </div>
          </div>
          <div className="mt-40  flex  ">
            <div className="mt-16  h-1 w-3/4 rounded-r-full bg-black" />
            <div className="ml-3 flex flex-col items-center">
              <img src={project4} className="rounded-lg h-36 w-96" />
              <h1 className="font-semibold ">
                Portfolio Website with React.js
              </h1>
              <p className="text-sm">Language :</p>
              <p className="text-sm">JavaScript, CSS</p>
              <p className="text-sm">Framework :</p>
              <p className="text-sm">React</p>
            </div>
          </div>
        </div>
      </div>
      <div className="mx-80 mt-36 mb-10">
        <h1 className="text-lg font-bold">Follow for updates!</h1>
        <div className="flex">
          <a href="https://github.com/BonifasiusDias">
            <AiFillGithub
              href="https://github.com/BonifasiusDias"
              className="h-10 w-6"
            />
          </a>
          <a
            className="my-auto ml-2 underline"
            href="https://github.com/BonifasiusDias"
          >
            https://github.com/BonifasiusDias
          </a>
        </div>
        <div className="flex">
          <a href="https://github.com/BonifasiusDias">
            <AiFillGitlab className="h-10 w-6" />
          </a>
          <a
            className="my-auto ml-2 underline"
            href="https://gitlab.com/BonifasiusDias"
          >
            https://gitlab.com/BonifasiusDias
          </a>
        </div>
      </div>
    </div>
  );
}

export default Workspace;
