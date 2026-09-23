
// import React from 'react';

// const Footer = () => {
//   return (
//     <footer className="w-full bg-white text-gray-700 mt-20 border-t border-gray-200">

//       <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center justify-between gap-6">
//         <div>
//           <div className="inline-flex items-center gap-2 mb-1">
//             <h3 className="prata-regular text-2xl text-gray-800">Stay in the loop</h3>
//             <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
//           </div>
//           <p className="text-sm text-gray-500">
//             Subscribe to get updates about new products and exclusive offers.
//           </p>
//         </div>
//         <form onSubmit={(e) => e.preventDefault()} className="flex w-full md:w-auto">
//           <input
//             type="email"
//             placeholder="Enter your email"
//             className="px-4 py-2 w-full md:w-80 border border-gray-800 text-sm focus:outline-none"
//             required
//           />
//           <button 
//             type="submit" 
//             className="bg-black text-white px-6 py-2 text-sm font-light hover:bg-gray-800 transition-colors"
//           >
//             Subscribe
//           </button>
//         </form>
//       </div>

//       <hr className="border-gray-200" />

     
//       <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
//         {/* Brand Column */}
//         <div className="space-y-3">
//           <div className="inline-flex items-center gap-2">
//             <span className="font-semibold tracking-widest text-lg text-gray-900">SHOPIFY</span>
//             <hr className="border-none h-[1.5px] w-6 bg-gray-800" />
//           </div>
//           <p className="text-gray-500 text-xs leading-relaxed">
//             Discover our latest arrivals and exclusive pieces designed for everyday elegance.
//           </p>
//           <div className="flex gap-4 text-xs font-medium text-gray-700 pt-1">
//             <a href="#" className="hover:underline">Instagram</a>
//             <a href="#" className="hover:underline">Facebook</a>
//           </div>
//         </div>

        
//         <div>
//           <p className="font-medium text-gray-900 mb-3 text-base">Shop</p>
//           <ul className="space-y-2 text-gray-500 text-xs">
//             <li><a href="#" className="hover:text-black transition-colors">New Arrivals</a></li>
//             <li><a href="#" className="hover:text-black transition-colors">Women</a></li>
//             <li><a href="#" className="hover:text-black transition-colors">Men</a></li>
//             <li><a href="#" className="hover:text-black transition-colors">Accessories</a></li>
//           </ul>
//         </div>

  
//         <div>
//           <p className="font-medium text-gray-900 mb-3 text-base">Customer Service</p>
//           <ul className="space-y-2 text-gray-500 text-xs">
//             <li><a href="#" className="hover:text-black transition-colors">Contact Us</a></li>
//             <li><a href="#" className="hover:text-black transition-colors">Shipping & Delivery</a></li>
//             <li><a href="#" className="hover:text-black transition-colors">Returns & Exchanges</a></li>
//             <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
//           </ul>
//         </div>

//         <div>
//           <p className="font-medium text-gray-900 mb-3 text-base">Get in Touch</p>
//           <ul className="space-y-2 text-gray-500 text-xs">
//             <li>support@example.com</li>
//             <li>+91 98765 43210</li>
//             <li>New Delhi, India</li>
//           </ul>
//         </div>
//       </div>

//       {/* Bottom Copyright */}
//       <div className="border-t border-gray-200 py-4">
//         <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
//           <p>© 2026 SHOPIFY. All rights reserved.</p>
//           <div className="flex gap-4 font-medium text-gray-600">
//             <span>Visa</span>
//             <span>Mastercard</span>
//             <span>UPI</span>
//             <span>PayPal</span>
//           </div>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Footer = () => {
  const handleSubscribe = (e) => {
    e.preventDefault()
    toast.success('Thanks for subscribing!')
    e.target.reset()
  }

  return (
    <footer className="w-full bg-white text-gray-700 mt-20 border-t border-gray-200">

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
        <div>
          <div className="inline-flex items-center gap-2 mb-1">
            <h3 className="prata-regular text-2xl text-gray-800">Stay in the loop</h3>
            <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
          </div>
          <p className="text-sm text-gray-500">
            Subscribe to get updates about new products and exclusive offers.
          </p>
        </div>
        <form onSubmit={handleSubscribe} className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter your email"
            className="px-4 py-2 w-full md:w-80 border border-gray-800 text-sm focus:outline-none"
            required
          />
          <button
            type="submit"
            className="bg-black text-white px-6 py-2 text-sm font-light hover:bg-gray-800 transition-colors"
          >
            Subscribe
          </button>
        </form>
      </div>

      <hr className="border-gray-200" />

      {/* Link columns */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 text-sm">
        {/* Brand Column */}
        <div className="space-y-3">
          <div className="inline-flex items-center gap-2">
            <span className="font-semibold tracking-widest text-lg text-gray-900">SHOPIFY</span>
            <hr className="border-none h-[1.5px] w-6 bg-gray-800" />
          </div>
          <p className="text-gray-500 text-xs leading-relaxed">
            Discover our latest arrivals and exclusive pieces designed for everyday elegance.
          </p>
          <div className="flex gap-4 text-xs font-medium text-gray-700 pt-1">
            <a href="#" className="hover:underline">Instagram</a>
            <a href="#" className="hover:underline">Facebook</a>
          </div>
        </div>

        <div>
          <p className="font-medium text-gray-900 mb-3 text-base">Shop</p>
          <ul className="space-y-2 text-gray-500 text-xs">
            <li><Link to="/collection" className="hover:text-black transition-colors">New Arrivals</Link></li>
            <li><Link to="/collection" className="hover:text-black transition-colors">Women</Link></li>
            <li><Link to="/collection" className="hover:text-black transition-colors">Men</Link></li>
            <li><Link to="/collection" className="hover:text-black transition-colors">Accessories</Link></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 mb-3 text-base">Customer Service</p>
          <ul className="space-y-2 text-gray-500 text-xs">
            <li><Link to="/contact" className="hover:text-black transition-colors">Contact Us</Link></li>
            <li><a href="#" className="hover:text-black transition-colors">Shipping & Delivery</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Returns & Exchanges</a></li>
            <li><a href="#" className="hover:text-black transition-colors">Privacy Policy</a></li>
          </ul>
        </div>

        <div>
          <p className="font-medium text-gray-900 mb-3 text-base">Get in Touch</p>
          <ul className="space-y-2 text-gray-500 text-xs">
            <li>support@example.com</li>
            <li>+91 98765 43210</li>
            <li>New Delhi, India</li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="border-t border-gray-200 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col sm:flex-row justify-between items-center text-xs text-gray-500 gap-2">
          <p>© {new Date().getFullYear()} SHOPIFY. All rights reserved.</p>
          <div className="flex gap-4 font-medium text-gray-600">
            <span>Visa</span>
            <span>Mastercard</span>
            <span>UPI</span>
            <span>PayPal</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;