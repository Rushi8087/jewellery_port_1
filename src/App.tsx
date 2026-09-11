import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import FloatingSocials from './components/FloatingSocials';

export default function App() {
  const [activeCategory, setActiveCategory] = useState<string>('All');

  return (
    <div className="min-h-screen bg-brand-cream overflow-hidden selection:bg-brand-terracotta selection:text-brand-cream">
      <Header />
      <main>
        <Hero />
        <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory} />
        <ProductGrid activeCategory={activeCategory} />
      </main>
      <Footer />
      <FloatingSocials />
    </div>
  );
}
