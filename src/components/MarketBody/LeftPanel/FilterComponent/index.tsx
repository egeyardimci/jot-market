import { useDispatch, useSelector } from "react-redux";
import { type AppDispatch, type RootState } from "../../../../store";
import FilterOption from "./FilterOption";
import { capitalizeFirst } from "../../../../utils";
import { useMemo } from "react";
import { toggleOption, type FilterOptionType } from "../../../../store/market/marketSlice";

interface FilterComponentProps {
  name?: string;
  id: string;
}

function FilterComponent({name, id}: FilterComponentProps) {

  const filterOptions = useSelector((state: RootState) => state.market[`${id}` as keyof RootState['market']]) as FilterOptionType[];
  const selectedOptions = useSelector((state: RootState) => state.market[`selected${capitalizeFirst(id)}` as keyof RootState['market']]) as string[];
  const selectedOptionsSet = useMemo(() => new Set(selectedOptions), [selectedOptions]);
  const dispatch = useDispatch<AppDispatch>();

  const handleToggle = (option: string) => {
    console.log(option,"asDASDASD")
    dispatch(toggleOption({ type: id, payload: option }));
  };

  return (
    <div className="w-full h-full bg-white border border-gray-200 lg:border-r lg:border-l-0 lg:border-t-0 lg:border-b-0 rounded lg:rounded-none">

      {/* Search Input */}
      <div className="p-3 lg:p-4">
        <div className="relative">
          <input
            type="text"
            placeholder={`Search ${name || 'products'}`}
            className="w-full px-2 lg:px-3 py-2 border-2 border-neutral-200 rounded-sm text-xs lg:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-[#1EA4CE]"
          />
        </div>
        <div className="overflow-y-scroll overflow-x-auto max-h-[145px] p-[2px]">
          {filterOptions?.map((option) => (
            <FilterOption
              key={option.id}
              label={option.id}
              isSelected={selectedOptionsSet.has(option.id)}
              count={option.count}
              onToggle={() => handleToggle(option.id)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
export default FilterComponent;