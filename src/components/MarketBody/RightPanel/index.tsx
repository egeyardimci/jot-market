import PriceText from "../../PriceText";
import ProductItem from "./ProductItem";

function RightPanel() {
  return (
    <div className="mb-4 lg:mb-8 lg:sticky lg:top-[118px] z-50 w-full lg:min-w-[200px] lg:w-[296px] min-h-[250px] lg:min-h-[312px] h-full flex flex-col items-start justify-start border-solid border-4 lg:border-[8px] border-[#1EA4CE] rounded-[2px]">
      <ProductItem />
      <ProductItem />
      <ProductItem />

      <div className="w-full h-[87px] flex items-center justify-end bg-white">
        <div className="w-[92px] h-[50px] flex justify-center items-center border-solid border-[#1EA4CE] border-[2px] rounded-[2px] mr-[22px]">
          <PriceText price={99.99} />
        </div>
      </div>
    </div>
  );
}

export default RightPanel;
