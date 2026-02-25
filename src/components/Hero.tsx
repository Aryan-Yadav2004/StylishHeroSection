import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Sparkles, Zap, Activity } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
    const heroRef = useRef<HTMLElement>(null);
    const headlineRef = useRef<HTMLHeadingElement>(null);
    const statsRef = useRef<HTMLDivElement>(null);
    const objectRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        // Phase 1: Initial Load Animation
        const tl = gsap.timeline();

        // Fade and slide up the headline
        tl.fromTo(headlineRef.current,
            { opacity: 0, y: 50 },
            { opacity: 1, y: 0, duration: 1.2, ease: 'power3.out' }
        );

        // Stagger in the statistics
        if (statsRef.current) {
            const stats = statsRef.current.children;
            tl.fromTo(stats,
                { opacity: 0, y: 20 },
                { opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: 'power2.out' },
                '-=0.6'
            );
        }

        // Phase 2: Scroll-Driven Animation
        // We will animate the floating object based on scroll position
        if (objectRef.current) {
            // Set initial state
            gsap.set(objectRef.current, { scale: 1, rotation: 0 });

            ScrollTrigger.create({
                trigger: heroRef.current,
                start: 'top top',
                end: 'bottom top',
                scrub: 1, // Smooth scrubbing
                animation: gsap.to(objectRef.current, {
                    y: 600, // Move down as user scrolls
                    x: '50vw', // Move to the right
                    rotation: 360,
                    scale: 1.5,
                    ease: 'none'
                })
            });
        }

        return () => {
            ScrollTrigger.getAll().forEach(t => t.kill());
        };
    }, []);

    return (
        <section ref={heroRef} className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-gradient-light pt-20 pb-32">
            {/* Decorative background elements */}
            <div className="absolute top-20 left-10 w-64 h-64 bg-neon-cyan/20 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-pink/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-neon-purple/5 rounded-full blur-3xl pointer-events-none" />

            {/* Main Content */}
            <div className="z-10 flex flex-col items-center text-center px-6 w-full max-w-5xl">
                <h1
                    ref={headlineRef}
                    className="font-heading font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] md:tracking-[0.4em] mb-12 text-slate-800 uppercase"
                >
                    W<span className="text-gradient">E</span>L<span className="text-gradient">C</span>O<span className="text-gradient">M</span>E <br className="md:hidden" /> ITZFIZZ
                </h1>

                {/* Statistics / Impact Metrics */}
                <div ref={statsRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full mt-12">
                    {/* Stat 1 */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col items-center transform transition-transform hover:scale-105 hover:glass-panel-highlight">
                        <div className="w-12 h-12 rounded-full bg-neon-cyan/20 flex items-center justify-center mb-4 text-neon-cyan">
                            <Zap size={24} />
                        </div>
                        <h3 className="text-4xl font-bold text-slate-900 mb-2">99%</h3>
                        <p className="text-slate-600 font-medium">Performance Score</p>
                    </div>

                    {/* Stat 2 */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col items-center transform transition-transform hover:scale-105 hover:glass-panel-highlight">
                        <div className="w-12 h-12 rounded-full bg-neon-purple/20 flex items-center justify-center mb-4 text-neon-purple">
                            <Sparkles size={24} />
                        </div>
                        <h3 className="text-4xl font-bold text-slate-900 mb-2">2.5s</h3>
                        <p className="text-slate-600 font-medium">Scroll Interactive</p>
                    </div>

                    {/* Stat 3 */}
                    <div className="glass-panel p-8 rounded-2xl flex flex-col items-center transform transition-transform hover:scale-105 hover:glass-panel-highlight">
                        <div className="w-12 h-12 rounded-full bg-neon-pink/20 flex items-center justify-center mb-4 text-neon-pink">
                            <Activity size={24} />
                        </div>
                        <h3 className="text-4xl font-bold text-slate-900 mb-2">120Hz</h3>
                        <p className="text-slate-600 font-medium">Animation Fluidity</p>
                    </div>
                </div>
            </div>

            {/* Scroll Driven Visual Element */}
            <div
                ref={objectRef}
                className="absolute top-[20%] left-[-10%] w-32 h-32 md:w-48 md:h-48 z-20 pointer-events-none mix-blend-multiply opacity-80"
            >
                <div className="w-full h-full rounded-3xl bg-gradient-to-tr from-neon-cyan via-neon-purple to-neon-pink shadow-2xl animate-pulse backdrop-blur-md opacity-60" style={{ borderRadius: '40% 60% 70% 30% / 40% 50% 60% 50%', animation: 'morph 8s ease-in-out infinite' }}>
                </div>
            </div>

            <style>{`
        @keyframes morph {
          0%, 100% {
            border-radius: 40% 60% 70% 30% / 40% 50% 60% 50%;
          }
          34% {
            border-radius: 70% 30% 50% 50% / 30% 30% 70% 70%;
          }
          67% {
            border-radius: 100% 60% 60% 100% / 100% 100% 60% 60%;
          }
        }
      `}</style>

        </section>
    );
};

export default Hero;
