import { ArrowLeft, ArrowRight } from 'lucide-react';
import { PRODUCTS } from '../data';
import { useState, useEffect } from 'react';
import { motion, useReducedMotion } from 'motion/react';

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isInitialLoad, setIsInitialLoad] = useState(true);
  const shouldReduceMotion = useReducedMotion();

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsInitialLoad(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % PRODUCTS.length);
    setTimeout(() => setIsAnimating(false), 500); // match transition duration
  };
  
  const handlePrev = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + PRODUCTS.length) % PRODUCTS.length);
    setTimeout(() => setIsAnimating(false), 500); // match transition duration
  };

  return (
    <section className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex flex-col justify-center">
      {/* Background Video & Transparent Overlays */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          preload="metadata"
          poster="/images/hero-poster.webp"
          className="w-full h-full object-cover scale-105 transform will-change-transform opacity-90"
        >
          <source src="/videos/hero.webm" type="video/webm" />
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        {/* Ambient Dark & Warm Luxury Overlays for High Contrast */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#120f0d]/75 via-[#1a1512]/40 to-[#1a1512]/75 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-black/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-[#1a1512]/30 to-[#0e0b09]/85" />
        
        {/* Subtle Gold Dust Tint */}
        <div className="absolute inset-0 bg-gradient-to-tr from-amber-950/25 via-transparent to-yellow-900/15 pointer-events-none" />

        {/* Smooth Fade Transition into the Cream Background of next section */}
        <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-t from-brand-cream via-brand-cream/80 to-transparent pointer-events-none" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        
        {/* Intro Text */}
        <div className="mb-10 md:mb-14 overflow-hidden">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <motion.h1 
              initial={shouldReduceMotion ? false : { opacity: 0, x: -100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight tracking-tight max-w-md drop-shadow-[0_4px_16px_rgba(0,0,0,0.6)]"
            >
              View our latest works
            </motion.h1>
            <motion.p 
              initial={shouldReduceMotion ? false : { opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.9, delay: 0.2, ease: "easeOut" }}
              className="text-lg md:text-xl font-serif italic text-amber-100/90 md:justify-self-end max-w-sm drop-shadow-md"
            >
              Everyday sparkle &mdash; anti-tarnish, lightweight jewelry made for daily wear
            </motion.p>
          </div>
        </div>

        {/* Transparent Glassmorphism Showcase Panel */}
        <motion.div 
          initial={shouldReduceMotion ? false : { opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.5, ease: "easeOut" }}
          className="relative rounded-[2rem] md:rounded-[2.5rem] p-6 sm:p-8 md:p-12 lg:p-16 overflow-hidden shadow-[0_25px_60px_-15px_rgba(0,0,0,0.6)] backdrop-blur-xl bg-black/30 md:bg-black/35 border border-white/25 sm:border-white/30 transition-colors duration-300"
        >
          
          {/* Subtle Glow Highlights along card borders */}
          <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/50 to-transparent pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-amber-200/30 to-transparent pointer-events-none" />
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Panel Header */}
          <div className="relative z-10 flex flex-col lg:flex-row justify-between items-start lg:items-center mb-8 md:mb-12">
            <p className="text-[#f9f5f0]/85 font-serif italic max-w-xs text-sm sm:text-base mb-6 lg:mb-0 drop-shadow-sm">
              Lanah's combination of statement and simplistic style helps create a look that's as unique as you are
            </p>
            <h2 className="text-5xl md:text-7xl lg:text-8xl font-black text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-amber-100/80 tracking-tighter uppercase whitespace-nowrap drop-shadow-[0_4px_16px_rgba(0,0,0,0.4)]">
              Our Works
            </h2>
          </div>

          {/* Fanned Deck Carousel */}
          <div className="relative w-full h-[360px] sm:h-[420px] md:h-[500px] flex justify-center items-center py-6 sm:py-10">
            {PRODUCTS.map((product, index) => {
              // Calculate offset relative to currentIndex (-2 to 2)
              let diff = index - currentIndex;
              const half = Math.floor(PRODUCTS.length / 2);
              if (diff > half) diff -= PRODUCTS.length;
              if (diff < -half) diff += PRODUCTS.length;

              const isVisible = Math.abs(diff) <= 2;
              const isCenter = diff === 0;
              const zIndex = 30 - Math.abs(diff) * 10;
              const scale = isCenter ? 1.05 : 1 - Math.abs(diff) * 0.08;
              const rotationVal = diff * 4; // -8, -4, 0, 4, 8
              
              // Base translation X by percentage of card width
              const xTranslate = diff * 70;

              return (
                <motion.div 
                  key={product.id}
                  initial={shouldReduceMotion ? false : {
                    opacity: 0,
                    x: `${xTranslate}%`,
                    rotate: rotationVal,
                    scale: scale,
                  }}
                  animate={{
                    opacity: isVisible ? 1 : 0,
                    x: `${xTranslate}%`,
                    rotate: rotationVal,
                    scale: scale,
                    zIndex: zIndex,
                  }}
                  transition={{ 
                    duration: 0.5, 
                    delay: (isInitialLoad && !shouldReduceMotion) ? 0.9 + (index * 0.06) : 0,
                    ease: [0.4, 0, 0.2, 1] 
                  }}
                  className="absolute shrink-0 w-36 sm:w-48 md:w-64 lg:w-[18rem] aspect-[3/4] rounded-2xl md:rounded-[2rem] overflow-hidden shadow-[0_20px_45px_rgba(0,0,0,0.7)] group cursor-pointer will-change-transform border border-white/20 hover:border-amber-200/50 transition-colors"
                  style={{ pointerEvents: isVisible ? 'auto' : 'none' }}
                >
                  <img 
                    src={product.image} 
                    alt={product.name}
                    loading={Math.abs(diff) <= 1 ? "eager" : "lazy"}
                    decoding="async"
                    fetchPriority={isCenter ? "high" : "auto"}
                    className="w-full h-full object-cover opacity-95 group-hover:opacity-100 transition-all duration-500 group-hover:scale-105"
                  />
                  
                  {/* Subtle dark gradient overlay for text readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/15 to-transparent pointer-events-none" />
                  
                  {/* Tags */}
                  {product.tags && product.tags[0] && (
                    <div className="absolute top-3 left-3 md:top-4 md:left-4 hidden sm:block">
                      <span className="bg-brand-cream/90 backdrop-blur-md text-brand-brown text-[10px] md:text-xs font-semibold px-2 py-1 md:px-3 md:py-1 rounded-full shadow-md border border-white/40">
                        {product.tags[0]}
                      </span>
                    </div>
                  )}
                  
                  {/* Category Tag */}
                  <div className="absolute top-3 right-3 md:top-4 md:right-4 hidden sm:block">
                    <span className="bg-black/50 backdrop-blur-md text-white text-[10px] md:text-xs font-medium px-2 py-1 md:px-3 md:py-1 rounded-full border border-white/25 shadow-sm">
                      {product.category}
                    </span>
                  </div>

                  {/* Title embedded at the bottom */}
                  <div className="absolute bottom-4 md:bottom-6 left-3 right-3 md:left-6 md:right-6 text-center">
                    <h3 className="text-white font-medium tracking-widest text-[10px] sm:text-xs md:text-sm uppercase drop-shadow-md">
                      {product.name}
                    </h3>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Controls */}
          <div className="flex justify-center space-x-4 mt-6 md:mt-8 relative z-10">
            <button 
              onClick={handlePrev}
              disabled={isAnimating}
              aria-label="Previous work"
              className="w-12 h-12 rounded-full border border-white/30 bg-white/10 backdrop-blur-md flex items-center justify-center text-white hover:bg-white/20 active:scale-95 transition-all focus:outline-none disabled:opacity-40 shadow-lg cursor-pointer"
            >
              <ArrowLeft size={20} />
            </button>
            <button 
              onClick={handleNext}
              disabled={isAnimating}
              aria-label="Next work"
              className="w-12 h-12 rounded-full border border-white bg-white/95 backdrop-blur-md flex items-center justify-center text-brand-dark hover:bg-brand-cream active:scale-95 transition-all focus:outline-none shadow-xl disabled:opacity-40 cursor-pointer font-bold"
            >
              <ArrowRight size={20} strokeWidth={2.5} />
            </button>
          </div>

        </motion.div>
      </div>
    </section>
  );
}

