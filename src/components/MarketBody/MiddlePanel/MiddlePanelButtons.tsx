function MiddlePanelButtons() {
  return (
      <div className="w-full h-full flex flex-row items-start justify-start gap-2 mb-3 md:mb-[16px] mt-3 md:mt-[16px]">
        <button className="w-14 md:w-[60px] h-7 md:h-[30px] bg-[#1EA4CE] text-white rounded-[2px] flex items-center justify-center">
          <span className="text-xs md:text-[13px]"> mug </span>
        </button>
        <button className="w-14 md:w-[60px] h-7 md:h-[30px] bg-[#F2F0FD] text-[#1EA4CE] rounded-[2px] flex items-center justify-center">
          <span className="text-xs md:text-[13px]"> shirt </span>
        </button>
      </div>
  );
}
export default MiddlePanelButtons;