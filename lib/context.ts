import { createContext, useContext } from "react";
import { GlobalContext } from "./type";

const globalContext = createContext<GlobalContext>({
  data: [],
});

const useGlobalContext = () => useContext(globalContext);

export { globalContext, useGlobalContext };
