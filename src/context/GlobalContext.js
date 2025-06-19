import React, { createContext, useState} from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {

  const [rendaMensal, setRendaMensal] = useState('');
  const [metaMensal, setMetaMensal] = useState('');
  
  
  return (
    <GlobalContext.Provider value={{ rendaMensal, setRendaMensal, metaMensal, setMetaMensal }}>
      {children}
    </GlobalContext.Provider>
  );
};