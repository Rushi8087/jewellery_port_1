import { Mail, Phone, Instagram, Facebook, Youtube, Linkedin, CreditCard } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#FAF7F2] text-brand-brown pt-16 pb-8 border-t border-brand-brown/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Grid Area */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4 mb-16">
          
          {/* Col 1: Contact */}
          <div className="space-y-6 lg:pr-4 lg:col-span-1">
            <a href="mailto:care@lanahjewels.com" className="flex items-center space-x-3 text-brand-brown/70 hover:text-brand-terracotta transition-colors">
              <Mail size={20} strokeWidth={1.5} />
              <span className="text-sm">care@lanahjewels.com</span>
            </a>
            <a href="tel:+918882188858" className="flex items-center space-x-3 text-brand-brown/70 hover:text-brand-terracotta transition-colors">
              <Phone size={20} strokeWidth={1.5} />
              <span className="text-sm">+91 88821 88858</span>
            </a>
          </div>

          {/* Col 2: Categories */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-brand-brown mb-5 text-base">Categories</h4>
            <ul className="space-y-3">
              {['All Jewellery', 'Rings', 'Earrings', 'Neckpieces', 'Bracelets', 'Anklets'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-brand-brown/70 hover:text-brand-terracotta transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Information */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-brand-brown mb-5 text-base">Information</h4>
            <ul className="space-y-3">
              {['About us', 'Contact us', 'Terms & Conditions', 'Delivery & Returns', 'Privacy Policy', 'FAQs'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-brand-brown/70 hover:text-brand-terracotta transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Quick Links */}
          <div className="lg:col-span-1">
            <h4 className="font-semibold text-brand-brown mb-5 text-base">Quick Links</h4>
            <ul className="space-y-3">
              {['My account', 'Order tracking', 'New arrivals'].map(link => (
                <li key={link}>
                  <a href="#" className="text-sm text-brand-brown/70 hover:text-brand-terracotta transition-colors">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 5: Socials & Subscribe */}
          <div className="md:col-span-2 lg:col-span-2 lg:pl-4">
            <h4 className="font-medium italic text-brand-brown mb-5 text-base">Follow Us on Socials</h4>
            <div className="flex space-x-4 mb-8">
              <a href="#" className="w-8 h-8 rounded-full bg-brand-brown text-white flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                <Instagram size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-brown text-white flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                <Facebook size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-brown text-white flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                <Youtube size={16} />
              </a>
              <a href="#" className="w-8 h-8 rounded-full bg-brand-brown text-white flex items-center justify-center hover:bg-brand-terracotta transition-colors">
                <Linkedin size={16} />
              </a>
            </div>
            
            <form className="flex w-full max-w-sm rounded-full border-2 border-brand-terracotta overflow-hidden bg-white/50 focus-within:bg-white transition-colors">
              <input 
                type="email" 
                placeholder="E-mail" 
                className="w-full bg-transparent px-4 py-2 text-sm text-brand-brown placeholder-brand-brown/40 outline-none italic"
                required
              />
              <button 
                type="submit" 
                className="bg-brand-terracotta text-white px-5 py-2 text-sm font-semibold hover:bg-brand-terracotta/90 transition-colors whitespace-nowrap"
              >
                Subscribe
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Area: Payments & Copyright */}
        <div className="flex flex-col items-center pt-8 border-t border-brand-brown/10 space-y-6">
          
          {/* Payment Badges (CSS Approximations for placeholders) */}
          <div className="flex flex-wrap justify-center gap-3">
            <div className="bg-white px-4 py-2 rounded-md shadow-sm border border-brand-brown/5 flex items-center justify-center">
              <span className="text-blue-900 font-bold text-lg italic tracking-tighter">VISA</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm border border-brand-brown/5 flex items-center justify-center space-x-1">
              <div className="flex -space-x-2">
                <div className="w-5 h-5 rounded-full bg-red-500 mix-blend-multiply opacity-90"></div>
                <div className="w-5 h-5 rounded-full bg-yellow-400 mix-blend-multiply opacity-90"></div>
              </div>
              <span className="text-[10px] font-medium text-gray-800 ml-1">mastercard</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm border border-brand-brown/5 flex items-center justify-center space-x-1">
              <span className="text-blue-800 font-bold italic">Pay</span><span className="text-blue-400 font-bold italic">Pal</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm border border-brand-brown/5 flex items-center justify-center">
              <span className="text-green-700 font-bold italic tracking-wider">UPI</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm border border-brand-brown/5 flex items-center justify-center bg-blue-500">
              <span className="text-white font-bold text-sm">AMEX</span>
            </div>
            <div className="bg-white px-4 py-2 rounded-md shadow-sm border border-brand-brown/5 flex items-center justify-center space-x-2">
              <CreditCard size={16} className="text-blue-900" />
              <span className="text-blue-900 font-bold text-sm tracking-tight">Net Banking</span>
            </div>
          </div>

        </div>
      </div>
    </footer>
  );
}
