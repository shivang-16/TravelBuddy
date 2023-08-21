import { createContext, useContext, useState } from 'react';

const CoordinateContext = createContext();

export const useCoordinateContext = () => useContext(CoordinateContext);

export const CoordinateProvider = ({ children }) => {
  const [coordinates, setCoordinates] = useState({ latitude: 0, longitude: 0 });

  return (
    <CoordinateContext.Provider value={{ coordinates, setCoordinates }}>
      {children}
    </CoordinateContext.Provider>
  );
};
