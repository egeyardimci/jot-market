import type React from "react";
import FilterComponent from "./FilterComponent";
import SortingPanel from "./SortingPanel";

interface LeftPanelItem {
  id: string;
  name: string;
  component: () => React.ReactNode;
}

export const LeftPanelItems: LeftPanelItem[] = [
  {
    id: 'sorting',
    name: 'Sorting',
    component: () => <SortingPanel />
  },
  {
    id: 'brands',
    name: 'Brands',
    component: () => <FilterComponent name={'Brands'} id="brands" />
  },
  {
    id: 'tags',
    name: 'Tags',
    component: () => <FilterComponent name={'Tags'} id="tags" />
  }
];
