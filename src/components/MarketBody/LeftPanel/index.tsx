import LeftPanelComponent from "./LeftPanelComponent";
import { LeftPanelItems } from "./LeftPanelItems";

function LeftPanel() {

  return (
    <div className="mb-4 lg:mb-8 z-50 w-full lg:min-w-[200px] lg:w-[296px] flex flex-col items-start justify-start gap-4 lg:gap-[16px]">
      {
        LeftPanelItems.map(item => (
          <LeftPanelComponent
            key={item.id} 
            name={item.name}
            >
            {item.component()}
            </LeftPanelComponent>
      ))}
    </div>
  );
}
export default LeftPanel;