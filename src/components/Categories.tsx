import { CATEGORIES } from '../data';
import { motion } from 'motion/react';

type CategoriesProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

// Map categories to images (using authentic product previews)
const categoryImages: Record<string, string> = {
  'All': '/images/products/celestial-moon-necklace.webp',
  'Necklaces': '/images/products/emerald-trio-necklace.webp',
  'Bracelets': '/images/products/butterfly-cuff-bracelet.webp',
  'Bangles': '/images/products/pave-buckle-bangle.webp',
};

export default function Categories({ activeCategory, setActiveCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-8 sm:py-12 px-2 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex overflow-x-auto scrollbar-hide py-3 justify-start md:justify-center space-x-4 sm:space-x-8 md:space-x-12 px-4 scroll-smooth">
        {CATEGORIES.map((category, index) => {
          const isActive = activeCategory === category;
          return (
            <motion.button
              key={category}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(category)}
              className="flex flex-col items-center space-y-2 sm:space-y-3 group focus:outline-none shrink-0 cursor-pointer"
            >
              <div 
                className={`w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-full p-1 transition-all duration-300 ${
                  isActive ? 'bg-brand-terracotta ring-2 ring-brand-terracotta/30 scale-105' : 'bg-transparent group-hover:bg-brand-brown/20'
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-brand-cream shadow-sm">
                  <img 
                    src={categoryImages[category] || categoryImages['All']} 
                    alt={category}
                    loading="lazy"
                    decoding="async"
                    width="96"
                    height="96"
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <span 
                className={`text-xs sm:text-sm md:text-base font-medium transition-colors whitespace-nowrap ${
                  isActive ? 'text-brand-terracotta font-bold' : 'text-brand-brown-light group-hover:text-brand-brown'
                }`}
              >
                {category === 'All' ? 'View All' : category}
              </span>
            </motion.button>
          );
        })}
      </div>
    </section>
  );
}
