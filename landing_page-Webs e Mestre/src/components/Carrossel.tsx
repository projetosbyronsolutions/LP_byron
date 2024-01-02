"use client";
import React, { useState } from "react";

{/* Bibliotecas para o icones dos botões*/ }
import SVGbotaoEsquerdo from '../../public/svg/SVG_carrossselEsquerdo';
import SVGbotaoDireito from '../../public/svg/SVG_carrosselDireito';
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

{/* Função de componente de Carrossel*/ }
export default function Carrossel() {
  {/* Array onde se adiciona a imagem e os textos a serem exibidos no carrossel
      url é onde se coloca o endereço da imagem;
      titulo e texto são os textos exibidos no balão a frente da imagem, titulo tem a cor mais forte e tamanho maior;*/}
  const slides = [
    {
      url: "./img/bird1.png",
      titulo: "Passaro moscão1",
      texto: "24h ligeiro com a galera de bobeira do campus.",
    },
    {
      url: "./img/bird2.png",
      titulo: "Topetão de fogo2",
      texto: "O terror de quem fica de bobeira.",
    },
    {
      url: "./img/bird3.png",
      titulo: "Gague da neve3",
      texto: "Sempre protegendo uma grade área.",
    },
    {
      url: "./img/twice-banded.jpeg",
      titulo: "Topetão de fogo8",
      texto: "O terror de quem fica de bobeira.",
    },
    {
      url: "./img/gromit.jpg",
      titulo: "Topetão de fogo9",
      texto: "O terror de quem fica de bobeira.",
    },
    {
      url: "./img/gravity.jpg",
      titulo: "Topetão de fogo10",
      texto: "O terror de quem fica de bobeira.",
    },
  ];

  {/* variaveis de controle do carrossel*/ }
  const [currentIndex, setCurrentIndex] = useState(0);

  {/* controle do exibir anterior*/ }
  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  {/* controle do exibir proximo*/ }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  {/* controle especifico do exibir*/ }
  const goToSlide = (slideIndex: React.SetStateAction<number>) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <div className=" group relative mx-auto max-w-3xl px-4 py-8">

       {/* div do cabeçalho do carrossel, fica centralizado e em caixa alta */}
      <div className="flex  pb-7">
        <h1 className=" text-3xl uppercase drop-shadow-lg">
          Serviços
        </h1>
      </div>

      <div className=" relative rounded-2xl bg-cover bg-center bg-no-repeat duration-500 lg:bg-contain"> {/*div de container do carrossel*/}

        {/* gabage 2 */}

        <img
          className=" mx-auto h-[350px] w-full rounded-xl object-cover lg:h-[400px] "
          src={slides[currentIndex].url}
        />                                  {/*chamada da imagem no array*/}
      </div>

      {/* {flecha direita} */}
      <div className="absolute left-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white hover:text-blue-600 group-hover:block" onClick={prevSlide}>
        {/* <BsChevronCompactLeft onClick={prevSlide} size={30} /> */}
        <SVGbotaoEsquerdo/>
        
      </div>
      {/* {flecha esquerda} */}
      <div className="absolute right-5 top-[50%] hidden -translate-x-0 translate-y-[-50%] cursor-pointer rounded-full bg-black/20 p-2 text-2xl text-white hover:text-blue-600 group-hover:block" onClick={nextSlide}>
        {/* <BsChevronCompactRight onClick={nextSlide} size={30} /> */}
        <SVGbotaoDireito />
      </div>

      {/*botões inferiores de controle de index*/}
      <div className="top-4 flex items-center justify-center py-2">
        <div className=" top-4 flex items-center rounded-full bg-black/20 text-white ">
          {slides.map((slide, slideIndex) => (
            <div
              key={slideIndex}
              onClick={() => goToSlide(slideIndex)}
              className={`cursor-pointer text-2xl hover:text-blue-600 ${currentIndex === slideIndex ? "text-black" : ""}`}

            >
              <RxDotFilled />
            </div>
          ))}
        </div>
      </div>


    </div >
  );
}