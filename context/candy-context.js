import { createContext, useEffect, useState } from "react";
import CandyServices from "../services/candy";

export const CandyContext = createContext();

export const CandyProvider = ({ children }) => {
  const [candy, setCandy] = useState([]);

  async function fetchCandy() {
    const response = await CandyServices.index();
    if (response.data.length >= 1) {
      setCandy(response.data);
    }
  }

  useEffect(() => {
    fetchCandy();
  }, []);

  return (
    <CandyContext.Provider
      value={{
        candy,
        fetchCandy,
      }}
    >
      {children}
    </CandyContext.Provider>
  );
};
