"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";

export default function Navbar() {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 60);
        };
        window.addEventListener("scroll", handleScroll, { passive: true });
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const handleAnchorClick = useCallback(
        (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
            e.preventDefault();
            const targetEl = document.querySelector(href);
            if (targetEl) {
                const navHeight =
                    document.querySelector(".navbar")?.getBoundingClientRect().height ?? 0;
                const top =
                    targetEl.getBoundingClientRect().top + window.pageYOffset - navHeight;
                window.scrollTo({ top, behavior: "smooth" });
            }
        },
        []
    );

    return (
        <nav className={`navbar${scrolled ? " scrolled" : ""}`} id="navbar">
            <div className="container">
                <a href="#" aria-label="Solvion Home">
                    <Image
                        src="/assets/logo.jpeg"
                        alt="Solvion"
                        width={120}
                        height={32}
                        className="navbar-logo"
                        priority
                    />
                </a>
                <a
                    href="#cta"
                    className="navbar-cta"
                    onClick={(e) => handleAnchorClick(e, "#cta")}
                >
                    Coba Sekarang
                </a>
            </div>
        </nav>
    );
}
