import Image from "next/image";

export default function Login() {
  return (
    <div className="flex justify-center items-center w-screen h-screen bg-cyan-100">
      <div className="flex flex-col w-6/12 xxl:w-4/12 lg:w-5/12 md:w-6/12 sm:w-full xsm:w-full h-auto bg-white items-center rounded-l-xl shadow-2xl sm:rounded">
        <h1 className="text-4xl pt-8 pb-10 text-neutral-500 font-ubunto">
          Login
        </h1>
        <div className="">
          <label className="pr-6 p-3.5 border-red-200 border-[1px] border-b-[2px] bg-red-200 rounded-l font-ubunto">
            Email
          </label>
          <input
            className="bg-gray-50 p-3 border-red-200 xl:w-96 w-60 border-2 rounded-r font-ubunto focus:border-gray-500 focus:outline-none"
            type="text"
            placeholder="    exemplo@mail.com"
          ></input>
        </div>
        <div className="pt-5">
          <label className="pr-3 p-3.5 border-red-200 border-[1px] border-b-[2px] bg-red-200 rounded-l font-ubunto">
            Senha:
          </label>
          <input
            className="bg-gray-50 p-3 border-red-200 xl:w-96 w-60 border-2 rounded-r focus:border-gray-500 focus:outline-none"
            type="password"
            placeholder="    ************"
          ></input>
        </div>
        <div className="flex justify-center">
          <button className="bg-red-200 h-auto w-80 xl:w-full xl:pr-52 xl:pl-52 m-5 p-2 rounded-md font-ubunto">
            Entrar
          </button>
        </div>
        <div className="flex flex-row">
          <div className="flex flex-row mt-3 mr-3 w-36 xl:w-44 h-0.5 bg-gray-400" />
          <h1 className="font-ubunto"> ou </h1>
          <div className="flex flex-row mt-3 ml-3 w-36 xl:w-44  h-0.5 bg-gray-400" />
        </div>
        <div className="flex flex-row justify-center space-x-8">
          <Image
            className="pt-5 pb-8"
            src="/google.png"
            width={45}
            height={45}
          />
          <Image
            className="pt-5 pb-8"
            src="/face2.png"
            width={45}
            height={45}
          />
          <h1 className="pt-5 pl-4 w-40 font-ubunto">
            Não tem conta{" "}
            <a href="#" className="text-pink-400">
              Registre-se
            </a>{" "}
            agora!
          </h1>
        </div>
      </div>
      <div className="flex flex-col w-5/12 xxl:w-4/12 lg:w-5/12 md:w-6/12 sm:hidden xsm:hidden h-96 bg-red-100 items-center rounded-r-xl shadow-2xl"></div>
    </div>
  );
}
