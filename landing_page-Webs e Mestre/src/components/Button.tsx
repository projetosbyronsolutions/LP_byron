import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IProps {
  link: string;
  name: string;
  iconName: IconDefinition;
}

const Button = ({ link, name, iconName }: IProps) => {
  return (
    <button className="w-full">
      <a
        className="flex items-center justify-center gap-4 rounded-lg bg-blue-600 px-8 py-4 text-xl font-semibold text-white shadow-lg transition-all duration-500 hover:scale-105 hover:bg-blue-700 focus:outline-none active:bg-blue-800"
        href={link}
        target="__blank"
        rel="noopener"
      >
        {name}
        <FontAwesomeIcon icon={iconName} size="xl" />
      </a>
    </button>
  );
};

export default Button;
