import { useState } from 'react';
import PriceText from "../../PriceText";
import ProductItem from "./ProductItem";

function RightPanel() {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mb-4 lg:mb-8 lg:sticky lg:top-[118px] z-50 w-full lg:min-w-[200px] lg:w-[296px] min-h-[250px] lg:min-h-[312px] h-full flex flex-col items-start justify-start border-solid border-4 lg:border-[8px] border-[#1EA4CE] rounded-[2px]">
      <ProductItem />
      <ProductItem />
      <ProductItem />

      <div className="w-full h-[87px] flex items-center justify-end bg-white">
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
              className={` cursor-pointer absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out ${
                isHovered 
                  ? 'transform -translate-y-full opacity-0' 
                  : 'transform translate-y-0 opacity-100'
              }`}
            >
              <PriceText price={99.99} />
            </div>
            
            {/* Checkout Text */}
            <div 
              className={`cursor-pointer absolute inset-0 flex items-center justify-center transition-all duration-300 ease-in-out font-medium text-sm cursor-pointer${
                isHovered 
                  ? 'transform translate-y-0 opacity-100' 
                  : 'transform translate-y-full opacity-0'
              }`}
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