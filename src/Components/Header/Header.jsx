import React, { useState } from "react";
import { Menu, X } from "react-hero-icon/outline";
const Header = () => {
  const [toggleHamburger, setToggleHamburger] = useState(false);
  return (
    <div className="z-1 fixed flex w-full h-16 bg-red-500">
      <p className="m-auto">tes</p>
      {toggleHamburger ? (
        <span className="h-screen bg-red-500 z-100">
          <button
            onClick={() => {
              setToggleHamburger(false);
            }}
          >
            <X />
          </button>
        </span>
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
