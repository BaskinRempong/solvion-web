"use client";

import { useEffect, useRef } from "react";

const chips = [
    "Penjualan hari ini berapa?",
    "Yang belum follow up siapa?",
    "Ada komplain gak?",
    "Order pending apa aja?",
];

export default function ChipsStrip() {
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
        <section className="chips-strip" id="chipsStrip" ref={sectionRef}>
            <div className="container">
                <p className="chips-strip-title fade-up">
                    Contoh yang sering ditanyain owner:
                </p>
                <div className="chips-strip-row fade-up">
                    {chips.map((chip, i) => (
                        <a key={i} href="/demo" className="chat-chip">
                            {chip}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
