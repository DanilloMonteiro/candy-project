import {
  CaretCircleRight,
  CaretRight,
  Heart,
  InstagramLogo,
  Star,
  Storefront,
  WhatsappLogo,
} from "@phosphor-icons/react";

export default function Product() {
  return (
    <div className="flex justify-center w-full h-full bg-gray-200 mb-10">
      <div className="flex flex-row mt-[5vh] flex-wrap bg-white w-[90vw] mb-[200px] h-full rounded-lg border-gray-300 border-[1px] justify-center">
        <div className="flex my-[4vh] mr-[4vw] bg-white w-[51vw] h-[490px] ">
          <div className="flex flex-col gap-2">
            <div className="h-[60px] w-[60px] rounded-lg border-gray-300 border-[1px] hover:border-[2px] hover:border-blue-600"></div>
            <div className="h-[60px] w-[60px] rounded-lg border-gray-300 border-[1px] hover:border-[2px] hover:border-blue-600"></div>
            <div className="h-[60px] w-[60px] rounded-lg border-gray-300 border-[1px] hover:border-[2px] hover:border-blue-600"></div>
          </div>
          <div className="w-full h-full">
            <div className="flex items-center justify-center text-6xl bg-gray-300 w-full h-[95%] text-center mx-5 ">
              Foto
            </div>
          </div>
        </div>

        <div className="my-[4vh] pb-10 ml-[2vw] bg-white w-[30vw] h-auto rounded-lg border-gray-300 border-[1px] ">
          <div className="flex flex-col">
            <span className="opacity-50 mx-5 mt-3">
              Em promoção | +100 vendidos
            </span>
            <div className="flex flex-row items-center mx-5 mt-2">
              <h1 className="text-2xl mr-3">Nome do produto completo</h1>
              <Heart className="text-rose-500" size={32} />
            </div>

            <div className="flex flex-row items-center gap-1 mx-5 mt-1">
              <Star className="text-yellow-500" size={15} weight="fill" />
              <Star className="text-yellow-500" size={15} weight="fill" />
              <Star className="text-yellow-500" size={15} weight="fill" />
              <Star className="text-yellow-500" size={15} />
              <Star className="text-yellow-500" size={15} />
              <span className="text-yellow-500">(3)</span>
            </div>
            <div className="flex flex-row items-center mx-5 mt-2">
              <span className=" bg-rose-500 text-white font-semibold w-[110px] text-center rounded-md ">
                Mais vendido
              </span>
              <span className="text-rose-500 ml-3 text-sm ">
                2ª doce mais vendo do mês
              </span>
            </div>
            <h3 className="mx-5 mt-3 text-5xl font-light">R$ 99,99</h3>
            <h3 className="mx-5 mt-3 text-xl ">
              Em <a className="text-rose-500">4x R$ 25 sem juros</a>
            </h3>
          </div>
          <h4 className="mx-5 mt-1 text-sm text-blue-300 hover:text-blue-500">
            Ver formas de pagamento
          </h4>
          <div className="flex flex-row mx-5 mt-2 items-center justify-center ">
            <Storefront className="text-green-500" size={50} />
            <h3 className="ml-2 text-sm text-green-500">
              Ainda nao fazemos entrega, somente retirada na loja. Data agendada
              junto com o pedido.
            </h3>
          </div>

          <div className="flex flex-row mx-5 mt-6 ">
            <button className=" bg-green-500 w-[100%] h-[50px] rounded-lg flex items-center justify-center hover:bg-green-600">
              <span className="font-semibold text-white ">
                Encomendar via Whatsapp
              </span>
              <WhatsappLogo
                size={25}
                weight="fill"
                className="text-white ml-2 "
              />
            </button>
          </div>
          <div className="flex flex-row mx-5 mt-6 ">
            <button className="bg-insta w-[100%] h-[50px] rounded-lg flex items-center justify-center hover:bg-green-600">
              <span className="font-semibold text-white ">
                Encomendar via Instagram
              </span>

              <InstagramLogo
                size={25}
                weight="fill"
                className="text-white ml-2 "
              />
            </button>
          </div>
        </div>
        <div className="relative -top-[30px] w-full h-full">
          <div className="w-[755px] mx-5 h-[1px] items-start bg-gray-300"></div>
        </div>

        <div className="w-full h-[500px] bg-white mx-[20px]">
          <h1 className="text-3xl ml-[2vw]">Produtos parecidos</h1>
          <div className="relative flex justify-between flex-row bg-white mx-[2vw] w-auto h-auto mt-8">
            <div className="w-[23%] h-auto border-[1px] border-gray-300">
              <div className="flex items-center justify-center bg-gray-100 w-full h-[260px]">
                Imagem
              </div>
              <div className="h-[1px] w-full bg-gray-300"></div>
              <div className="my-5">
                <div className="ml-4 text-xl">Brigadeiro tradicional</div>
                <div className="flex flex-row">
                  <div className="ml-4 text-2xl font-semibold">R$ 110,90</div>
                  <div className="ml-2 text-base text-green-500 font-semibold">
                    10% OFF
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[23%] h-auto border-[1px] border-gray-300">
              <div className="flex items-center justify-center bg-gray-100 w-full h-[260px]">
                Imagem
              </div>
              <div className="h-[1px] w-full bg-gray-300"></div>
              <div className="my-5">
                <div className="ml-4 text-xl">Brigadeiro tradicional</div>
                <div className="flex flex-row">
                  <div className="ml-4 text-2xl font-semibold">R$ 110,90</div>
                  <div className="ml-2 text-base text-green-500 font-semibold">
                    10% OFF
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[23%] h-auto border-[1px] border-gray-300">
              <div className="flex items-center justify-center bg-gray-100 w-full h-[260px]">
                Imagem
              </div>
              <div className="h-[1px] w-full bg-gray-300"></div>
              <div className="my-5">
                <div className="ml-4 text-xl">Brigadeiro tradicional</div>
                <div className="flex flex-row">
                  <div className="ml-4 text-2xl font-semibold">R$ 110,90</div>
                  <div className="ml-2 text-base text-green-500 font-semibold">
                    10% OFF
                  </div>
                </div>
              </div>
            </div>
            <div className="w-[23%] h-auto border-[1px] border-gray-300">
              <div className="flex items-center justify-center bg-gray-100 w-full h-[260px]">
                Imagem
              </div>
              <div className="h-[1px] w-full bg-gray-300"></div>
              <div className="my-5">
                <div className="ml-4 text-xl">Brigadeiro tradicional</div>
                <div className="flex flex-row">
                  <div className="ml-4 text-2xl font-semibold">R$ 110,90</div>
                  <div className="ml-2 text-base text-green-500 font-semibold">
                    10% OFF
                  </div>
                </div>
              </div>
            </div>
            <div className="absolute top-[40%] -right-[30px]">
              <CaretRight
                size={60}
                className="text-gray-300 rounded-full bg-white hover:drop-shadow-xl drop-shadow-md"
                weight="thin"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
