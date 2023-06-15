import { useState } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";
import { RxDotFilled } from "react-icons/rx";

export default function Carrousel() {
  const images = [
    {
      url: "https://img.freepik.com/vetores-gratis/projeto-do-fundo-multicolor_1117-99.jpg?q=10&h=200",
    },
    {
      url: "https://img.elo7.com.br/product/244x194/18AC98B/papel-de-parede-casual-rosa-bebe-liso-papel-de-parede-android.jpg",
    },
    {
      url: "https://img.freepik.com/vetores-gratis/projeto-do-fundo-multicolor_1117-99.jpg?q=10&h=200",
    },
    {
      url: "https://img.elo7.com.br/product/244x194/18AC98B/papel-de-parede-casual-rosa-bebe-liso-papel-de-parede-android.jpg",
    },
    {
      url: "https://img.freepik.com/vetores-gratis/projeto-do-fundo-multicolor_1117-99.jpg?q=10&h=200",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(4);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? images.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === images.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex);
  };

  return (
    <>
      <div className="flex flex-col h-auto w-full">
        <img
          className="image duration-500 h-5/6 w-full"
          src={`${images[currentIndex].url}`}
        ></img>
        <div>
          <BsChevronCompactLeft
            onClick={prevSlide}
            size={40}
            className="absolute top-[50%] left-[1%] text-2xl rounded-full p-2 hover:bg-black/60 bg-black/40 text-white cursor-pointer"
          />
        </div>
        <div>
          <BsChevronCompactRight
            onClick={nextSlide}
            size={40}
            className="absolute top-[50%] right-[1%] text-2xl rounded-full p-2 hover:bg-black/60 bg-black/40 text-white cursor-pointer"
          />
        </div>
        <div className="flex flex-row  absolute bottom-[2vh] right-[45vw]">
          {images.map((slides, slideIndex) => (
            <div key={slideIndex}>
              <RxDotFilled
                onClick={() => goToSlide(slideIndex)}
                size={30}
                color="#cffafe"
                className="items-center cursor-pointer"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
