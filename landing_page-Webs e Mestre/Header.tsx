"use client";
import React, { useEffect, useState } from "react";
import Menu from "@/components/Menu";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const Header = () => {
  let [showMobileMenu, setShowMobileMenu] = useState(false);

  return (
    <header className="z-10 w-full items-center justify-center bg-white px-4 font-medium shadow-lg drop-shadow-lg md:fixed md:flex md:text-lg">
      <div
        id="header-div"
        className="flex h-20 w-full max-w-7xl items-center justify-between px-4"
      >
        <a id="header-parte-1" className="focus:outline-none" href="#home">
          <img className="w-10" src="img/logo.png" alt="Logo" />
        </a>

        <div id="header-parte-2" className="hidden md:flex">
          <Menu />
        </div>

        <button
          className="duration-400 rounded-lg px-2 py-1 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300 focus:outline-none active:bg-gray-300 md:hidden"
          onClick={() => setShowMobileMenu(!showMobileMenu)}
        >
          <FontAwesomeIcon icon={faBars} size="xl" />
        </button>
      </div>
      <div className="md:hidden">{showMobileMenu && <Menu />}</div>
    </header>
  );
};

export default Header;
