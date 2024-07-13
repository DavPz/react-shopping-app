import { createContext, useState } from 'react';

export const ShoppingCartContext = createContext();

export const ShoppingCartProvider = ({ children }) => {
  const [count, setCount] = useState(0);

  const [isProductDetailOpen, setIsProductDetailOpen] = useState(false);
  const handleProductDetailOpen = () => setIsProductDetailOpen(true);
  const handleProductDetailClose = () => setIsProductDetailOpen(false);

  const [productDetail, setProductDetail] = useState({});

  const [cartProducts, setCartProducts] = useState([]);

  return (
    <ShoppingCartContext.Provider
      value={{
        count,
        setCount,
        isProductDetailOpen,
        handleProductDetailClose,
        handleProductDetailOpen,
        productDetail,
        setProductDetail,
        cartProducts,
        setCartProducts,
      }}
    >
      {children}
    </ShoppingCartContext.Provider>
  );
};
