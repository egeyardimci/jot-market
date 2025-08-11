import { useSelector } from "react-redux";
import ItemCard from "./ItemCard";
import MiddlePanelButtons from "./MiddlePanelButtons";
import Pagination from "./Pagination";
import type { RootState } from "../../../store";
import { useEffect, useState } from "react";
import type { MarketItem } from "../../../store/market/marketSlice";

function MiddlePanel() {
  const marketItems = useSelector((state: RootState) => state.market.items);
  const currentPage = useSelector((state: RootState) => state.market.page);
  const pageSize = useSelector((state: RootState) => state.market.pageSize);

  const [pageItems, setPageItems] = useState<MarketItem[]>(marketItems.slice((currentPage - 1) * pageSize, currentPage * pageSize));

  useEffect(() => {
    setPageItems(marketItems.slice((currentPage - 1) * pageSize, currentPage * pageSize));
  }, [currentPage, pageSize, marketItems]);

  return (
    <div className="w-full flex-1 flex flex-col items-start justify-center">
      <div className="w-full">
        <span className="text-[#6F6F6F] text-lg md:text-[20px]">Products</span>
        <MiddlePanelButtons />
      </div>
      <div className="bg-white w-full h-full grid grid-cols-2 sm:grid-cols-3 md:grid-cols-[repeat(auto-fit,minmax(160px,160px))] justify-center gap-3 md:gap-[24px] p-3 md:p-[20px] overflow-y-auto rounded-sm shadow-[0px_6px_24px_0px_rgba(93,62,188,0.04)] " >
        {pageItems.map((item) => (
          <ItemCard key={item.slug} item={item} />
        ))}
      </div>
      <Pagination currentPage={currentPage} totalPages={Math.ceil(marketItems.length / pageSize)} onPageChange={(page) => console.log(page)} />
    </div>

  );
}
export default MiddlePanel;
