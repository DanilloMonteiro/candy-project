import { Minus, Plus } from "@phosphor-icons/react";

export default function Carrinho() {
  return (
    <div className="flex flex-row gap-[4vw] justify-center w-full h-full bg-gray-200 mb-10">
      <div className="flex flex-col mt-[5vh] flex-wrap bg-white w-[58vw] mb-[200px] h-[500px] rounded-lg border-gray-300 border-[1px]">
        <div className="flex w-auto h-10 text-2xl font-semibold ml-5 my-3">
          Items no carrinho
        </div>
        <div className="w-full h-[1px] bg-gray-300"></div>
        <div className="flex flex-row p-5 pl-10">
          <div className="flex items-center justify-center w-[100px] h-[100px] bg-gray-200">
            imagem
          </div>
          <div className="flex flex-col items-start mx-10">
            <div className="text-xl font-semibold ">Brigadeiro tradicional</div>
            <button className="text-blue-500 mt-[50px]">Excluir</button>
          </div>
          <div className="flex justify-between px-3 items-center w-[120px] h-[40px] bg-white rounded-md border-[1px] border-gray-300">
            <Minus size={18} />
            <span className="border-x-[1px] border-gray-300 px-3">1</span>
            <Plus size={20} className="text-blue-500" />
          </div>
        </div>

        <div className="w-full h-[1px] bg-gray-300"></div>
      </div>

      <div className="flex flex-row mt-[5vh] flex-wrap bg-white w-[28vw] mb-[200px] h-[500px] rounded-lg border-gray-300 border-[1px] justify-center"></div>
    </div>
  );
}
