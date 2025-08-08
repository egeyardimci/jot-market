import CartInfo from "./CartInfo"
import HeaderLogo from "./HeaderLogo";

function Header() {
  return (
    <header>
        <div className="min-w-[860px] w-full bg-[#1EA4CE] h-[77px] text-white flex justify-between items-center">
          <HeaderLogo />
          <CartInfo />
        </div>
    </header>
  );
}

export default Header