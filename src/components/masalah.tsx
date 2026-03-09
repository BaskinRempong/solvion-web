"use client";

import { useEffect, useRef } from "react";

const problems = [
    { icon: "🩺", title: "Izin Mendadak", desc: "Chat lagi rame. Eh jam 10: \"Kak aku izin ya.\"" },
    { icon: "📉", title: "Follow-up Kelewat", desc: "Customer udah nanya harga. Tinggal minta alamat. Tapi kelewat." },
    { icon: "⏰", title: "Chat Malam Nunggu Besok", desc: "Orang belanja jam 9 malam. Tapi kamu jawabnya besok siang." },
    { icon: "💸", title: "Biaya Jalan Terus", desc: "Gaji jalan terus. Training ulang terus. Orangnya ganti terus." },
];

export default function Masalah() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const fadeEls = section.querySelectorAll(".fade-up");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const parent = entry.target.parentElement;
                        if (parent) {
                            const siblings = Array.from(parent.querySelectorAll(":scope > .fade-up"));
                            const index = siblings.indexOf(entry.target as Element);
                            const delay = Math.max(0, index) * 150;
                            (entry.target as HTMLElement).style.transitionDelay = delay + "ms";
                        }
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
        <section className="masalah" id="masalah" ref={sectionRef}>
            <div className="container">
                <div className="section-header fade-up">
                    <h2>Kalau Kamu Punya Karyawan, Kamu Pasti Pernah Ngalamin Ini.</h2>
                </div>
                <div className="masalah-grid">
                    {problems.map((p, i) => (
                        <div key={i} className="masalah-card glass-card fade-up">
                            <div className="masalah-icon">{p.icon}</div>
                            <h3>{p.title}</h3>
                            <p>{p.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
