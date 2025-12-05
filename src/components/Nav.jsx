import { useState } from 'react';

function Nav() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const navItems = [
    { name: 'Home', href: '#' },
    { name: 'About', href: '#' },
    { name: 'Safari Packages', href: '#' },
    { name: 'Contact', href: '#' }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white">
      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center justify-between px-8 py-4 max-w-full">
        <div className="font-['Outfit-Bold',Helvetica] font-bold text-4xl text-black tracking-[0] leading-[normal]">
          Yala&nbsp;&nbsp;Safari
        </div>

        <div className="flex gap-12 items-center">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className={`font-['Outfit-Regular',Helvetica] font-normal text-xl tracking-[0] leading-[normal] ${
                index === 0 ? 'text-black' : 'text-neutral-700'
              } hover:text-black transition-colors`}
            >
              {item.name}
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden flex items-center justify-between px-4 py-3">
        {/* Mobile Logo Text */}
        <div className="font-['Outfit-Bold',Helvetica] font-bold text-2xl text-black tracking-[0] leading-[normal]">
          Yala Safari
        </div>

        {/* Hamburger Menu Button */}
        <button
          onClick={toggleMenu}
          className="flex flex-col gap-1.5 focus:outline-none"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-black transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-200">
          <div className="flex flex-col gap-4 px-4 py-4">
            {navItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                className={`font-['Outfit-Regular',Helvetica] font-normal text-base tracking-[0] leading-[normal] ${
                  index === 0 ? 'text-black' : 'text-neutral-700'
                } hover:text-black transition-colors`}
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

export default Nav;