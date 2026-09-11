export default function FloatingSocials() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col space-y-2.5 sm:space-y-4">
      
      {/* Instagram Button */}
      <a
        href="https://instagram.com/lanah.jewels"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow us on Instagram"
        className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full text-white shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
        style={{
          background: 'linear-gradient(45deg, #f09433, #e6683c, #dc2743, #cc2366, #bc1888)'
        }}
      >
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-5 h-5 sm:w-7 sm:h-7" aria-hidden="true">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
        </svg>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/918882188858?text=Hi!%20I'm%20interested%20in%20your%20jewelry%20collection%20%E2%9C%A8"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="relative w-11 h-11 sm:w-14 sm:h-14 rounded-full text-white bg-[#25D366] shadow-[0_4px_12px_rgba(0,0,0,0.2)] flex items-center justify-center hover:scale-110 active:scale-95 transition-all duration-200"
      >
        {/* Pulse effect */}
        <span className="absolute inset-0 rounded-full border border-[#25D366] animate-[ping_2.5s_cubic-bezier(0,0,0.2,1)_infinite] opacity-75"></span>
        
        <svg fill="currentColor" viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 relative z-10" aria-hidden="true">
          <path d="M12.013 0C5.383 0 0 5.383 0 12.013c0 2.13.55 4.212 1.597 6.046L.013 24l6.115-1.604c1.785.98 3.82 1.498 5.885 1.498 6.63 0 12.013-5.383 12.013-12.013C24.026 5.383 18.643 0 12.013 0zM19.04 17.078c-.297.837-1.722 1.572-2.383 1.637-.604.058-1.393.203-4.382-.98-3.606-1.428-5.918-5.11-6.096-5.348-.178-.237-1.455-1.938-1.455-3.693 0-1.756.918-2.617 1.246-2.946.326-.328.712-.41.95-.41.238 0 .474.004.682.013.216.01.503-.08.784.595.297.712 1.01 2.464 1.1 2.643.088.177.148.385.03.623-.12.237-.178.385-.356.593-.178.207-.37.444-.534.607-.178.177-.365.37-.163.71.202.342.9 1.478 1.937 2.4 1.336 1.187 2.454 1.554 2.795 1.703.34.148.548.118.756-.118.208-.237.89-1.037 1.13-1.394.237-.355.474-.296.786-.178.31.118 1.958.92 2.294 1.082.336.163.56.24.64.373.08.134.08.77-.217 1.608z"/>
        </svg>
      </a>
      
    </div>
  );
}
