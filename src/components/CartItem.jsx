const CartItem = ({ item, handleRemove }) => {
  return (
    <div className="bg-[#F9FAFB]/50 p-6 rounded-3xl flex items-center justify-between mb-4 border border-gray-100 hover:bg-white hover:shadow-md transition-all duration-300">
      
      {/* বাম পাশ: ইমেজ এবং টেক্সট */}
      <div className="flex items-center gap-6">
        {/* আইকন কন্টেইনার */}
        <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center border border-gray-100 shadow-sm">
          <img 
            src={item.icon} 
            alt={item.name} 
            className="w-12 h-12 object-contain" 
          />
        </div>

        {/* নাম এবং প্রাইস */}
        <div>
          <h4 className="text-xl font-extrabold text-[#1A1919] mb-1">{item.name}</h4>
          <p className="text-gray-500 font-medium text-lg">${item.price}</p>
        </div>
      </div>

      {/* ডান পাশ: রিমুভ বাটন (ইমেজের মতো লাল টেক্সট বাটন) */}
      <button 
        onClick={() => handleRemove(item.id)} 
        className="text-[#FF4C60] font-bold text-sm hover:underline transition-all pr-4"
      >
        Remove
      </button>
    </div>
  );
};

export default CartItem;