function PriceText({ price, color = '[#1EA4CE]' }: { price: number, color?: string }) {
  return (
    <span className={` text-[14px] font-semibold text-${color}`}>
      ${price.toFixed(2)}
    </span>
  );
}

export default PriceText;