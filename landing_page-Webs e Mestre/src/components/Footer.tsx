import React from "react";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
  faLinkedinIn,
} from "@fortawesome/free-brands-svg-icons";
import FooterButton from "@/components/FooterButton";

const Footer = () => {
  return (
    <footer className="relative flex justify-center">
      <div
        id="footer-div"
        className="flex w-full max-w-7xl flex-col items-center justify-between px-4 py-2 md:flex-row md:gap-6"
      >
        <div
          id="footer-parte-1"
          className="flex max-w-xs flex-col items-center justify-center gap-2 md:items-start md:gap-4"
        >
          <h2 className="text-xl font-bold uppercase">Contato</h2>

          <div className="text-sm font-light">
            <p>+55 (XX) XXXXX-XXXX</p>
            <p>byron@byronsolutions.com</p>
          </div>

          <div className="flex gap-2">
            <FooterButton
              link="https://www.instagram.com"
              iconName={faInstagram}
            />
            <FooterButton
              link="https://www.facebook.com"
              iconName={faFacebook}
            />
            <FooterButton
              link="https://wa.me/55XXXXXXXXXXX"
              iconName={faWhatsapp}
            />
            <FooterButton
              link="https://www.linkedin.com"
              iconName={faLinkedinIn}
            />
          </div>
        </div>

        <picture id="footer-parte-2">
          <img className="w-48" src="img/logo.png" alt="Logo" />
        </picture>

        <div
          id="footer-parte-3"
          className="flex max-w-xs flex-col items-center justify-center gap-2 md:items-end md:gap-4"
        >
          <h2 className="text-lg font-bold uppercase">Onde nos encontrar</h2>
          <p className="text-center text-sm font-light md:text-end ">
            Av. BPS, 1303, Bairro Pinheirinho - Universidade Federal de Itajubá,
            Itajubá – MG
          </p>
          <a
            className="duration-400 rounded-lg px-2 py-1 font-semibold transition ease-in-out hover:bg-gray-200 focus:bg-gray-300 focus:outline-none active:bg-gray-300"
            href="https://maps.app.goo.gl/KSv62tWjRhyYpuHg9"
            target="__blank"
            rel="noopener"
          >
            Ver no mapa
          </a>
        </div>
        <div className="custom-shape-divider-bottom-1698002495 z-[-1]">
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"
              className="shape-fill"
            ></path>
          </svg>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
