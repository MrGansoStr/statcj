import { createContext, useContext, useState } from "react"

const MyContextSymbols = createContext();


export const ContextSymbols = ({ children }) => {
  const [wordToSearch, setWordToSearch] = useState("");
  const [openInfo, setOpenInfo] = useState(false);
  const [idSymbol, setIdSymbol] = useState(0);
  const [InfoSymbol, setInfoSymbol] = useState(null);
  return (<MyContextSymbols.Provider value={{ wordToSearch, setWordToSearch, openInfo, setOpenInfo, idSymbol, setIdSymbol, InfoSymbol, setInfoSymbol}}>{ children }</MyContextSymbols.Provider>);
}

export const UseContextSymbols = () => {
  const contextSymbol = useContext(MyContextSymbols);
  if(contextSymbol === undefined){
    throw new Error("UseContextSymbol se debe usar con el MyContextSymbolsProvider");
  }
  else{
    return contextSymbol;
  }
}