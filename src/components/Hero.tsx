import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Car, Zap, Activity, Smartphone, TrendingUp } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const Hero: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const roadRef = useRef<HTMLDivElement>(null);
    const trailRef = useRef<HTMLDivElement>(null);
    const carRef = useRef<HTMLDivElement>(null);

    const stat1Ref = useRef<HTMLDivElement>(null);
    const stat2Ref = useRef<HTMLDivElement>(null);
    const stat3Ref = useRef<HTMLDivElement>(null);
    const stat4Ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        let ctx = gsap.context(() => {
            // The total scroll distance is determined by the height of the container
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    start: 'top top',
                    end: '+=4000', // Create a 4000px virtual scroll area while pinned
                    scrub: 1, // Smooth scrubbing
                }
            });

            // Animate the neon trail width from 0 to 100%
            tl.to(trailRef.current, {
                width: '100%',
                ease: 'none',
                duration: 10
            }, 0);

            // Animate the car moving across the screen
            // We start it off-screen left and move it to off-screen right
            tl.fromTo(carRef.current, {
                left: '0%',
                xPercent: -50
            }, {
                left: '100%',
                xPercent: -50,
                ease: 'none',
                duration: 10
            }, 0);

            // Pop in stats at different times
            tl.fromTo(stat1Ref.current, { opacity: 0, scale: 0.8, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'back.out(1.7)' }, 1);
            tl.fromTo(stat2Ref.current, { opacity: 0, scale: 0.8, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'back.out(1.7)' }, 3.5);
            tl.fromTo(stat3Ref.current, { opacity: 0, scale: 0.8, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'back.out(1.7)' }, 6);
            tl.fromTo(stat4Ref.current, { opacity: 0, scale: 0.8, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'back.out(1.7)' }, 8.5);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-slate-50">

            {/* Background Decorative elements */}
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-slate-50 to-slate-200 z-0">
                <div className="absolute top-20 left-10 w-96 h-96 bg-neon-cyan/20 rounded-full blur-3xl pointer-events-none" />
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-neon-pink/10 rounded-full blur-3xl pointer-events-none" />
            </div>

            {/* The Track / Road */}
            <div ref={roadRef} className="relative w-full h-32 md:h-48 bg-slate-800 flex items-center shadow-2xl z-10">

                {/* Main Base Text (Hidden in dark, or subtle) */}
                <h1 className="absolute w-full text-center text-slate-600 font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] md:tracking-[0.4em] whitespace-nowrap z-10 opacity-30 select-none">
                    WELCOME ITZFIZZ
                </h1>

                {/* Glowing Trail */}
                <div ref={trailRef} className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-neon-purple to-neon-cyan backdrop-blur-md z-20 overflow-hidden shadow-[0_0_30px_rgba(0,229,255,0.8)] border-r-4 border-white/50">
                    {/* Text that is revealed by the trail (bright white) */}
                    <div className="absolute left-0 w-screen h-full flex items-center justify-center">
                        <h1 className="text-center text-white font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] md:tracking-[0.4em] whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,255,255,0.8)] select-none">
                            WELCOME ITZFIZZ
                        </h1>
                    </div>
                </div>

                {/* The Vehicle / Car */}
                <div ref={carRef} className="absolute z-30 flex items-center justify-center w-20 h-20 md:w-28 md:h-28">
                    <div className="relative flex items-center justify-center w-full h-full bg-slate-900 rounded-full shadow-[0_0_40px_rgba(0,229,255,1)] border-4 border-neon-cyan transform transition-transform duration-300">
                        <Car className="text-neon-cyan w-10 h-10 md:w-14 md:h-14 drop-shadow-[0_0_8px_rgba(0,229,255,0.8)]" />
                        {/* Glow effect around car */}
                        <div className="absolute inset-0 bg-neon-cyan opacity-40 blur-xl rounded-full mix-blend-screen"></div>
                    </div>
                </div>
            </div>

            {/* Floating Stats - absolute positioned around the road */}

            {/* Top Left Stat */}
            <div ref={stat1Ref} className="absolute top-[10%] left-[5%] md:left-[10%] z-20 opacity-0 pointer-events-none">
                <div className="glass-panel p-6 md:p-8 rounded-2xl w-64 md:w-72 shadow-xl border-t-4 border-neon-purple bg-white/70 backdrop-blur-xl">
                    <TrendingUp className="text-neon-purple w-8 h-8 mb-4 drop-shadow-md" />
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">58%</h3>
                    <p className="text-slate-600 font-medium text-sm md:text-base leading-snug">Increase in pick up point use</p>
                </div>
            </div>

            {/* Bottom Left Stat */}
            <div ref={stat2Ref} className="absolute bottom-[10%] left-[10%] md:left-[25%] z-20 opacity-0 pointer-events-none">
                <div className="glass-panel p-6 md:p-8 rounded-2xl w-64 md:w-72 shadow-xl border-t-4 border-neon-cyan bg-white/70 backdrop-blur-xl">
                    <Smartphone className="text-neon-cyan w-8 h-8 mb-4 drop-shadow-md" />
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">23%</h3>
                    <p className="text-slate-600 font-medium text-sm md:text-base leading-snug">Decreased in customer phone calls</p>
                </div>
            </div>

            {/* Top Right Stat */}
            <div ref={stat3Ref} className="absolute top-[10%] right-[10%] md:right-[25%] z-20 opacity-0 pointer-events-none">
                <div className="glass-panel p-6 md:p-8 rounded-2xl w-64 md:w-72 shadow-xl border-t-4 border-neon-pink bg-white/70 backdrop-blur-xl">
                    <Activity className="text-neon-pink w-8 h-8 mb-4 drop-shadow-md" />
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">27%</h3>
                    <p className="text-slate-600 font-medium text-sm md:text-base leading-snug">Increase in pick up point use</p>
                </div>
            </div>

            {/* Bottom Right Stat */}
            <div ref={stat4Ref} className="absolute bottom-[10%] right-[5%] md:right-[10%] z-20 opacity-0 pointer-events-none">
                <div className="glass-panel p-6 md:p-8 rounded-2xl w-64 md:w-72 shadow-xl border-t-4 border-neon-yellow bg-white/70 backdrop-blur-xl">
                    <Zap className="text-neon-yellow w-8 h-8 mb-4 drop-shadow-md" />
                    <h3 className="text-4xl md:text-5xl font-bold text-slate-900 mb-2">40%</h3>
                    <p className="text-slate-600 font-medium text-sm md:text-base leading-snug">Decreased in customer phone calls</p>
                </div>
            </div>

            {/* Small indicator at the bottom to urge continuing scrolling */}
            <div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 font-body animate-bounce flex flex-col items-center">
                <span className="text-sm font-medium tracking-widest uppercase mb-2">Keep Scrolling</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
            </div>

        </div>
    );
};

export default Hero;
