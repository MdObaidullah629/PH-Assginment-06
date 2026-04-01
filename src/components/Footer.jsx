// import React from 'react';
// import { FaInstagram, FaFacebookF, FaTwitter } from 'react-icons/fa'; // react-icons ব্যবহার করা হয়েছে

// const Footer = () => {
//     return (
//         <footer className="bg-[#0B1221] text-white py-20">
//             <div className="container mx-auto px-4 md:px-12">
//                 {/* Main Content Sections */}
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    
//                     {/* Brand & Description */}
//                     <div className="flex flex-col gap-6">
//                         <h2 className="text-4xl font-black">DigiTools</h2>
//                         <p className="text-gray-400 leading-relaxed text-lg max-w-sm">
//                             Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
//                         </p>
//                     </div>

//                     {/* Product Section */}
//                     <div className="flex flex-col gap-5">
//                         <h3 className="text-xl font-bold text-white">Product</h3>
//                         <div className="flex flex-col gap-3 text-gray-400">
//                             <a href="#" className="hover:text-white transition-colors">Features</a>
//                             <a href="#" className="hover:text-white transition-colors">Pricing</a>
//                             <a href="#" className="hover:text-white transition-colors">Templates</a>
//                             <a href="#" className="hover:text-white transition-colors">Integrations</a>
//                         </div>
//                     </div>

//                     {/* Company Section */}
//                     <div className="flex flex-col gap-5">
//                         <h3 className="text-xl font-bold text-white">Company</h3>
//                         <div className="flex flex-col gap-3 text-gray-400">
//                             <a href="#" className="hover:text-white transition-colors">About</a>
//                             <a href="#" className="hover:text-white transition-colors">Blog</a>
//                             <a href="#" className="hover:text-white transition-colors">Careers</a>
//                             <a href="#" className="hover:text-white transition-colors">Press</a>
//                         </div>
//                     </div>

//                     {/* Resources & Social Links */}
//                     <div className="flex flex-col gap-8">
//                         <div className="flex flex-col gap-5">
//                             <h3 className="text-xl font-bold text-white">Resources</h3>
//                             <div className="flex flex-col gap-3 text-gray-400">
//                                 <a href="#" className="hover:text-white transition-colors">Documentation</a>
//                                 <a href="#" className="hover:text-white transition-colors">Help Center</a>
//                                 <a href="#" className="hover:text-white transition-colors">Community</a>
//                                 <a href="#" className="hover:text-white transition-colors">Contact</a>
//                             </div>
//                         </div>
                        
//                         {/* Social Links */}
//                         <div className="flex flex-col gap-5">
//                             <h3 className="text-xl font-bold text-white">Social Links</h3>
//                             <div className="flex gap-4">
//                                 <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-all">
//                                     <FaInstagram size={20} />
//                                 </a>
//                                 <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-all">
//                                     <FaFacebookF size={20} />
//                                 </a>
//                                 <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-black hover:bg-gray-200 transition-all">
//                                     <FaTwitter size={20} />
//                                 </a>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 {/* Bottom Bar / Copyright Section */}
//                 <div className="border-t border-gray-800 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
//                     <p className="text-gray-500 text-sm">
//                         © 2026 Digitools. All rights reserved.
//                     </p>
//                     <div className="flex gap-8 text-gray-500 text-sm">
//                         <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
//                         <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
//                         <a href="#" className="hover:text-white transition-colors">Cookies</a>
//                     </div>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;