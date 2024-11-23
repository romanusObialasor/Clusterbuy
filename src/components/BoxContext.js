import React, { createContext, useState, useContext } from "react";

// Create Context
const BoxContext = createContext();

// Provider Component
export const BoxProvider = ({ children }) => {
  const [isScaled, setIsScaled] = useState(false);
  return (
    <BoxContext.Provider value={{ isScaled, setIsScaled }}>
      {children}
    </BoxContext.Provider>
  );
};

// Hook to Use Context
export const useBoxContext = () => useContext(BoxContext);
