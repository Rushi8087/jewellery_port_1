import { Menu, X, User, Search, Heart, ShoppingCart } from 'lucide-react';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const links = ['About', 'Contact'];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const textColor = isScrolled ? 'text-brand-brown' : 'text-white';
  const hoverColor = isScrolled ? 'hover:text-brand-terracotta' : 'hover:text-amber-200';

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-brand-cream/90 backdrop-blur-md shadow-sm border-b border-brand-brown/10 py-2' 
          : 'bg-gradient-to-b from-black/50 via-black/20 to-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className={`${textColor} ${hoverColor} transition-colors p-2 -ml-2 drop-shadow-sm`}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Navigation Links - Desktop */}
          <nav className="hidden md:flex space-x-8 items-center">
            {links.map((link) => (
              <a 
                key={link} 
                href={`#${link.toLowerCase()}`}
                className={`relative text-sm font-medium tracking-wide ${textColor} ${hoverColor} transition-colors group py-2 drop-shadow-sm`}
              >
                {link}
                <span className={`absolute left-1/2 bottom-0 w-0 h-[2px] ${isScrolled ? 'bg-brand-terracotta' : 'bg-amber-300'} transition-all duration-300 group-hover:w-full group-hover:left-0`}></span>
              </a>
            ))}
          </nav>

          {/* Logo */}
          <div className="flex-shrink-0 flex items-center justify-center absolute left-1/2 -translate-x-1/2">
            <a href="#" className={`font-serif text-xl sm:text-2xl md:text-[28px] font-bold tracking-wider sm:tracking-widest ${textColor} transition-colors drop-shadow-md whitespace-nowrap`}>
              Lanah Jewels
            </a>
          </div>

          {/* Right side actions */}
          <div className={`flex items-center space-x-2 sm:space-x-5 ${textColor}`}>
            <button className={`${hoverColor} transition-colors group hidden sm:block p-1 drop-shadow-sm`} aria-label="Account">
              <User size={22} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className={`${hoverColor} transition-colors group p-1 drop-shadow-sm`} aria-label="Search">
              <Search size={20} sm:size={22} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className={`${hoverColor} transition-colors group p-1 drop-shadow-sm`} aria-label="Wishlist">
              <Heart size={20} sm:size={22} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
            <button className={`${hoverColor} transition-colors group p-1 drop-shadow-sm`} aria-label="Shopping Cart">
              <ShoppingCart size={20} sm:size={22} strokeWidth={1.5} className="group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-brand-cream/98 backdrop-blur-xl border-t border-brand-brown/10 overflow-hidden shadow-2xl"
          >
            <div className="px-6 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="block text-lg font-medium text-brand-brown hover:text-brand-terracotta transition-colors py-1"
                  onClick={() => setIsOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#shop"
                className="block text-lg font-medium text-brand-brown hover:text-brand-terracotta transition-colors py-1"
                onClick={() => setIsOpen(false)}
              >
                Shop All
              </a>
              <div className="pt-4 border-t border-brand-brown/10 flex items-center space-x-4">
                <a 
                  href="https://instagram.com/lanah.jewels" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="text-xs font-semibold uppercase tracking-wider text-brand-terracotta bg-brand-terracotta/10 px-4 py-2 rounded-full"
                >
                  Instagram @lanah.jewels
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

