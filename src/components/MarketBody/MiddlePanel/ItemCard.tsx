import PriceText from "../../PriceText";

function ItemCard({ item }: { item: { name: string; price: number } }) {
  return (
    <div className="min-w-[124px] flex-1 max-w-[200px] h-[245px] flex flex-col items-start justify-between bg-white border border-gray-300 rounded-[2px]">
      <div className="w-full h-[124px] flex justify-center items-center">
        <img 
          src={`https://picsum.photos/92/92?random=${item.name}`}
          alt={item.name}
          className="w-[92px] h-[92px] object-cover rounded-sm"
        />
      </div>
      <div className="flex items-start flex-col px-2 mt-2">
        <PriceText price={item.price} />
        <span className="text-sm h-[40px]">{item.name}</span>
      </div>
      <div className="flex items-center w-full px-2 pb-2 mt-2">
        <button className="w-full text-white bg-[#1EA4CE] rounded-[2px] py-1">
          Add
        </button>
      </div>
    </div>
  );
}

export default ItemCard;