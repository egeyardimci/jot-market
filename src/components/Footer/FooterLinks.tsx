function FooterLinks() {
  return (
    <div className="flex flex-row justify-between sm:flex-row flex-wrap gap-4 sm:gap-6 lg:gap-8 text-xs sm:text-sm">
      <div className="flex flex-col gap-1 sm:gap-2">
        <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Shop</h3>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Categories</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">New Arrivals</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Best Sellers</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Sale</a>
      </div>

      <div className="flex sm:items-center lg:items-start flex-col gap-1 sm:gap-2">
        <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Customer Service</h3>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Contact Us</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Help Center</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Returns</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Shipping Info</a>
      </div>

      <div className="flex sm:items-center lg:items-start flex-col gap-1 sm:gap-2">
        <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">Company</h3>
        <a href="#" className="text-white/80 hover:text-white transition-colors">About Us</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Careers</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Press</a>
        <a href="#" className="text-white/80 hover:text-white transition-colors">Blog</a>
      </div>
    </div>
  );
}

export default FooterLinks;