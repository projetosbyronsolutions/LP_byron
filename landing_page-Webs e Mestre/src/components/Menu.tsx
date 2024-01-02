import React from "react";

const Menu = () => {
  return (
    <div>
      <nav className="flex flex-col justify-between gap-8 p-4 md:flex-row md:items-center">
        <a
          className="duration-400 rounded-md px-2 py-1 transition ease-in-out hover:bg-gray-200 hover:text-blue-600 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
          href="#home"
        >
          Home
        </a>

        <a
          className="duration-400 rounded-md px-2 py-1 transition ease-in-out hover:bg-gray-200 hover:text-blue-600 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
          href="#sobre"
        >
          Sobre
        </a>

        <a
          className="duration-400 rounded-md px-2 py-1 transition ease-in-out hover:bg-gray-200 hover:text-blue-600 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
          href="#servicos"
        >
          Serviços
        </a>

        <a
          className="duration-400 rounded-md px-2 py-1 transition ease-in-out hover:bg-gray-200 hover:text-blue-600 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
          href="#contato"
        >
          Contato
        </a>
      </nav>
    </div>
  );
};

export default Menu;
