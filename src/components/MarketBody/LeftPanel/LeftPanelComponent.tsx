interface LeftPanelComponentProps {
  name: string;
  children: React.ReactNode;
}

function LeftPanelComponent({ name, children }: LeftPanelComponentProps) {
  return (
    <div className="w-full">
      <div className="justify-center text-slate-500 text-xs font-semibold font-['Open_Sans'] mb-[12px]">{name}</div>
      {children}
    </div>
  )
}

export default LeftPanelComponent;