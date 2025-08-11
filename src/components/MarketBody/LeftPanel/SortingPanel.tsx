import { useDispatch, useSelector } from "react-redux";
import { sortingTypes } from "../../../store/market/sortingTypes";
import { type AppDispatch, type RootState } from "../../../store";
import { setSortingType } from "../../../store/market/marketSlice";

function SortingPanel() {

  const sortingOptions = Object.values(sortingTypes);
  const selectedOption = useSelector<RootState>((state) => state.market.sortingType);
  const dispatch = useDispatch<AppDispatch>();

  const onOptionSelect = (optionId: string) => {
    dispatch(setSortingType(optionId));
  };

  return (
    <div className="w-full bg-white rounded-[2px] p-4">
      {/* Options */}
      <div className="space-y-3">
        {sortingOptions.map((option) => (
          <label
            key={option.id}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <input
              type="radio"
              name="sorting"
              value={option.value}
              checked={selectedOption === option.value}
              onChange={() => onOptionSelect(option.id)}
              className="sr-only"
            />
            
            {/* Custom Radio Button */}
            <div className="relative flex-shrink-0">
              {selectedOption === option.id ? (
                <div className="w-5 h-5 rounded-full border-2 border-[#1EA4CE] bg-white flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="7" viewBox="0 0 10 7" fill="none">
                      <path d="M9 1L3.5 6L1 3.72727" stroke="#1EA4CE" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </div>
              ) : (
                <div className="w-5 h-5 rounded-full border-2 border-gray-300 bg-white group-hover:border-gray-400 transition-colors"></div>
              )}
            </div>
            
            {/* Label */}
            <span className={`text-sm select-none ${
              selectedOption === option.id 
                ? 'text-gray-900 font-medium' 
                : 'text-gray-600 group-hover:text-gray-800'
            }`}>
              {option.value}
            </span>
          </label>
        ))}
      </div>
    </div>
  );
}

export default SortingPanel;