import React, { useContext } from 'react';
import './styles.css';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { ShoppingCartContext } from '../../Context';

const CheckoutSideMenu = () => {
  const { isCheckoutSideMenuOpen, handleCheckoutSideMenuClose } =
    useContext(ShoppingCartContext);

  return (
    <aside
      className={`${isCheckoutSideMenuOpen ? 'flex' : 'hidden'} w-[360px] product-side-menu top-[68px] flex flex-col fixed right-0 border border-black rounded-lg bg-white`}
    >
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold p-4">My Order</h2>

        <button className="p-4" onClick={() => handleCheckoutSideMenuClose()}>
          <XMarkIcon className="h-5 w-5" />
        </button>
      </div>

    </aside>
  );
};

export default CheckoutSideMenu;
