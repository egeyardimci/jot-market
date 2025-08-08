import PriceText from "../../PriceText";

function ProductItem() {
  return (
    <div className="w-full h-16 lg:h-[75px] flex items-center justify-between bg-white p-2 lg:p-4 border-b border-gray-200 lg:pr-[22px] lg:pl-[22px]">
      <div className="flex items-start flex-col">
        <span className="text-sm lg:text-base">Product Name</span>
        <PriceText price={99.99} />
      </div>
      <div className="flex items-center">
        <button className="px-2 py-2 text-[#1EA4CE]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-3 lg:h-3" viewBox="0 0 12 12" fill="none">
            <path d="M10.5595 6.44124H1.44053C1.19727 6.44124 1 6.23965 1 5.99106C1 5.74247 1.19727 5.54087 1.44053 5.54087H10.5595C10.8027 5.54087 11 5.74247 11 5.99106C11 6.23965 10.8027 6.44124 10.5595 6.44124" stroke="#1EA4CE"/>
          </svg>
        </button>
        <div className="px-4 py-2 bg-[#1EA4CE] text-white">
          <span className="text-sm lg:text-base">1</span>
        </div>
        <button className="px-2 py-2 text-[#1EA4CE]">
          <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 lg:w-3 lg:h-3" viewBox="0 0 12 12" fill="none">
            <path d="M6.44053 10.6505L6.44053 6.44124H10.5595C10.8027 6.44124 11 6.23965 11 5.99106C11 5.74247 10.8027 5.54087 10.5595 5.54087H6.44053V1.33165C6.44053 1.08306 6.24326 0.88147 6 0.88147C5.75674 0.88147 5.55947 1.08306 5.55947 1.33165V5.54087L1.44053 5.54087C1.19727 5.54087 1 5.74247 1 5.99106C1 6.23965 1.19727 6.44124 1.44053 6.44124L5.55947 6.44124L5.55947 10.6505C5.55947 10.8991 5.75674 11.1006 6 11.1006C6.24326 11.1006 6.44053 10.8991 6.44053 10.6505" stroke="#1EA4CE"/>
          </svg>
        </button>
      </div>

    </div>
  );
}

export default ProductItem;