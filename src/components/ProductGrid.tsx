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
    <section id="shop" className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
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
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-brand-brown/5 mb-5 shadow-sm group-hover:shadow-xl transition-all duration-300">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              
              <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              {/* Tags */}
              <div className="absolute top-3 left-3 right-3 flex justify-between items-start">
                <div className="flex flex-col space-y-2">
                  {product.tags && product.tags.map(tag => (
                    <span 
                      key={tag}
                      className="bg-brand-cream/95 text-brand-brown text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-sm shadow-sm max-w-fit"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                {/* Optional Top-Right Tag space */}
              </div>

              {/* Hover Actions */}
              <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex justify-center z-10">
                 <button 
                    className="flex items-center space-x-2 bg-brand-cream text-brand-brown px-6 py-3 rounded-full font-semibold text-sm hover:bg-white w-full justify-center shadow-lg transform transition-transform active:scale-95 border border-brand-brown/10"
                  >
                    <ShoppingCart size={16} />
                    <span>Add to Cart</span>
                  </button>
              </div>
            </div>

            {/* Content Container */}
            <div className="flex flex-col flex-1 px-1">
              <div className="flex justify-between items-start gap-4 mb-1">
                <h3 className="text-brand-brown font-medium text-base leading-tight">
                  {product.name}
                </h3>
                <p className="text-brand-brown font-semibold whitespace-nowrap">
                  ₹{product.price}
                </p>
              </div>
              <p className="text-brand-brown-light text-sm mt-auto">
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
