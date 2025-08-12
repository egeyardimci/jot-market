import { useState } from 'react';
import PriceText from "../../PriceText";
import ProductItem from "./ProductItem";
import { useDispatch, useSelector } from 'react-redux';
import type { AppDispatch, RootState } from '../../../store';
import { type CartItem } from '../../../store/cart/cartSlice';
import { ShoppingBag } from 'lucide-react';
import { openModal } from '../../../store/modals/modalsSlice';

function RightPanel() {
  const [isHovered, setIsHovered] = useState(false);
  const cartItems: CartItem[] = useSelector<RootState, CartItem[]>((state) => state.cart.items);
  const cartPrice: number = useSelector<RootState, number>((state) => state.cart.totalAmount);
  const dispatch = useDispatch<AppDispatch>();

  const handleCheckout = () => {
    dispatch(openModal('checkout'));
  };

  return (
    <div className="sticky top-4 lg:top-[118px] mb-4 lg:mb-8 z-50 w-full lg:min-w-[200px] lg:w-[296px] max-h-[calc(100vh-2rem)] lg:max-h-[calc(100vh-10rem)] flex flex-col items-start justify-start border-solid border-4 lg:border-[8px] border-[#1EA4CE] rounded-[2px] bg-white">
      {/* Scrollable items container with hidden scrollbar */}
      <div className="flex-1 overflow-y-auto w-full scrollbar-hide">
        {cartItems.map((cartItem) => (
          <ProductItem key={cartItem.item.slug} cartItem={cartItem} />
        ))}
      </div>

      {/* Fixed checkout section */}
      <div className="w-full h-[87px] flex items-center justify-between bg-white border-t border-gray-200 flex-shrink-0">
        <div className='ml-[22px]'>
          <ShoppingBag color='#1EA4CE' size={46} />
        </div>
        <button
          className={`w-[92px] h-[50px] flex justify-center items-center border-solid border-[2px] rounded-[2px] mr-[22px] transition-all duration-300 ease-in-out overflow-hidden relative ${
            isHovered 
              ? 'bg-[#1EA4CE] border-[#1EA4CE] text-white' 
              : 'bg-white border-[#1EA4CE] text-[#1EA4CE]'
          }`}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div className="relative w-full h-full flex items-center justify-center">
            {/* Price Text */}
            <div 
              className={`cursor-pointer absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                isHovered 
                  ? 'transform -translate-y-full opacity-0' 
                  : 'transform translate-y-0 opacity-100'
              }`}
            >
              <PriceText price={cartPrice} />
            </div>
            
            {/* Checkout Text */}
            <div 
              className={`cursor-pointer absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out font-medium text-sm cursor-pointer ${
                isHovered 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-full opacity-0'
              }`}
              onClick={handleCheckout}
            >
              Checkout
            </div>
          </div>
        </button>
      </div>
    </div>
  );
}

export default RightPanel;