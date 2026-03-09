"use client";
import { RetroGrid } from "@/components/ui/retro-grid";
import { useEffect, useRef } from "react";
import NeuralBackground from "./neural-background";

export default function FinalCTA() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const fadeEls = section.querySelectorAll(".fade-up");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("is-visible");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.08, rootMargin: "0px 0px -30px 0px" }
        );
        fadeEls.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    return (
        <section
            className="final-cta relative overflow-hidden"
            id="cta"
            ref={sectionRef}
        >
            {/* Neural Background */}
            <NeuralBackground
                nodeCount={30}
                lineOpacity={0.5}
                className="absolute inset-0 z-0"
            />

            {/* Retro Grid Layer */}
            <RetroGrid className="z-[1] opacity-[1]" />

            {/* Content */}
            <div className="container relative z-10">
                <p className="fade-up z-15">
                    Untuk yang Udah Pusing Punya Karyawan Manusia.
                </p>

                <h2 className="fade-up">
                    Gimana Kalau Coba Rekrut Karyawan AI?
                </h2>


                <div className="final-cta-buttons fade-up">
                    <a
                        href="https://wa.me/62895395323133?text=Halo%20Solvion,%20saya%20mau%20rekrut%20Karyawan%20AI."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-primary"
                    >
                        Rekrut Sekarang
                    </a>

                    <a
                        href="https://wa.me/62895395323133?text=Halo%20Solvion,%20saya%20mau%20tanya-tanya%20dulu%20tentang%20Karyawan%20AI."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn btn-secondary"
                    >
                        Ngobrol Dulu
                    </a>
                </div>
            </div>
        </section>
    );
}
