import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";

function MarketBody() {
  return (
    <div className=" bg-gray-100 min-w-[860px] w-full flex-1 flex flex-row items-start justify-center bg-[#FAFAFA] pr-[104px] pl-[104px] gap-[16px] pt-[39px]">
      <LeftPanel />
      <MiddlePanel />
      <RightPanel />
    </div>
  );
}

export default MarketBody;