const ProductCard = ({ product, handleAddToCart, isAdded }) => {
  return (
    <div className="bg-white p-8 rounded-[32px] border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-xl transition-all duration-300 relative group">
      
      {/* কার্ডের উপরের ট্যাগ (Best Seller/Popular) */}
      <div className="absolute top-6 right-6">
        <span className="bg-purple-50 text-[#9538E2] px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider border border-purple-100">
          {product.tagType}
        </span>
      </div>

      <div>
        {/* গোল আইকন বক্স (আপনার স্ক্রিনশট অনুযায়ী) */}
        <div className="w-16 h-16 bg-gray-50 rounded-2xl flex items-center justify-center mb-8 border border-gray-100 group-hover:bg-purple-50 transition-colors">
          <img 
            src={product.icon} 
            alt={product.name} 
            className="w-10 h-10 object-contain" 
          />
        </div>

        {/* নাম ও ডেসক্রিপশন */}
        <h3 className="text-2xl font-extrabold text-[#1A1919] mb-3">{product.name}</h3>
        <p className="text-gray-500 text-sm mb-6 leading-relaxed">
          {product.description}
        </p>

        {/* প্রাইস সেকশন */}
        <div className="mb-6">
          <span className="text-3xl font-black text-[#1A1919]">${product.price}</span>
          <span className="text-gray-400 font-medium italic ml-1">/{product.period === 'monthly' ? 'Mo' : 'One-Time'}</span>
        </div>

        {/* ফিচার লিস্ট */}
        <ul className="space-y-3 mb-8">
          {product.features.map((feature, index) => (
            <li key={index} className="flex items-center gap-3 text-sm text-gray-600 font-medium">
              <span className="text-[#9538E2] text-xs">✔</span> {feature}
            </li>
          ))}
        </ul>
      </div>

      {/* বাটন */}
      <button 
        onClick={() => handleAddToCart(product)}
        disabled={isAdded}
        className={`w-full py-4 rounded-2xl font-bold text-lg transition-all border-none
          ${isAdded 
            ? "bg-gray-100 text-gray-400 cursor-not-allowed" 
            : "bg-[#9538E2] text-white shadow-lg shadow-purple-100 hover:bg-[#7b2dbb] active:scale-95"
          }`}
      >
        {isAdded ? "Added to Cart" : "Buy Now"}
      </button>
    </div>
  );
};

export default ProductCard;