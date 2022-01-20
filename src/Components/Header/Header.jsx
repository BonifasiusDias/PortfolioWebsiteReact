import React, { useState } from "react";
import { Menu, X } from "react-hero-icon/outline";
import { motion } from "framer-motion";
const variants = {
  open: { opacity: 1, x: 0 },
  closed: { opacity: 0, x: "-100%" },
};
const Header = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  return (
    <div className="z-50 fixed flex w-full h-16 bg-red-500">
      <p className="m-auto">tes</p>
      {toggleHamburger ? (
        <div className="absolute w-full h-screen bg-red-500 z-100">
          <button
            className="absolute right-10 top-10"
            onClick={() => {
              setToggleHamburger(false);
            }}
          >
            <X className="h-7 w-10" />
          </button>
          <div className="flex h-full md:h-screen ">
            <div className="mx-auto text-3xl  font-semibold flex flex-col items-center md:flex-row">
              <a
                onClick={() => {}}
                href="#home"
                className="my-auto mx-5 hover:text-white"
              >
                Home
              </a>
              <a
                onClick={() => {}}
                href="#about"
                className="my-auto mx-5 hover:text-white"
              >
                About Me
              </a>
              <a
                onClick={() => {}}
                href="#portfolio"
                className="my-auto mx-5 hover:text-white"
              >
                Portfolio
              </a>
              <a
                onClick={() => {}}
                href="#contact"
                className="my-auto mx-5 hover:text-white"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => {
            setToggleHamburger(true);
          }}
          className="absolute  right-6 mt-5 "
        >
          <Menu />
        </button>
      )}
    </div>
  );
};

export default Header;
