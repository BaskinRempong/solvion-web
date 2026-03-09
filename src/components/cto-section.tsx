"use client";

import { useEffect, useRef } from "react";

const steps = [
    { title: "Ngikutin cara ngomong brand kamu", desc: "Joko menyesuaikan gaya bahasa, format, dan tone biar konsisten di semua chat." },
    { title: "Ada batasan untuk topik sensitif", desc: "Aturan jelas soal hal sensitif, jadi aman dipakai tim dan gak \"kebablasan\"." },
    { title: "Semua chat bisa dicek ulang", desc: "Ada jejak interaksi, jadi gampang audit: siapa nanya apa, dan jawabannya apa." },
    { title: "Setup awal dibantu lewat konsultasi", desc: "Kita bantu mapping SOP & data, lalu siapin konfigurasi biar langsung jalan." },
];

const trustPills = ["Audit-ready", "Brand voice", "Batasan topik", "History aman"];

export default function CTOSection() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        const section = sectionRef.current;
        if (!section) return;

        const stepEls = Array.from(section.querySelectorAll("[data-step]"));
        const pills = Array.from(section.querySelectorAll(".cto-trust-row .trust-pill"));

        const io = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    const el = entry.target;
                    if (entry.isIntersecting) el.classList.add("is-visible");
                    else el.classList.remove("is-visible");

                    if (entry.isIntersecting && entry.intersectionRatio > 0.55) {
                        stepEls.forEach((s) => s.classList.remove("is-active"));
                        el.classList.add("is-active");
                        const idx = stepEls.indexOf(el);
                        pills.forEach((p) => p.classList.remove("is-active"));
                        if (pills[idx]) pills[idx].classList.add("is-active");
                    }
                });
            },
            {
                root: null,
                threshold: [0.15, 0.35, 0.55, 0.75],
                rootMargin: "-10% 0px -40% 0px",
            }
        );

        stepEls.forEach((s) => io.observe(s));
        return () => io.disconnect();
    }, []);

    return (
        <section className="cto-section cto-apple" id="ctoSection" ref={sectionRef}>
            <div className="section-ornaments" aria-hidden="true">
                <div className="orb orb-1" />
                <div className="orb orb-2" />
                <div className="grid-fade" />
                <div className="spark spark-1" />
                <div className="spark spark-2" />
                <div className="spark spark-3" />
            </div>

            <div className="container">
                <div className="cto-apple-layout">
                    <div className="cto-apple-sticky">
                        <div className="cto-apple-sticky-inner">
                            <div className="cto-kicker">Untuk yang melek sistem</div>
                            <h2 className="cto-title">Walau chat santai, sistemnya tetap rapi.</h2>
                            <p className="cto-sub">
                                Karyawan AI kamu kerja sesuai cara bisnismu — dan semua bisa dicek ulang.
                            </p>
                            <div className="cto-trust-row" aria-label="trust points">
                                {trustPills.map((pill, i) => (
                                    <span key={i} className="trust-pill">{pill}</span>
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="cto-apple-rail" aria-label="features">
                        {steps.map((step, i) => (
                            <article key={i} className="cto-step" data-step>
                                <div className="cto-step-card glass-card">
                                    <div className="cto-step-icon">✓</div>
                                    <div className="cto-step-body">
                                        <h3>{step.title}</h3>
                                        <p>{step.desc}</p>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
