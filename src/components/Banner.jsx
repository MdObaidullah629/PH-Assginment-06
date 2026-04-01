import bannerImg from '../assets/banner.png'; 
import { FaPlayCircle } from "react-icons/fa";

const Banner = () => {
  return (
    <div className="bg-white">
      {/* নেভবারের পরে হালকা গ্যাপের জন্য py-16 বা mt-10 ব্যবহার করা হয়েছে */}
      <div className="container mx-auto px-4 md:px-12 py-16 md:py-24 flex flex-col md:flex-row items-center justify-between gap-12">
        
        {/* বাম পাশের টেক্সট কন্টেন্ট (সাইজ কিছুটা ছোট করা হয়েছে) */}
        <div className="w-full md:w-1/2 text-left">
          {/* ছোট অ্যানিমেটেড ব্যাজ */}
          <div className="inline-flex items-center gap-2 bg-purple-50 text-[#9538E2] px-3 py-1 rounded-full mb-6 border border-purple-100">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#9538E2]"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-wider">New: AI-Powered Tools Available</span>
          </div>

          {/* হেডিং - টেক্সট সাইজ ইমেজের সাথে মিল রেখে অ্যাডজাস্ট করা */}
          <h1 className="text-4xl md:text-6xl font-extrabold text-[#1A1919] leading-tight mb-5">
            Supercharge Your <br /> 
            <span className="text-[#9538E2]">Digital Workflow</span>
          </h1>

          {/* ডেসক্রিপশন - সাইজ এবং অপাসিটি ঠিক করা হয়েছে */}
          <p className="text-gray-500 text-base md:text-lg max-w-md mb-8 leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today.
          </p>

          {/* বাটনসমূহ */}
          <div className="flex flex-wrap items-center gap-4">
            <button className="bg-[#9538E2] text-white px-7 py-3.5 rounded-full font-bold text-base shadow-lg shadow-purple-200 hover:bg-[#7b2dbb] transition-all">
              Explore Products
            </button>
            <button className="flex items-center gap-2 text-[#9538E2] border border-purple-200 px-7 py-3.5 rounded-full font-bold text-base hover:bg-purple-50 transition-all">
              <FaPlayCircle className="text-xl" />
              Watch Demo
            </button>
          </div>
        </div>

        {/* ডান পাশের ইমেজ (banner.png ব্যবহার করা হয়েছে) */}
        <div className="w-full md:w-1/2">
          <div className="relative">
            {/* মেইন ইমেজ কন্টেইনার */}
            <div className="rounded-[32px] overflow-hidden border-8 border-white shadow-2xl relative z-10">
              <img 
                src={bannerImg} 
                alt="Digital Workflow Banner" 
                className="w-full h-auto object-cover transform hover:scale-105 transition-transform duration-500"
              />
            </div>
            {/* ব্যাকগ্রাউন্ড ডেকোরেশন */}
            <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-purple-100 rounded-full blur-3xl -z-0 opacity-60"></div>
          </div>
        </div>
      </div>

      {/* স্ট্যাটাস সেকশন (ইমেজের মতো নিচের পার্পল বার) */}
      <div className="bg-[#9538E2] mx-4 md:mx-10 mb-20 rounded-[40px] py-14 px-10 shadow-xl shadow-purple-100">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          <div className="text-center md:border-r border-white/20 px-4">
            <h2 className="text-5xl font-black text-white mb-2">50K+</h2>
            <p className="text-purple-100 text-sm font-medium uppercase tracking-widest">Active Users</p>
          </div>
          <div className="text-center md:border-r border-white/20 px-4">
            <h2 className="text-5xl font-black text-white mb-2">200+</h2>
            <p className="text-purple-100 text-sm font-medium uppercase tracking-widest">Premium Tools</p>
          </div>
          <div className="text-center px-4">
            <h2 className="text-5xl font-black text-white mb-2">4.9</h2>
            <p className="text-purple-100 text-sm font-medium uppercase tracking-widest">User Rating</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;