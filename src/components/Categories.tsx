import { CATEGORIES } from '../data';
import { motion } from 'motion/react';

type CategoriesProps = {
  activeCategory: string;
  setActiveCategory: (category: string) => void;
};

// Map categories to images (using authentic product previews)
const categoryImages: Record<string, string> = {
  'All': '/images/products/celestial-moon-necklace.png',
  'Necklaces': '/images/products/emerald-trio-necklace.png',
  'Bracelets': '/images/products/butterfly-cuff-bracelet.png',
  'Bangles': '/images/products/pave-buckle-bangle.png',
};

export default function Categories({ activeCategory, setActiveCategory }: CategoriesProps) {
  return (
    <section id="categories" className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex overflow-x-auto scrollbar-hide py-4 md:justify-center space-x-6 md:space-x-12 px-2">
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
              className="flex flex-col items-center space-y-3 group focus:outline-none flex-shrink-0"
            >
              <div 
                className={`w-20 h-20 md:w-24 md:h-24 rounded-full p-1 transition-colors duration-300 ${
                  isActive ? 'bg-brand-terracotta' : 'bg-transparent group-hover:bg-brand-brown/20'
                }`}
              >
                <div className="w-full h-full rounded-full overflow-hidden bg-brand-cream">
                  <img 
                    src={categoryImages[category] || categoryImages['All']} 
                    alt={category}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
              </div>
              <span 
                className={`text-sm md:text-base font-medium transition-colors ${
                  isActive ? 'text-brand-terracotta font-semibold' : 'text-brand-brown-light group-hover:text-brand-brown'
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
