import CartInfo from "./CartInfo"
import HeaderLogo from "./HeaderLogo";

function Header() {
  return (
    <header className="sticky top-0 z-1000">
        <div className="w-full bg-[#1EA4CE] h-[77px] md:h-[77px] text-white flex justify-between items-center px-4 md:px-0">
          <HeaderLogo />
          <CartInfo />
        </div>
    </header>
  );
}

export default Header