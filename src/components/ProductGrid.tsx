import { PRODUCTS } from '../data';
import { motion } from 'motion/react';
import { ShoppingCart, ChevronLeft, ChevronRight } from 'lucide-react';

type ProductGridProps = {
  activeCategory: string;
};

export default function ProductGrid({ activeCategory }: ProductGridProps) {
  const filteredProducts = activeCategory === 'All' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  return (
    <section id="shop" className="py-12 sm:py-16 px-3 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
        {filteredProducts.map((product, index) => (
          <motion.div
            key={product.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ delay: index * 0.05, duration: 0.5 }}
            className="group flex flex-col"
          >
            {/* Image Container with Hover Actions */}
            <div className="relative aspect-[4/5] rounded-xl sm:rounded-2xl overflow-hidden bg-brand-brown/5 mb-3 sm:mb-5 shadow-sm group-hover:shadow-xl transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                loading={index < 4 ? "eager" : "lazy"}
                decoding="async"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Tags */}
              <div className="absolute top-2 left-2 sm:top-3 sm:left-3 right-2 sm:right-3 flex justify-between items-start pointer-events-none">
                <div className="flex flex-col space-y-1 sm:space-y-2">
                  {product.tags && product.tags.slice(0, 2).map(tag => (
                    <span 
                      key={tag}
                      className="bg-brand-cream/95 backdrop-blur-sm text-brand-brown text-[8px] sm:text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 sm:px-2 sm:py-1 rounded-sm shadow-sm max-w-fit"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Quick Add Button on Mobile / Desktop Hover */}
              <div className="absolute inset-x-0 bottom-0 p-2 sm:p-4 md:translate-y-full md:group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-center z-10">
                 <button 
                    className="flex items-center space-x-1.5 sm:space-x-2 bg-brand-cream/95 backdrop-blur-sm text-brand-brown px-3 py-2 sm:px-6 sm:py-3 rounded-full font-semibold text-xs sm:text-sm hover:bg-white w-full justify-center shadow-md transform transition-transform active:scale-95 border border-brand-brown/15"
                  >
                    <ShoppingCart size={14} className="sm:w-4 sm:h-4" />
                    <span className="truncate">Add to Cart</span>
                  </button>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 px-0.5 sm:px-1">
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-1 sm:gap-4 mb-1">
                <h3 className="text-brand-brown font-medium text-xs sm:text-base leading-tight line-clamp-2">
                  {product.name}
                </h3>
                <p className="text-brand-brown font-bold text-xs sm:text-base whitespace-nowrap">
                  ₹{product.price}
                </p>
              </div>
              <p className="text-brand-brown-light text-[11px] sm:text-sm mt-auto">
                {product.category}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
      
      {/* Pagination / Next Option */}
      {filteredProducts.length > 0 && (
        <div className="mt-16 pt-8 flex items-center justify-center space-x-2 border-t border-brand-brown/10">
          <button 
            disabled 
            className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-brown/10 text-brand-brown/30 cursor-not-allowed transition-colors mr-2"
          >
            <ChevronLeft size={20} strokeWidth={1.5} />
          </button>
          
          <button className="w-10 h-10 flex items-center justify-center rounded-full bg-brand-brown text-white font-medium text-sm transition-colors shadow-md">
            1
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-brand-brown hover:bg-brand-brown/5 font-medium text-sm transition-colors">
            2
          </button>
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-brand-brown hover:bg-brand-brown/5 font-medium text-sm transition-colors hidden sm:flex">
            3
          </button>
          
          <span className="text-brand-brown/40 tracking-widest px-1 hidden sm:block">...</span>
          
          <button className="w-10 h-10 flex items-center justify-center rounded-full text-brand-brown hover:bg-brand-brown/5 font-medium text-sm transition-colors hidden sm:flex">
            8
          </button>

          <button className="w-10 h-10 flex items-center justify-center rounded-full border border-brand-brown/20 text-brand-brown hover:bg-brand-brown hover:text-white transition-all ml-2 group">
            <ChevronRight size={20} strokeWidth={1.5} className="group-hover:translate-x-0.5 transition-transform" />
          </button>
        </div>
      )}

      {filteredProducts.length === 0 && (
        <div className="text-center py-20 text-brand-brown-light">
          <p>No products found in this category.</p>
        </div>
      )}
    </section>
  );
}
