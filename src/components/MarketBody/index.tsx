import { useSelector } from "react-redux";
import LeftPanel from "./LeftPanel";
import MiddlePanel from "./MiddlePanel";
import RightPanel from "./RightPanel";
import PropagateLoader from "react-spinners/PropagateLoader";
import type { RootState } from "../../store";

function MarketBody() {
  
  const isLoading = useSelector((state: RootState) => state.market.loading);

  return (
    <>
      {isLoading && (
        <div className="w-full flex-1 flex flex-col lg:flex-row items-center justify-center">
        <PropagateLoader color="#1EA4CE" size={20}></PropagateLoader>
        </div>
      )}    
    
      {!isLoading && (
      <div className="pb-[50px] md:pb-[100px] bg-[#FAFAFA] w-full flex-1 flex flex-col lg:flex-row items-start justify-center px-4 md:px-[104px] gap-4 lg:gap-[16px] pt-4 md:pt-[39px]">
          <LeftPanel />
          <MiddlePanel />
          <RightPanel />
        </div>
      )}
      </>
  );
}

export default MarketBody;