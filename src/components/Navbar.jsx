import { HiOutlineShoppingCart } from "react-icons/hi";

const Navbar = ({ cartCount }) => {
  return (
    <nav className="bg-white sticky top-0 z-50 py-4 shadow-sm border-b border-gray-100">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-12">
        
        {/* বাম সাইড: লোগো */}
        <div className="text-[#9538E2] text-3xl font-black tracking-tight">
          DigiTools
        </div>

        {/* মাঝখানে: মেনু আইটেমসমূহ */}
        <div className="hidden lg:flex items-center gap-8 font-semibold text-gray-600 text-sm">
          <a href="#" className="hover:text-[#9538E2] transition-colors">Products</a>
          <a href="#" className="hover:text-[#9538E2] transition-colors">Features</a>
          <a href="#" className="hover:text-[#9538E2] transition-colors">Pricing</a>
          <a href="#" className="hover:text-[#9538E2] transition-colors">Testimonials</a>
          <a href="#" className="hover:text-[#9538E2] transition-colors">FAQ</a>
        </div>

        {/* ডান সাইড: কার্ট, লগইন এবং গেট স্টার্টেড */}
        <div className="flex items-center gap-3 md:gap-6">
          {/* কার্ট আইকন */}
          <div className="relative cursor-pointer group">
            <HiOutlineShoppingCart className="text-2xl text-gray-700 group-hover:text-[#9538E2] transition-colors" />
            <span className="absolute -top-2 -right-2 bg-[#9538E2] text-white text-[10px] w-5 h-5 flex items-center justify-center rounded-full border-2 border-white font-bold">
              {cartCount || 0}
            </span>
          </div>

          {/* লগইন টেক্সট */}
          <a href="#" className="text-gray-700 font-bold text-sm hover:text-[#9538E2] transition-colors ml-2">
            Login
          </a>

          {/* গেট স্টার্টেড বাটন */}
          <button className="bg-[#9538E2] text-white rounded-full px-6 py-2 text-sm font-bold shadow-md hover:bg-[#7b2dbb] transition-all border-none">
            Get Started
          </button>
        </div>

      </div>
    </nav>
  );
};

export default Navbar;