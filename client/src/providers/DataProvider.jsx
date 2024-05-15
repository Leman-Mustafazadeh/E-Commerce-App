import { createContext, useState } from 'react';

export const DataContext = createContext();

const DataProvider = ({ children }) => {
    const [selectedProduct,setSelectedProduct] = useState(null)

  return (
    <DataContext.Provider value={{ selectedProduct,setSelectedProduct }}>
      {children}
    </DataContext.Provider>
  );
};

export default DataProvider;