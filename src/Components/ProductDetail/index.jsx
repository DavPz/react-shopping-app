import React, { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';

const ProductDetail = () => {
  const { productDetail, isProductDetailOpen, handleProductDetailClose } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${isProductDetailOpen ? 'flex' : 'hidden'} w-[360px] product-detail top-[68px] flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold p-4">Product Detail</h2>

        <button className="p-4" onClick={() => handleProductDetailClose()}>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

      <figure className="px-6">
        <img
          className="w-full h-full object-cover rounded-lg"
          src={productDetail.images && productDetail.images[0]}
          alt={productDetail.title}
        />
      </figure>
      <p className="flex flex-col p-6">
        <span className="font-medium text-2xl mb-2">
          ${productDetail.price}
        </span>
        <span className="font-medium text-md">{productDetail.title}</span>
        <span className="font-light text-sm text-justify">
          {productDetail.description}
        </span>
      </p>
    </aside>
  );
};

export default ProductDetail;
