import Image from "next/image";

export default function Footer() {
    return (
        <footer className="footer py-10">
            <div className="container flex flex-col items-center gap-6 md:flex-row md:justify-between">

                {/* Logo */}
                <div className="relative h-8 w-auto">
                    <Image
                        src="/assets/logo.jpeg"
                        alt="Solvion"
                        width={160}
                        height={40}
                        className="h-8 w-auto object-contain"
                        priority
                    />
                </div>

                {/* Copyright */}
                <p className="footer-text text-sm text-white/60 text-center md:text-left">
                    © 2026 Solvion. Karyawan AI untuk Bisnismu.
                </p>

                {/* Links */}
                <div className="footer-links flex items-center gap-6">
                    <a
                        href="mailto:accelistsolusiindonesia@gmail.com"
                        className="link-animated"
                    >
                        Kontak
                    </a>

                    <a
                        href="https://instagram.com/solvion.id"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="footer-icon"
                        aria-label="Instagram"
                    >
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="1.8"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <rect x="2" y="2" width="20" height="20" rx="5" />
                            <circle cx="12" cy="12" r="4" />
                            <circle cx="18" cy="6" r="1.5" />
                        </svg>
                    </a>
                </div>
            </div>
        </footer>
    );
}