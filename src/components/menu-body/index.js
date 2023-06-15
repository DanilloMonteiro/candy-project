import { useContext } from "react";
import { CandyContext } from "../../../context/candy-context";

export default function BodyPage() {
  const { candy, fetchCandy } = useContext(CandyContext);

  const latelyCandy = candy.slice(0, 3);

  return (
    <>
      <div className="flex items-center justify-center w-full h-auto bg-blue-400 ">
        <div className="text-5xl py-5">Lançamentos</div>
      </div>
      <div className="flex flex-row space-x-32 p-10 items-center justify-center w-full h-auto bg-blue-200 ">
        {latelyCandy.map((candy) => (
          <div className="flex flex-col items-center rounded-md transform transition duration-300 transition duration-300 hover:scale-110 hover:drop-shadow-2xl hover:drop-shadow-2xl w-[300px] h-[400px] bg-white">
            <img
              className="w-[200px] h-[220px] mt-[20px]"
              src={candy.foodImage}
            />
            <span className="text-2xl font-semibold pt-6">
              {candy.productName}
            </span>
            <span className="text-2xl font-semibold pt-4">{candy.price}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full h-auto bg-blue-400 ">
        <div className="text-5xl py-5">Mais vendidos</div>
      </div>
      <div className="flex flex-row space-x-32 p-10 items-center justify-center w-full h-auto bg-blue-200 ">
        {latelyCandy.map((candy) => (
          <div className="flex flex-col items-center rounded-md transform transition duration-300 transition duration-300 hover:scale-110 hover:drop-shadow-2xl hover:drop-shadow-2xl w-[300px] h-[400px] bg-white">
            <img
              className="w-[200px] h-[220px] mt-[20px]"
              src={candy.foodImage}
            />
            <span className="text-2xl font-semibold pt-6">
              {candy.productName}
            </span>
            <span className="text-2xl font-semibold pt-4">{candy.price}</span>
          </div>
        ))}
      </div>
      <div className="flex items-center justify-center w-full h-auto bg-blue-400 ">
        <div className="text-5xl py-5">Bem avaliados</div>
      </div>
      <div className="flex flex-row space-x-32 p-10 items-center justify-center w-full h-auto bg-blue-200 ">
        {latelyCandy.map((candy) => (
          <div className="flex flex-col items-center rounded-md transform transition duration-300 transition duration-300 hover:scale-110 hover:drop-shadow-2xl hover:drop-shadow-2xl w-[300px] h-[400px] bg-white">
            <img
              className="w-[200px] h-[220px] mt-[20px]"
              src={candy.foodImage}
            />
            <span className="text-2xl font-semibold pt-6">
              {candy.productName}
            </span>
            <span className="text-2xl font-semibold pt-4">{candy.price}</span>
          </div>
        ))}
      </div>
    </>
  );
}
