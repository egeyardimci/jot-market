import { Check } from "lucide-react";

interface FilterOptionProps {
  label: string;
  isSelected: boolean;
  count: number;
  onToggle: () => void;
}

const FilterOption = ({ label, isSelected , count, onToggle }: FilterOptionProps) => {
  if (isSelected) return (
    <div className="cursor-pointer flex gap-2 flex-row justify-start items-center mt-[18px]" onClick={onToggle}>
        <div className="flex justify-center items-center w-5 h-5 bg-[#1EA4CE] rounded-sm ">
          <Check size={16} color="white" />
        </div>
        <span className="justify-center text-neutral-600 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> {label} </span>
        <span className="justify-center text-neutral-400 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> ({count}) </span>
    </div>
  );

  return (
      <div className="cursor-pointer flex gap-2 flex-row justify-start items-center mt-[18px]" onClick={onToggle}>
        <div className="w-5 h-5 bg-gray-300 rounded-sm" />
        <span className="justify-center text-neutral-600 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> {label} </span>
        <span className="justify-center text-neutral-400 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> ({count}) </span>
      </div>
  )
};

export default FilterOption;
