interface Tag {
  id: string;
  name: string;
  count: number;
}

interface TagsFilterProps {
  tags: Tag[];
  onTagSelect: (tagId: string) => void;
  selectedTag: string;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  totalItems: number;
}

function FilterComponent({ 
  tags, 
  onTagSelect, 
  selectedTag, 
  searchQuery, 
  onSearchChange,
}: TagsFilterProps) {
  const filteredTags = tags.filter(tag => 
    tag.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-full h-full bg-white border border-gray-200 lg:border-r lg:border-l-0 lg:border-t-0 lg:border-b-0 rounded lg:rounded-none">

      {/* Search Input */}
      <div className="p-3 lg:p-4">
        <div className="relative">
          <input
            type="text"
            placeholder="Search tag"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="w-full px-2 lg:px-3 py-2 border-2 border-neutral-200 rounded-sm text-xs lg:text-sm placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-[#1EA4CE] focus:border-[#1EA4CE]"
          />
        </div>
        <div className="overflow-y-scroll overflow-x-auto max-h-[145px] p-[2px]">
        <div className="flex gap-2 flex-row justify-start items-center mt-[18px]">
            <div className="w-5 h-5 bg-white rounded-sm shadow-[0px_1px_7px_0px_rgba(93,56,192,0.40)]" />
            <span className="justify-center text-neutral-600 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> TAG </span>
            <span className="justify-center text-neutral-400 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> (18) </span>
        </div>
                <div className="flex gap-2 flex-row justify-start items-center mt-[18px]">
            <div className="w-5 h-5 bg-white rounded-sm shadow-[0px_1px_7px_0px_rgba(93,56,192,0.40)]" />
            <span className="justify-center text-neutral-600 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> TAG </span>
            <span className="justify-center text-neutral-400 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> (18) </span>
        </div>
                <div className="flex gap-2 flex-row justify-start items-center mt-[18px]">
            <div className="w-5 h-5 bg-white rounded-sm shadow-[0px_1px_7px_0px_rgba(93,56,192,0.40)]" />
            <span className="justify-center text-neutral-600 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> TAG </span>
            <span className="justify-center text-neutral-400 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> (18) </span>
        </div>
                <div className="flex gap-2 flex-row justify-start items-center mt-[18px]">
            <div className="w-5 h-5 bg-white rounded-sm shadow-[0px_1px_7px_0px_rgba(93,56,192,0.40)]" />
            <span className="justify-center text-neutral-600 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> TAG </span>
            <span className="justify-center text-neutral-400 text-sm font-normal font-['Open_Sans'] leading-none tracking-tight"> (18) </span>
        </div>
        </div>
      </div>
    </div>
  );
}
export default FilterComponent;