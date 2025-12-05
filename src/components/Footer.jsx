import { motion } from 'framer-motion';
import { useState } from 'react';
import assets from '../assets/assets';

const Footer = () => {
  const [email, setEmail] = useState('');

  const handleSubscribe = (e) => {
    e.preventDefault();
    // Handle newsletter subscription
    setEmail('');
  };

  const headerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  const buttonVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5 },
    },
  };

  return (
    <footer className="w-full text-white font-outfit">
      {/* CTA Section */}
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={headerVariants}
        className="relative w-full h-96 md:h-screen md:flex md:items-center md:justify-center overflow-hidden"
      >
        {/* Background Image */}
        <img
          src={assets.footerImg}
          alt="Ready For Your Next Yala Safari Adventure"
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center justify-center px-4 h-full md:h-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6 leading-tight font-outfit"
          >
            Ready For Your Next Yala <br /> Safari Adventure?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="text-sm md:text-base text-gray-200 mb-6 md:mb-8 max-w-lg font-outfit"
          >
            Let's start planning your unforgettable journey into the wild today!
          </motion.p>

          <motion.button
            variants={buttonVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-white  px-6 md:px-8 py-3 md:py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors duration-300 text-sm md:text-base font-outfit"
          >
            Explore Safari Packages Now
          </motion.button>
        </div>
      </motion.div>

      {/* Footer Content */}
      <div className="w-full px-4 md:px-8 lg:px-12 py-12 md:py-16 lg:py-20 bg-black">
        <div className="max-w-7xl mx-auto">
          {/* Desktop Layout - Multi Column */}
          <div className="hidden md:grid grid-cols-4 gap-8 lg:gap-12 mb-12">
            {/* Company Info */}
            <div className="col-span-1">
              <h3 className="text-xl font-bold mb-4 font-outfit">SRI LANKA WILD SAFARIS</h3>
              <p className="text-gray-400 text-sm leading-relaxed mb-6 font-outfit">
                Explore the untamed beauty of Sri Lanka with Sri Lanka Wild Safaris, your trusted wildlife travel partner. We bring unforgettable experiences to life with expert planning, personalized safari experiences, and a commitment to conservation.
              </p>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-start gap-3">
                  <span className="text-lg">📍</span>
                  <p className="font-outfit">123 Safari Drive, Yala, Sri Lanka</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">📞</span>
                  <p className="font-outfit">+94 77 123 4567</p>
                </div>
                <div className="flex items-start gap-3">
                  <span className="text-lg">✉️</span>
                  <p className="font-outfit">infos@srilankawaldsafaris.com</p>
                </div>
              </div>
            </div>

            {/* Pages Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 font-outfit">Pages</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    About Yala
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Safari Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Pricing & Booking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Accommodation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Tour Services Links */}
            <div>
              <h4 className="text-lg font-bold mb-4 font-outfit">Tour Services</h4>
              <ul className="space-y-2 text-sm text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Custom Tour Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Photography Safaris
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Experienced Tracker Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Airport Transfers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Safety & Permit Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Group & Corporate Bookings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Cancellation Policy
                  </a>
                </li>
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h4 className="text-lg font-bold mb-4 font-outfit">Get Newsletter</h4>
              <p className="text-sm text-gray-400 mb-4 font-outfit">
                Get the latest safari deals, wildlife sighting tips, and destination inspirations straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="mb-6">
                <div className="flex gap-2 mb-4">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="flex-1 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-white font-outfit"
                    required
                  />
                  <button
                    type="submit"
                    className="px-4 py-2 bg-white text-gray-900 font-semibold rounded hover:bg-gray-100 transition-colors text-sm font-outfit"
                  >
                    Send
                  </button>
                </div>
              </form>

              <div>
                <h5 className="text-sm font-bold mb-3 font-outfit">Follow Us</h5>
                <div className="flex gap-4">
                  <a
                    href="#"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors"
                  >
                    f
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors"
                  >
                    🔗
                  </a>
                  <a
                    href="#"
                    className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors"
                  >
                    in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Layout - Stacked */}
          <div className="md:hidden space-y-8 mb-8">
            {/* Company Info */}
            <div>
              <h3 className="text-lg font-bold mb-3 font-outfit">SRI LANKA WILD SAFARIS</h3>
              <p className="text-gray-400 text-xs leading-relaxed mb-4 font-outfit">
                Explore the untamed beauty of Sri Lanka with Sri Lanka Wild Safaris, your trusted wildlife travel partner.
              </p>
              <div className="space-y-2 text-xs text-gray-400">
                <div className="flex items-start gap-2">
                  <span>📍</span>
                  <p className="font-outfit">123 Safari Drive, Yala, Sri Lanka</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>📞</span>
                  <p className="font-outfit">+94 77 123 4567</p>
                </div>
                <div className="flex items-start gap-2">
                  <span>✉️</span>
                  <p className="font-outfit">infos@srilankawaldsafaris.com</p>
                </div>
              </div>
            </div>

            {/* Pages */}
            <div>
              <h4 className="text-base font-bold mb-3 font-outfit">Pages</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    About Yala
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Safari Packages
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Pricing & Booking
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Accommodation
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Contact Us
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    FAQs
                  </a>
                </li>
              </ul>
            </div>

            {/* Tour Services */}
            <div>
              <h4 className="text-base font-bold mb-3 font-outfit">Tour Services</h4>
              <ul className="space-y-2 text-xs text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Custom Tour Planning
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Photography Safaris
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Experienced Tracker Guide
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Airport Transfers
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Safety & Permit Information
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Group & Corporate Bookings
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Cancellation Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors font-outfit">
                    Terms & Conditions
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow Us */}
            <div>
              <h5 className="text-base font-bold mb-3 font-outfit">Follow Us</h5>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors text-sm font-bold"
                >
                  f
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors"
                >
                  🔗
                </a>
                <a
                  href="#"
                  className="w-10 h-10 border border-gray-400 rounded-full flex items-center justify-center hover:border-white hover:text-white transition-colors text-sm font-bold"
                >
                  in
                </a>
              </div>
            </div>

            {/* Newsletter */}
            <div>
              <h4 className="text-base font-bold mb-3 font-outfit">Get Newsletter</h4>
              <p className="text-xs text-gray-400 mb-4 font-outfit">
                Get the latest safari deals, wildlife sighting tips, and destination inspirations straight to your inbox.
              </p>
              <form onSubmit={handleSubscribe} className="flex gap-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 px-3 py-2 rounded bg-gray-800 text-white placeholder-gray-500 text-xs focus:outline-none focus:ring-2 focus:ring-white font-outfit"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-gray-900 font-semibold rounded hover:bg-gray-100 transition-colors text-xs font-outfit"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-gray-800 pt-8 text-center text-xs md:text-sm text-gray-400 font-outfit">
            <p>© 2025 Sri Lanka Wild Safaris. All rights reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;