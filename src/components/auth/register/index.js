import Image from "next/image";

export default function Register() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-cyan-100">
      <div className="flex flex-col w-5/12 xxl:w-4/12 lg:w-4/12 md:w-4/12 sm:hidden xsm:hidden h-96 bg-red-100 items-center rounded-l-xl drop-shadow-lg "></div>
      <div className="flex flex-col w-6/12 xxl:w-4/12 lg:w-6/12 md:w-7/12 sm:w-full xsm:w-full h-auto bg-white items-center rounded-r-xl drop-shadow-lg sm:rounded xsm:rounded">
        <h1 className="text-4xl pt-4 pb-6 text-neutral-500 font-ubunto">
          Registre-se
        </h1>
        <div className="">
          <label className="px-12 p-3.5 border-red-200 border-[3px] border-b-[3px] bg-red-200 rounded-l font-ubunto">
            Nome:
          </label>
          <input
            className="bg-gray-100 p-3 border-red-200 xl:w-96 lg:w-52 md:w-44 sm:w-52 xsm:w-44 w-72 border-2 rounded-r font-ubunto focus:border-gray-500 focus:outline-none"
            type="text"
            placeholder="   nome"
          ></input>
        </div>
        <div className="pt-5">
          <label className="px-7 p-3.5 border-red-200 border-[3px] border-b-[3px] bg-red-200 rounded-l font-ubunto">
            Sobrenome:
          </label>
          <input
            className="bg-gray-100 p-3 border-red-200 xl:w-96 lg:w-52 md:w-44 sm:w-52 xsm:w-44 w-72 border-2 rounded-r font-ubunto focus:border-gray-500 focus:outline-none"
            type="text"
            placeholder="    sobrenome"
          ></input>
        </div>
        <div className="pt-5">
          <label className="px-[51px] p-3.5 border-red-200 border-[3px] border-b-[3px] bg-red-200 rounded-l font-ubunto">
            Email:
          </label>
          <input
            className="bg-gray-100 p-3 border-red-200 xl:w-96 lg:w-52 md:w-44 sm:w-52 xsm:w-44 w-72 border-2 rounded-r font-ubunto focus:border-gray-500 focus:outline-none"
            type="text"
            placeholder="    exemplo@mail.com"
          ></input>
        </div>
        <div className="pt-5">
          <label className="px-12 p-3.5 border-red-200 border-[3px] border-b-[3px] bg-red-200 rounded-l font-ubunto">
            Senha:
          </label>
          <input
            className="bg-gray-100 p-3 border-red-200 xl:w-96 lg:w-52 md:w-44 sm:w-52 xsm:w-44 w-72 border-2 rounded-r focus:border-gray-500 focus:outline-none"
            type="password"
            placeholder="    ************"
          ></input>
        </div>
        <div className="pt-5">
          <label className="pr-2 p-3.5 border-red-200 border-[3px] border-b-[3px] bg-red-200 rounded-l font-ubunto">
            Confirmar senha:
          </label>
          <input
            className="bg-gray-100 p-3 border-red-200 xl:w-96 lg:w-52 md:w-44 sm:w-52 xsm:w-44 w-72 border-2 rounded-r focus:border-gray-500 focus:outline-none"
            type="password"
            placeholder="    ************"
          ></input>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-200 h-auto w-80 xl:w-full xxl:w-[445px] xl:pr-[245px] xl:pl-[245px] lg:w-[362px] md:w-[328px] sm:w-[360px] xsm:w-[327px] m-5 mb-8   p-2 rounded-md font-ubunto">
            Entrar
          </button>
        </div>
      </div>
    </div>
  );
}
