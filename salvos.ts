const images = [
  {
    url: "https://i0.wp.com/cooknenjoy.com/wp-content/uploads/2022/05/Bolo-Aniversario-Matilda-02-1920x1442.jpg?resize=1200%2C901&ssl=1",
  },
  {
    url: "https://cdn0.casamentos.com.br/vendor/9820/3_2/640/jpeg/whatsapp-image-2022-01-22-at-13-47-18_13_349820-164287053298671.webp",
  },
  {
    url: "https://www.mariareceita.com.br/wp-content/uploads/2022/06/receita-brigadeiro-facil-rapido-fazer.jpg?ezimgfmt=ng%3Awebp%2Fngcb1%2Frs%3Adevice%2Frscb1-1",
  },
  {
    url: "https://img.freepik.com/fotos-gratis/resumo-liso-vazio-cinza-studio-bem-usar-como-plano-de-fundo-relatorio-de-negocios-digital-modelo-de-site-pano-de-fundo_1258-55967.jpg?size=626&ext=jpg&ga=GA1.1.1087561777.1683724463&semt=ais",
  },
  {
    url: "https://www.receitasnestle.com.br/sites/default/files/styles/recipe_detail_desktop/public/srh_recipes/1a884bcbc5b04d71476d2995d51d0140.webp?itok=CfXWZnyK",
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

  <div className="flex w-full h-auto ">
          <img
            className="imagem duration-500"
            src={`${images[currentIndex].url}`}
          />
        </div>

        <div>
          <BsChevronCompactLeft
            onClick={prevSlide}
            size={40}
            className="class1 absolute top-[50%] left-[430px] text-2xl rounded-full p-2 bg-black/40 text-white cursor-pointer"
          />
        </div>
        <div>
          <BsChevronCompactRight
            onClick={nextSlide}
            size={40}
            className="class1 absolute top-[50%] right-8 text-2xl rounded-full p-2 hover:bg-black/60 bg-black/40 text-white cursor-pointer"
          />
        </div>

        <div className="flex absolute justify-center right-[30%]">
          {images.map((slides, slideIndex) => (
            <div key={slideIndex}>
              <RxDotFilled
                onClick={() => goToSlide(slideIndex)}
                size={40}
                color="#cffafe"
                className="class1 relative top-[-50px] cursor-pointer"
              />
            </div>
          ))}
        </div>