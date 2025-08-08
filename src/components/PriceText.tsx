function PriceText({ price }: { price: number }) {
  return (
    <span className=" text-[14px] font-semibold text-[#1EA4CE]">
      ${price.toFixed(2)}
    </span>
  );
}

export default PriceText;