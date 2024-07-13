import React from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/outline';

const ProductDetail = () => {
  return (
    <aside className="w-[360px] product-detail top-[68px] flex flex-col fixed right-0 border border-black rounded-lg bg-white">
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold p-4">Product Detail</h2>

        <button className="p-4">
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>
    </aside>
  );
};

export default ProductDetail;
