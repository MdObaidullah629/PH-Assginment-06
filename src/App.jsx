import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
import Banner from "./components/Banner";
import ProductCard from "./components/ProductCard";
import CartItem from "./components/CartItem";
// import Footer from "./components/Footer";
import StepsSection from "./components/StepsSection"; 
import Pricing from "./components/Pricing"; 
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  const [view, setView] = useState("product"); // 'product' অথবা 'cart' ভিউ কন্ট্রোল করার জন্য

  // JSON থেকে প্রোডাক্ট ডেটা লোড করা
  useEffect(() => {
    fetch("./products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  // কার্টে প্রোডাক্ট যোগ করার ফাংশন
  const handleAddToCart = (product) => {
    if (cart.find((item) => item.id === product.id)) {
      toast.error("Already added to cart!");
    } else {
      setCart([...cart, product]);
      toast.success(`${product.name} added to cart!`);
    }
  };

  // কার্ট থেকে প্রোডাক্ট রিমুভ করার ফাংশন
  const handleRemoveFromCart = (id) => {
    setCart(cart.filter((item) => item.id !== id));
    toast.warn("Item removed from cart");
  };

  // চেকআউট বা পারচেজ ফাংশন
  const handleCheckout = () => {
    setCart([]);
    toast.success("Purchase successful! Cart cleared.");
    setView("product");
  };

  return (
    <div className="min-h-screen bg-white">
      {/* নেভিগেশন বার */}
      <Navbar cartCount={cart.length} />
      
      {/* ব্যানার সেকশন */}
      <Banner />

      {/* মেইন কন্টেন্ট এরিয়া */}
      <main className="container mx-auto px-4 md:px-12 py-20">
        
        {/* সেকশন টাইটেল এবং ডেসক্রিপশন */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-black text-[#1A1919] mb-4">
            Premium Digital Tools
          </h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
            Choose from our curated collection of premium digital products designed 
            to boost your productivity and creativity.
          </p>
        </div>

        {/* টগল বাটন (Products vs Cart) */}
        <div className="flex justify-center mb-16">
          <div className="inline-flex p-1.5 bg-white border border-gray-100 rounded-full shadow-sm">
            <button 
              onClick={() => setView("product")}
              className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300
                ${view === "product" ? "bg-[#9538E2] text-white shadow-lg" : "text-gray-500 hover:text-[#9538E2]"}`}
            >
              Products
            </button>
            <button 
              onClick={() => setView("cart")}
              className={`px-10 py-3 rounded-full font-bold text-sm transition-all duration-300
                ${view === "cart" ? "bg-[#9538E2] text-white shadow-lg" : "text-gray-500 hover:text-[#9538E2]"}`}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {/* কন্ডিশনাল রেন্ডারিং: প্রোডাক্ট গ্রিড অথবা কার্ট ভিউ */}
        {view === "product" ? (
          <>
            {/* প্রোডাক্ট কার্ড গ্রিড */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {products.map((p) => (
                <ProductCard 
                  key={p.id} 
                  product={p} 
                  handleAddToCart={handleAddToCart} 
                  isAdded={cart.some(item => item.id === p.id)} 
                />
              ))}
            </div>

            {/* প্রোডাক্ট গ্রিডের ঠিক নিচেই Steps Section */}
            <div className="mt-28">
              <StepsSection />
            </div>

            {/* Steps Section এর ঠিক নিচেই Pricing Section */}
            <div className="mt-20">
              <Pricing />
            </div>
          </>
        ) : (
          /* কার্ট সেকশন ডিজাইন */
          <div className="max-w-5xl mx-auto">
            <h3 className="text-2xl font-extrabold mb-8 text-[#1A1919]">Your Cart</h3>
            
            {cart.length > 0 ? (
              <div className="bg-white p-2 rounded-[32px]">
                <div className="space-y-4 mb-10">
                  {cart.map((item) => (
                    <CartItem 
                      key={item.id} 
                      item={item} 
                      handleRemove={handleRemoveFromCart} 
                    />
                  ))}
                </div>

                {/* টোটাল এবং চেকআউট বাটন */}
                <div className="border-t border-gray-100 pt-8 mt-10">
                  <div className="flex justify-between items-center mb-8 px-4">
                    <span className="text-gray-400 text-lg font-bold">Total:</span>
                    <span className="text-4xl font-black text-[#1A1919]">
                      ${cart.reduce((total, item) => total + item.price, 0)}
                    </span>
                  </div>
                  <button 
                    onClick={handleCheckout}
                    className="w-full bg-[#9538E2] text-white py-5 rounded-[24px] font-bold text-xl shadow-xl shadow-purple-100 hover:bg-[#7b2dbb] transition-all transform active:scale-[0.98]"
                  >
                    Proceed To Checkout
                  </button>
                </div>
              </div>
            ) : (
              /* কার্ট খালি থাকলে যা দেখাবে */
              <div className="text-center py-32 bg-gray-50 rounded-[32px] border-2 border-dashed border-gray-200">
                <p className="text-gray-400 text-xl italic font-medium">Your cart is currently empty.</p>
                <button 
                  onClick={() => setView("product")}
                  className="mt-6 text-[#9538E2] font-bold hover:underline"
                >
                  Go back to shop
                </button>
              </div>
            )}
          </div>
        )}
      </main>

      {/* ফুটার সেকশন */}
      <Footer />

      {/* টোস্ট নোটিফিকেশন কন্টেইনার */}
      <ToastContainer 
        position="top-center" 
        autoClose={2000} 
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;