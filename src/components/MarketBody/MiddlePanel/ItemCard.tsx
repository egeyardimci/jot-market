import { useDispatch } from "react-redux";
import type { AppDispatch } from "../../../store";
import PriceText from "../../PriceText";
import { addToCart } from "../../../store/cart/cartSlice";

function ItemCard({ item }: { item: { name: string; price: number; itemType: string } }) {
  const dispatch = useDispatch<AppDispatch>();

  const handleAddToCart = () => {
    dispatch(addToCart(item));
  };

  return (
    <div className="w-full h-[200px] md:h-[245px] flex flex-col items-start justify-between bg-white border border-gray-300 rounded-[2px]">
      <div className="w-full h-20 md:h-[124px] flex justify-center items-center">
        <img
          src={item.itemType === 'mug' ? "/jot-market/mug.svg" : "/jot-market/shirt.svg"} // TODO: refactor here for more flexibility
          alt={item.name}
          className="w-full h-full object-cover rounded-t-[2px]"
        />
      </div>
      <div className="flex items-start flex-col px-2 mt-1 md:mt-2">
        <PriceText price={item.price} />
        <span className="text-xs md:text-sm h-8 md:h-[40px] line-clamp-2">{item.name}</span>
      </div>
      <div className="flex items-center w-full px-2 pb-2 mt-1 md:mt-2">
        <button className="cursor-pointer w-full text-white bg-[#1EA4CE] rounded-[2px] py-1 text-sm"
        onClick={handleAddToCart}>
          Add
        </button>
      </div>
    </div>
  );
}

export default ItemCard;