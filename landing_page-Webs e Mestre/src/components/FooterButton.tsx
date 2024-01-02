import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface IProps {
  link: string;
  iconName: IconDefinition;
}

const FooterButton = ({ link, iconName }: IProps) => {
  return (
    <button className="w-full">
      <a
        className="duration-400 rounded-lg p-1 transition ease-in-out hover:bg-gray-200 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
        href={link}
        target="__blank"
        rel="noopener"
      >
        <FontAwesomeIcon icon={iconName} size="2xl" />
      </a>
    </button>
  );
};

export default FooterButton;
