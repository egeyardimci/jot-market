import ItemCard from "./ItemCard";
import MiddlePanelButtons from "./MiddlePanelButtons";
import Pagination from "./Pagination";

function MiddlePanel() {
  return (
    <div className="w-full flex-1 flex flex-col items-start justify-center">
      <div className="w-full">
        <span className="text-[#6F6F6F] text-lg md:text-[20px]">Products</span>
        <MiddlePanelButtons />
      </div>
      <div className="bg-white w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(160px,160px))] justify-center gap-3 md:gap-[24px] p-3 md:p-[20px] overflow-y-auto">
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
        <Pagination currentPage={1} totalPages={5} onPageChange={(page) => console.log(page)} />
    </div>

  );
}
export default MiddlePanel;
