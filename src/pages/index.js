import Carrousel from "@/components/carrousel";
import Footer from "@/components/footer";
import Header from "@/components/header";
import BodyPage from "@/components/menu-body";
import React from "react";
import { CandyProvider } from "../../context/candy-context";

export default function Home() {
  return (
    <>
      <CandyProvider>
        <div className="w-full h-full">
          <Header />
          <Carrousel />
          <BodyPage />
          <Footer />
        </div>
      </CandyProvider>
    </>
  );
}
