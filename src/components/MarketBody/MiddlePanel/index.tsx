import ItemCard from "./ItemCard";
import MiddlePanelButtons from "./MiddlePanelButtons";

function MiddlePanel() {
  return (
    <div className="min-w-[200px] w-full flex-1 flex flex-col items-start justify-center">
      <div className="">
        <span className="text-[#6F6F6F] text-[20px]">Products</span>
        <MiddlePanelButtons />
      </div>
<div className="bg-white w-full h-full grid grid-cols-[repeat(auto-fit,minmax(160px,160px))] justify-center gap-[24px] p-[20px] overflow-y-auto">
        <ItemCard item={{ name: "Product dssdssdsdsdsdsdsd 1", price: 100 }} />
        <ItemCard item={{ name: "Product 2", price: 200 }} />
        <ItemCard item={{ name: "Product 3", price: 300 }} />
        <ItemCard item={{ name: "Product 4", price: 400 }} />
        <ItemCard item={{ name: "Product 1", price: 100 }} />
        <ItemCard item={{ name: "Product 2", price: 200 }} />
        <ItemCard item={{ name: "Product 3", price: 300 }} />
        <ItemCard item={{ name: "Product 4", price: 400 }} />
                <ItemCard item={{ name: "Product 1", price: 100 }} />
        <ItemCard item={{ name: "Product 2", price: 200 }} />
        <ItemCard item={{ name: "Product 3", price: 300 }} />
        <ItemCard item={{ name: "Product 4", price: 400 }} />
        <ItemCard item={{ name: "Product 1", price: 100 }} />
        <ItemCard item={{ name: "Product 2", price: 200 }} />
        <ItemCard item={{ name: "Product 3", price: 300 }} />
        <ItemCard item={{ name: "Product 4", price: 400 }} />
      </div>
    </div>
  );
}
export default MiddlePanel;
