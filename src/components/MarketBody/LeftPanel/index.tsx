import { useState } from "react";
import FilterComponent from "./FilterComponent";
import SortingPanel from "./SortingPanel";
import LeftPanelComponent from "./LeftPanelComponent";

function LeftPanel() {

  const [selectedTag, setSelectedTag] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');

  const sampleTags = [
    { id: 'beach', name: 'Beach', count: 9 },
    { id: 'people', name: 'People', count: 9 },
    { id: 'bicycle', name: 'Bicycle', count: 0 },
    { id: 'nature', name: 'Nature', count: 15 },
    { id: 'city', name: 'City', count: 7 },
  ];

  const handleTagSelect = (tagId: string) => {
    setSelectedTag(tagId);
    console.log('Selected tag:', tagId);
  };

  const handleSearchChange = (query: string) => {
    setSearchQuery(query);
  };

  const [selectedSort, setSelectedSort] = useState('price-low-high');

  const sortingOptions = [
    { id: 'price-low-high', label: 'Price low to high' },
    { id: 'price-high-low', label: 'Price high to low' },
    { id: 'new-old', label: 'New to old' },
    { id: 'old-new', label: 'Old to new' },
  ];

  const handleSortChange = (optionId: string) => {
    setSelectedSort(optionId);
    console.log('Selected sorting:', optionId);
  };

  return (
    <div className="min-w-[200px] w-[296px] flex flex-col items-start justify-start gap-[16px]">
      <LeftPanelComponent heading="Sorting">
        <SortingPanel
            options={sortingOptions}
            selectedOption={selectedSort}
            onOptionSelect={handleSortChange}
        />
      </LeftPanelComponent>
      <LeftPanelComponent heading="Filtering">
        <FilterComponent
          tags={sampleTags}
          onTagSelect={handleTagSelect}
          selectedTag={selectedTag}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          totalItems={24}
        />
      </LeftPanelComponent>
      <LeftPanelComponent heading="Filtering">
        <FilterComponent
          tags={sampleTags}
          onTagSelect={handleTagSelect}
          selectedTag={selectedTag}
          searchQuery={searchQuery}
          onSearchChange={handleSearchChange}
          totalItems={24}
        />
      </LeftPanelComponent>
    </div>
  );
}
export default LeftPanel;