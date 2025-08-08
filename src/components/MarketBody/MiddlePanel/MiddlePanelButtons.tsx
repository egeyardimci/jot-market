function MiddlePanelButtons() {
  return (
      <div className="w-full h-full flex flex-row items-start justify-start gap-[8px] mb-[16px] mt-[16px]">
        <button className="w-[60px] h-[30px] bg-[#1EA4CE] text-white rounded-[2px] flex items-center justify-center">
          <span className="text-[13px]"> mug </span>
        </button>
        <button className="w-[60px] h-[30px] bg-[#F2F0FD] text-[#1EA4CE] rounded-[2px] flex items-center justify-center">
          <span className="text-[13px]"> shirt </span>
        </button>
      </div>
  );
}
export default MiddlePanelButtons;