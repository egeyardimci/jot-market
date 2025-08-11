import { useDispatch, useSelector } from "react-redux";
import type { AppDispatch, RootState } from "../../../store";
import { setItemType } from "../../../store/market/marketSlice";
import { capitalizeFirst } from "../../../utils";

function MiddlePanelButtons() {
  const selectedItemType = useSelector((state: RootState) => state.market.selectedItemType);
  const itemTypes = useSelector((state: RootState) => state.market.itemTypes);
  const dispatch = useDispatch<AppDispatch>();

  const handleSelectType = (type: string) =>{
    dispatch(setItemType(type));
  }

  return (
      <div className="w-full h-full flex flex-row items-start justify-start gap-2 mb-3 md:mb-[16px] mt-3 md:mt-[16px]">
        {itemTypes.map((type)  => (
          <button key={type} className={`cursor-pointer w-14 md:w-[60px] h-7 md:h-[30px] ${selectedItemType === type ? "bg-[#1EA4CE] text-white" : "bg-[#F2F0FD] text-[#1EA4CE]"} rounded-[2px] flex items-center justify-center`}
          onClick={() => handleSelectType(type)}>
            <span className="text-xs md:text-[13px]"> {capitalizeFirst(type)} </span>
          </button>
        ))}
      </div>
  );
}
export default MiddlePanelButtons;