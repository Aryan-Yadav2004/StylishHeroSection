import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Zap, Activity, Smartphone, TrendingUp } from 'lucide-react';

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
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    pin: true,
                    start: 'top top',
                    end: '+=4000', // virtual scroll distance
                    scrub: 1, // Smooth scrolling
                }
            });

            // Animate the fire neon trail width from 0 to 100%
            tl.to(trailRef.current, {
                width: '100%',
                ease: 'none',
                duration: 10
            }, 0);

            // Animate the car moving left to right
            tl.fromTo(carRef.current, {
                left: '0%',
                xPercent: -50
            }, {
                left: '100%',
                xPercent: -50,
                ease: 'none',
                duration: 10
            }, 0);

            // Stats pop in (TRON themed staggered reveal)
            tl.fromTo(stat1Ref.current, { opacity: 0, scale: 0.8, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'back.out(1.7)' }, 1);
            tl.fromTo(stat2Ref.current, { opacity: 0, scale: 0.8, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'back.out(1.7)' }, 3.5);
            tl.fromTo(stat3Ref.current, { opacity: 0, scale: 0.8, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'back.out(1.7)' }, 6);
            tl.fromTo(stat4Ref.current, { opacity: 0, scale: 0.8, y: 50 }, { opacity: 1, scale: 1, y: 0, duration: 1.5, ease: 'back.out(1.7)' }, 8.5);

        }, containerRef);

        return () => ctx.revert();
    }, []);

    return (
        <div ref={containerRef} className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-tron-dark text-slate-100">

            {/* Dark TRON Grid Background */}
            <div className="absolute top-0 left-0 w-full h-full z-0 opacity-20"
                style={{
                    backgroundImage: 'linear-gradient(rgba(0, 225, 255, 0.2) 1px, transparent 1px), linear-gradient(90deg, rgba(0, 225, 255, 0.2) 1px, transparent 1px)',
                    backgroundSize: '40px 40px',
                    transform: 'perspective(500px) rotateX(60deg) scale(2) translateY(-100px)'
                }}
            />
            {/* Ambient glows */}
            <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-tron-blue/10 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-[-10%] right-[-10%] w-96 h-96 bg-tron-red/10 rounded-full blur-[100px] pointer-events-none z-0" />

            {/* The Road / Track */}
            {/* The road is purely black before the car comes, as requested */}
            <div ref={roadRef} className="relative w-full h-32 md:h-48 bg-black flex items-center z-10 border-y border-white/5 shadow-[0_0_30px_rgba(0,0,0,0.8)]">

                {/* Hidden/Dark Base Text - completely invisible or extremely dark before trail hits */}
                <h1 className="absolute w-full text-center text-black/40 font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] md:tracking-[0.4em] whitespace-nowrap z-10 select-none drop-shadow-none">
                    WELCOME ITZFIZZ
                </h1>

                {/* Fire Trail! Unlocks the text and illuminates the road behind the car */}
                <div ref={trailRef} className="absolute left-0 top-0 h-full w-0 bg-gradient-to-r from-tron-fire to-tron-red backdrop-blur-md z-20 overflow-hidden shadow-[0_0_40px_rgba(255,0,60,0.8)] border-r-[3px] border-white max-w-full">

                    {/* Glowing Revealed Text */}
                    <div className="absolute left-0 w-screen h-full flex items-center justify-center">
                        <h1 className="text-center text-white font-heading font-extrabold text-4xl md:text-6xl lg:text-7xl tracking-[0.2em] md:tracking-[0.4em] whitespace-nowrap drop-shadow-[0_0_15px_rgba(255,255,255,0.9)] select-none">
                            WELCOME ITZFIZZ
                        </h1>
                    </div>
                    {/* Extra intense glow overlay inside the fire */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent to-white/20 mix-blend-overlay"></div>
                </div>

                {/* Real Car Image */}
                <div ref={carRef} className="absolute z-30 flex items-center justify-center pointer-events-none">
                    {/* 
                         We downloaded the top-down McLaren into public/car.png.
                         Because top-down cars usually face up (north), we rotate it 90deg to face right (east).
                     */}
                    <div className="relative">
                        <img
                            src="/car.png"
                            alt="Supercar"
                            className="w-24 md:w-40 object-contain drop-shadow-[0_0_20px_rgba(255,69,0,0.8)] transform rotate-90"
                        />
                        {/* Glow surrounding the vehicle itself */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-tron-fire/40 blur-2xl rounded-full mix-blend-screen -z-10 animate-pulse"></div>
                    </div>
                </div>
            </div>

            {/* TRON Dashboards / Floating Stats */}
            <div ref={stat1Ref} className="absolute top-[15%] left-[5%] md:left-[15%] z-20 opacity-0 pointer-events-none">
                <div className="p-6 md:p-8 rounded-xl w-64 md:w-72 border border-tron-blue/30 bg-[#0a0a0c]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,225,255,0.15)] flex flex-col items-center text-center">
                    <TrendingUp className="text-tron-blue w-8 h-8 mb-4 drop-shadow-[0_0_8px_rgba(0,225,255,0.8)]" />
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-wider">58%</h3>
                    <p className="text-slate-400 font-medium text-sm md:text-base leading-snug uppercase tracking-widest">Increase Pick Up</p>
                </div>
            </div>

            <div ref={stat2Ref} className="absolute bottom-[15%] left-[8%] md:left-[22%] z-20 opacity-0 pointer-events-none">
                <div className="p-6 md:p-8 rounded-xl w-64 md:w-72 border border-tron-red/30 bg-[#0a0a0c]/80 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,60,0.15)] flex flex-col items-center text-center">
                    <Smartphone className="text-tron-red w-8 h-8 mb-4 drop-shadow-[0_0_8px_rgba(255,0,60,0.8)]" />
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-wider">23%</h3>
                    <p className="text-slate-400 font-medium text-sm md:text-base leading-snug uppercase tracking-widest">Decreased Calls</p>
                </div>
            </div>

            <div ref={stat3Ref} className="absolute top-[15%] right-[8%] md:right-[22%] z-20 opacity-0 pointer-events-none">
                <div className="p-6 md:p-8 rounded-xl w-64 md:w-72 border border-tron-red/30 bg-[#0a0a0c]/80 backdrop-blur-md shadow-[0_0_20px_rgba(255,0,60,0.15)] flex flex-col items-center text-center">
                    <Activity className="text-tron-red w-8 h-8 mb-4 drop-shadow-[0_0_8px_rgba(255,0,60,0.8)]" />
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-wider">27%</h3>
                    <p className="text-slate-400 font-medium text-sm md:text-base leading-snug uppercase tracking-widest">Increase Usage</p>
                </div>
            </div>

            <div ref={stat4Ref} className="absolute bottom-[15%] right-[5%] md:right-[15%] z-20 opacity-0 pointer-events-none">
                <div className="p-6 md:p-8 rounded-xl w-64 md:w-72 border border-tron-blue/30 bg-[#0a0a0c]/80 backdrop-blur-md shadow-[0_0_20px_rgba(0,225,255,0.15)] flex flex-col items-center text-center">
                    <Zap className="text-tron-blue w-8 h-8 mb-4 drop-shadow-[0_0_8px_rgba(0,225,255,0.8)]" />
                    <h3 className="text-4xl md:text-5xl font-bold text-white mb-2 font-heading tracking-wider">40%</h3>
                    <p className="text-slate-400 font-medium text-sm md:text-base leading-snug uppercase tracking-widest">Speed Improved</p>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-tron-fire/60 font-body animate-bounce flex flex-col items-center">
                <span className="text-xs font-semibold tracking-[0.3em] uppercase mb-2">Engage Drive</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 5v14M19 12l-7 7-7-7" /></svg>
            </div>
        </div>
    );
};

export default Hero;
