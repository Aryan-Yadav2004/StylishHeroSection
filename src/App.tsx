import Hero from './components/Hero';

function App() {
  return (
    <div className="w-full relative bg-slate-50 overflow-x-hidden">
      <Hero />
      <footer className="py-8 text-center text-slate-500 bg-slate-50 font-body">
        <p>© 2026 Stylish Hero Section. Built with React, GSAP & Tailwind CSS.</p>
      </footer>
    </div>
  );
}

export default App;
