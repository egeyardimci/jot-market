import PriceText from "../../PriceText";

function ItemCard({ item }: { item: { name: string; price: number } }) {
  return (
    <div className="w-full h-[200px] md:h-[245px] flex flex-col items-start justify-between bg-white border border-gray-300 rounded-[2px]">
      <div className="w-full h-20 md:h-[124px] flex justify-center items-center">
        <img 
          src={`https://picsum.photos/92/92?random=${item.name}`}
          alt={item.name}
          className="w-16 h-16 md:w-[92px] md:h-[92px] object-cover rounded-sm"
        />
      </div>
      <div className="flex items-start flex-col px-2 mt-1 md:mt-2">
        <PriceText price={item.price} />
        <span className="text-xs md:text-sm h-8 md:h-[40px] line-clamp-2">{item.name}</span>
      </div>
      <div className="flex items-center w-full px-2 pb-2 mt-1 md:mt-2">
        <button className="cursor-pointer w-full text-white bg-[#1EA4CE] rounded-[2px] py-1 text-sm">
          Add
        </button>
      </div>
    </div>
  );
}

export default ItemCard;