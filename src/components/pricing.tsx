"use client";

import { useEffect, useRef } from "react";

const plans = [
    {
        name: "Magang",
        desc: "Buat yang baru coba karyawan AI",
        price: "Gratis",
        priceSuffix: "",
        note: "Tanpa kartu kredit",
        microcopy: "Coba dulu, biar kamu percaya.",
        features: ["1 Channel Chat",
            "100 Chat / bulan",
            "Balas otomatis pertanyaan dasar",
            "Ringkasan percakapan",
            "Simpan catatan customer",
            "Bisa langsung dipakai tanpa setup ribet",],
        cta: "Mulai Gratis",
        popular: false,
    },
    {
        name: "Honorer",
        desc: "Untuk bisnis yang mulai berkembang",
        price: "Rp 1.799.000,00",
        priceSuffix: "/ bulan",
        note: "Per karyawan AI",
        microcopy: "Setara 1 karyawan tapi murah.",
        features: ["3 Channel Chat",
            "1.000 Chat / bulan",
            "Balas otomatis + follow up sederhana",
            "Ingat riwayat setiap customer",
            "Kirim pengingat ke calon pembeli",
            "Template balasan & closing",
            "Setup dibantu",],
        cta: "Pilih Honorer",
        popular: true,
    },
    {
        name: "UMR",
        desc: "Untuk bisnis yang butuh lebih",
        price: "Rp 4.199.000,00",
        priceSuffix: "/ bulan",
        note: "Per karyawan AI",
        microcopy: "Lebih murah dari UMR Jakarta.",
        features: ["Unlimited Channel",
            "5.000 Chat / bulan",
            "Follow up bertahap otomatis",
            "Ingat semua riwayat pembeli",
            "Bisa handle banyak produk",
            "Prioritas ke chat yang paling potensial",
            "Support prioritas",
            "Setup + optimasi rutin"],
        cta: "Pilih UMR",
        popular: false,
    },
];

export default function Pricing() {
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

        const shimmerEls = section.querySelectorAll(".shimmer-text");
        const shimmerObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate");
                        shimmerObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.3 }
        );
        shimmerEls.forEach((el) => shimmerObserver.observe(el));

        return () => {
            observer.disconnect();
            shimmerObserver.disconnect();
        };
    }, []);

    return (
        <section className="pricing" id="pricing" ref={sectionRef}>
            <div className="container">
                <div className="section-header fade-up">
                    <h2>Gaji Karyawan AI</h2>
                    <p>Tanpa THR. Tanpa drama. Tanpa resign mendadak.</p>
                </div>
                <div className="pricing-grid">
                    {plans.map((plan, i) => (
                        <div
                            key={i}
                            className={`pricing-card glass-card fade-up${plan.popular ? " popular" : ""}`}
                        >
                            {plan.popular && (
                                <span className="pricing-popular-badge">Populer</span>
                            )}
                            <div className="pricing-name">{plan.name}</div>
                            <p className="pricing-desc">{plan.desc}</p>
                            <div className="pricing-price shimmer-text">
                                {plan.price}
                                {plan.priceSuffix && <span> {plan.priceSuffix}</span>}
                            </div>
                            <p className="pricing-note">{plan.note}</p>
                            <p className="pricing-microcopy">{plan.microcopy}</p>
                            <ul className="pricing-features">
                                {plan.features.map((f, j) => (
                                    <li key={j}>{f}</li>
                                ))}
                            </ul>
                            <a
                                href={`https://wa.me/62895395323133?text=${encodeURIComponent(
                                    plan.name === "Magang"
                                        ? "Halo Solvion, saya tertarik dengan paket Magang. Mohon informasi lebih lanjut mengenai proses aktivasi dan langkah selanjutnya."
                                        : plan.name === "Honorer"
                                            ? "Halo Solvion, saya tertarik dengan paket Honorer. Mohon informasi lebih lanjut mengenai proses aktivasi dan langkah selanjutnya."
                                            : "Halo Solvion, saya tertarik dengan paket UMR. Mohon informasi lebih lanjut mengenai proses aktivasi dan langkah selanjutnya."
                                )}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="pricing-btn"
                            >
                                {plan.cta}
                            </a>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
