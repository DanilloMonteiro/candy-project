import { ShoppingCart, User } from "@phosphor-icons/react";

export default function Header() {
  return (
    <div className="flex items-center pb-2 pl-6 w-full h-[15vh] bg-blue-400 ">
      <div className="text-5xl">Brascabos</div>
      <div className="flex flex-row gap-10 pl-12 pt-4 w-full">
        <div className="text-3xl hover:opacity-50 cursor-pointer">Produtos</div>
        <div className="text-3xl hover:opacity-50 cursor-pointer">
          Sobre nós
        </div>
        <div className="text-3xl hover:opacity-50 cursor-pointer">Contato</div>
        <div className="ml-auto">
          <div className="flex flex-row gap-10 mr-10">
            <ShoppingCart
              className="hover:opacity-50 cursor-pointer"
              size={40}
            />
            <User className="hover:opacity-50 cursor-pointer" size={40} />
          </div>
        </div>
      </div>
    </div>
  );
}
