import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";

function MarketBody() {
  return (
    <div className="pb-[50px] md:pb-[100px] bg-[#FAFAFA] w-full flex-1 flex flex-col lg:flex-row items-start justify-center px-4 md:px-[104px] gap-4 lg:gap-[16px] pt-4 md:pt-[39px]">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  );
}

export default MarketBody;