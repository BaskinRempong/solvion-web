"use client";

import { useEffect, useRef, useCallback } from "react";
import { AnimatedSquaresBackground } from "@/components/ui/noise-dark-blue-gradient-with-squares";
import TypewriterWord from "@/components/ui/typewriter-word";
import NeuralBackground from "./neural-background";
import { RetroGrid } from "./ui/retro-grid";

export default function Hero() {
    const heroTitleRef = useRef<HTMLHeadingElement>(null);

    // Cinematic reveal
    useEffect(() => {
        const heroTitle = heroTitleRef.current;
        if (!heroTitle) return;

        const words = heroTitle.querySelectorAll(".hero-word");
        const subtitle = document.querySelector(".hero-subtitle");

        const staggerDelay = 120;
        const initialDelay = 200;

        const timers: ReturnType<typeof setTimeout>[] = [];

        words.forEach((word, index) => {
            timers.push(
                setTimeout(() => {
                    word.classList.add("revealed");
                }, initialDelay + index * staggerDelay)
            );
        });

        const totalAnimTime =
            initialDelay + words.length * staggerDelay + 300;

        if (subtitle) {
            timers.push(
                setTimeout(() => {
                    subtitle.classList.add("hero-subtitle-visible");
                }, totalAnimTime)
            );
        }

        return () => timers.forEach(clearTimeout);
    }, []);

    // Button ripple
    const handleRipple = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>) => {
            const btn = e.currentTarget;
            const rect = btn.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const ripple = document.createElement("span");

            ripple.classList.add("ripple");
            ripple.style.width = ripple.style.height = size + "px";
            ripple.style.left =
                e.clientX - rect.left - size / 2 + "px";
            ripple.style.top =
                e.clientY - rect.top - size / 2 + "px";

            btn.appendChild(ripple);
            ripple.addEventListener("animationend", () =>
                ripple.remove()
            );
        },
        []
    );

    return (
        <section
            id="hero"
            className="relative overflow-hidden bg-[#05070A]"
        >

            {/* === LAYER 0 : Base Squares === */}
            <div className="absolute inset-0 z-0 pointer-events-none">
                <AnimatedSquaresBackground />
            </div>

            {/* === LAYER 1 : Neural Network === */}
            <div className="absolute inset-0 z-[5] pointer-events-none">
                <NeuralBackground
                    nodeCount={22}
                    lineOpacity={0.22}
                    className="absolute inset-0"
                />
            </div>

            {/* === LAYER 2 : Retro Grid (TOP AREA ONLY) === */}
            <div
                className="absolute top-0 left-0 w-full h-[40vh] overflow-hidden"
                style={{
                    WebkitMaskImage:
                        "linear-gradient(to bottom, black 0%, black 50%, transparent 85%)",
                    maskImage:
                        "linear-gradient(to bottom, black 0%, black 50%, transparent 85%)",
                }}
            >
                <div className="absolute top-0 left-0 w-full h-[40vh] overflow-hidden">
                    <RetroGrid className="opacity-40" angle={65} />
                </div>
            </div>

            {/* === LAYER 3 : Soft Global Gradient === */}
            <div className="absolute inset-0 z-[15] bg-gradient-to-b from-black/20 via-black/30 to-black/70 pointer-events-none" />

            {/* === LAYER 4 : Cinematic Center Glow === */}
            <div className="absolute inset-0 z-[20] pointer-events-none">
                <div className="absolute left-1/2 top-[32%] -translate-x-1/2 w-[760px] h-[460px] bg-[#9EE37D]/15 blur-[180px] rounded-full opacity-70" />
            </div>

            {/* === CONTENT === */}
            <div className="relative z-30 flex min-h-[92vh] items-start justify-center pt-[12vh]">
                <div className="flex flex-col items-center text-center max-w-3xl w-full px-6">

                    <span className="mb-6 rounded-full bg-[#9EE37D]/10 border border-[#9EE37D]/30 px-5 py-2 text-sm font-semibold text-[#9EE37D] tracking-wide backdrop-blur-sm">
                        Karyawan AI — Online 24/7
                    </span>

                    <h1
                        ref={heroTitleRef}
                        className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.15] text-[#E5E7EB]"
                    >
                        Capek Punya Karyawan yang{" "}
                        <span className="relative inline-block align-baseline">
                            <span className="invisible absolute whitespace-nowrap">
                                banyak alasan_
                            </span>

                            <TypewriterWord
                                words={[
                                    "izin",
                                    "sakit",
                                    "ketiduran",
                                    "ngeles",
                                    "slow respon",
                                    "banyak alasan",
                                ]}
                                className="text-[#9EE37D] font-semibold"
                            />
                        </span>
                        ?
                    </h1>

                    <p className="mt-6 text-lg text-[#9CA3AF] max-w-xl leading-relaxed">
                        Solvion adalah penyedia tenaga kerja AI.
                        <br />
                        Kamu tinggal chat kayak Wh*tsApp. Mereka yang kerja 24/7.
                    </p>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/62895395323133?text=Halo%20Solvion,%20saya%20mau%20rekrut%20Karyawan%20AI."
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#9EE37D] text-black hover:bg-[#8AD96A] shadow-[0_12px_50px_rgba(158,227,125,0.35)] font-semibold px-8 py-4 rounded-full text-base transition-all duration-300 hover:scale-[1.03]"
                        >
                            Rekrut Karyawan AI
                        </a>

                        <a
                            href="#storyJoko"
                            className="border border-white/20 hover:border-[#9EE37D]/40 hover:bg-white/5 backdrop-blur-sm text-[#E5E7EB] font-semibold px-8 py-4 rounded-full text-base transition-all duration-300"
                        >
                            Lihat Cara Kerjanya
                        </a>
                    </div>

                    <p className="mt-4 text-sm text-[#9EE37D]/50 italic">
                        Setup dibantu. Kerja langsung jalan.
                    </p>

                </div>
            </div>

        </section>
    );
}