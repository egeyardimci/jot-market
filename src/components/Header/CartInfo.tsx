import { useSelector } from "react-redux";
import type { RootState } from "../../store";

function CartInfo() {

    const cartPrice: number = useSelector<RootState, number>((state) => state.cart.totalAmount);
  return (
    <div className="p-2 w-20 md:w-[129px] h-full bg-[#147594] mr-4 md:mr-[104px] flex justify-center items-center">
      <svg xmlns="http://www.w3.org/2000/svg" className="hidden sm:block w-5 h-5 md:w-6 md:h-6" viewBox="0 0 24 26" fill="none">
        <path d="M5.41174 9.46655H18.5884V21.0081H5.41174V9.46655Z" fill="white"/>
        <path d="M9.67188 4.65747H14.3412L15.2765 5.62625V9.4666L14.2645 9.46388V5.6242H9.75454V9.46388L8.72388 9.4666V5.6242L9.67188 4.65747Z" fill="white"/>
      </svg>
      <h2 className="ml-1 md:ml-2 text-sm md:text-base text-nowrap ">$ {cartPrice.toFixed(2)}</h2>
      {/* Cart details will be displayed here */}
    </div>
  );
}
export default CartInfo;