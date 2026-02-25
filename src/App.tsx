import Hero from './components/Hero';

function App() {
  return (
    <div className="w-full relative bg-slate-50">
      <Hero />

      {/* Spacer section to allow for scrolling */}
      <section className="min-h-screen py-24 px-6 flex flex-col items-center justify-center bg-white border-t border-slate-200">
        <div className="max-w-4xl text-center">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-slate-800">
            Scroll Down to See the Magic
          </h2>
          <p className="text-xl text-slate-600 mb-12 max-w-2xl mx-auto">
            The GSAP ScrollTrigger animation ties the neon shape's movement to your scroll position. It provides a smooth, fluid, premium feel as requested.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12 w-full max-w-4xl">
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-left hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-neon-cyan/20 text-neon-cyan rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800 font-heading">Light Neon Aesthetic</h3>
              <p className="text-slate-600 font-body leading-relaxed">Beautiful light styling alongside vibrant neon colors creates an engaging and highly-premium modern visual experience.</p>
            </div>
            <div className="p-8 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm text-left hover:shadow-md transition-shadow">
              <div className="w-14 h-14 bg-neon-purple/20 text-neon-purple rounded-full flex items-center justify-center mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" /></svg>
              </div>
              <h3 className="text-2xl font-bold mb-3 text-slate-800 font-heading">Silky Smooth Motion</h3>
              <p className="text-slate-600 font-body leading-relaxed">We utilize hardware-accelerated transform and opacity animations powered by GSAP ensuring perfectly fluid 120Hz-ready experiences.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 text-center text-slate-500 border-t border-slate-200 bg-slate-50 font-body">
        <p>© 2026 Stylish Hero Section. Built with React, GSAP & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
