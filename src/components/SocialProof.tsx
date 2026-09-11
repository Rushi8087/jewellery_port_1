import { Instagram } from 'lucide-react';
import { motion } from 'motion/react';

export default function SocialProof() {
  // Real Lanah Jewels product imagery for Instagram community feed
  const feed = [
    '/images/products/celestial-moon-necklace.webp',
    '/images/products/pave-buckle-bangle.webp',
    '/images/products/garnet-drop-choker.webp',
    '/images/products/butterfly-cuff-bracelet.webp',
    '/images/products/daisy-blossom-bangle.webp',
    '/images/products/seashell-starfish-necklace.webp',
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-12">
        <div>
          <h2 className="text-3xl font-serif font-bold text-brand-brown mb-2">Join Our Community</h2>
          <p className="text-brand-brown-light">Follow us for daily inspiration and new drops</p>
        </div>
        <a 
          href="#"
          className="mt-6 md:mt-0 flex items-center space-x-2 border-2 border-brand-brown text-brand-brown px-6 py-3 rounded-full font-medium hover:bg-brand-brown hover:text-brand-cream transition-colors"
        >
          <Instagram size={20} />
          <span>@lanah.jewels</span>
        </a>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-2 md:gap-4">
        {feed.map((img, i) => (
          <motion.a
            key={i}
            href="#"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative aspect-square overflow-hidden rounded-xl bg-brand-brown/10 block"
          >
            <img 
              src={img} 
              alt="Instagram feed post" 
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
              <Instagram className="text-white" size={32} />
            </div>
          </motion.a>
        ))}
      </div>

      <div className="mt-16 flex justify-center">
        <div className="bg-brand-brown text-brand-cream rounded-2xl p-8 md:px-16 flex flex-col md:flex-row gap-8 md:gap-24 text-center divide-y md:divide-y-0 md:divide-x divide-brand-cream/20 shadow-xl">
          <div className="pt-4 md:pt-0">
            <p className="text-4xl font-serif font-bold mb-1">463+</p>
            <p className="text-brand-cream/80 text-sm tracking-wide uppercase">Happy Customers</p>
          </div>
          <div className="pt-4 md:pt-0 md:pl-24">
            <p className="text-4xl font-serif font-bold mb-1">43+</p>
            <p className="text-brand-cream/80 text-sm tracking-wide uppercase">Unique Designs</p>
          </div>
        </div>
      </div>
    </section>
  );
}
