import React, { useContext } from 'react';
import { ShoppingCartContext } from '../../Context';
import { PlusIcon } from '@heroicons/react/24/outline';

const Card = (props) => {
  const { item } = props;
  const { count, setCount, setProductDetail, handleProductDetailOpen, cartProducts, setCartProducts } =
    useContext(ShoppingCartContext);

  const showProductDetail = (productDetail) => {
    setProductDetail(productDetail);
    handleProductDetailOpen();
  };

  const addToCart = (productData) => {
    setCount(count + 1);
    setCartProducts([...cartProducts, productData]); 
    console.log(cartProducts);
  }

  return (
    <div
      className="bg-white cursor-pointer w-56 h-60 rounded-lg"
      onClick={() => showProductDetail(item)}
    >
      <figure className="relative mb-2 w-full h-4/5">
        <span className="absolute bottom-0 left-0 bg-white/60 z-10   rounded-lg text-black text-xs m-2 px-3 py-0.5">
          {item.category.name}
        </span>
        <img
          className="w-full h-full object-cover rounded-lg"
          src={item.images[0]}
          alt={item.title}
        />
        <div
          className="absolute top-0 right-0 flex justify-center items-center bg-white w-6 h-6 rounded-full m-2 p-1"
          onClick={() => addToCart(item)}
        >
          <PlusIcon className="h-4 w-4" />
        </div>
      </figure>
      <p className="flex justify-between">
        <span className="text-sm font-light">{item.title}</span>
        <span className="text-lg font-medium">${item.price}</span>
      </p>
    </div>
  );
};

export default Card;
