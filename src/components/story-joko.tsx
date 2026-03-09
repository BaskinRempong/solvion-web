"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export default function StoryJoko() {
    return (
        <section id="storyJoko" className="relative py-24">
            <ContainerScroll
                titleComponent={
                    <div className="text-center max-w-3xl mx-auto text-white px-6">
                        <span className="inline-block mb-4 rounded-full bg-[#9EE37D]/20 px-4 py-2 text-sm font-semibold text-[#9EE37D] border border-[#9EE37D]/30">
                            Kenalin, ini Joko.AI Karyawan AI Salesmu
                        </span>

                        <h2 className="text-3xl md:text-5xl font-bold leading-tight">
                            Yang Ngejarin Calon Pembeli,
                            <br />
                            Biar Kamu Gak Capek.
                        </h2>

                        <p className="mt-6 text-lg text-white/70">
                            Kamu tinggal nanya:
                            <span className="text-[#9EE37D] font-semibold">
                                {" "}“yang belum follow up siapa?”
                            </span>
                            <br />
                            Joko.AI langsung kasih list + siapin chat follow-up.
                        </p>

                        <div className="mt-6 text-sm text-white/50">
                            Yang ini gak ngilang pas jam makan siang. 🙂
                        </div>

                        <ul className="mt-8 space-y-3 text-white/80 text-sm">
                            <li className="flex items-center justify-center gap-2">
                                <span className="text-[#9EE37D]">✓</span>
                                Ngasih list yang harus dikejar
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <span className="text-[#9EE37D]">✓</span>
                                Bikinin chat follow up yang sopan
                            </li>
                            <li className="flex items-center justify-center gap-2">
                                <span className="text-[#9EE37D]">✓</span>
                                Ngingetin yang udah kelamaan diem
                            </li>
                        </ul>
                    </div>
                }
            >
                <div className="relative w-full h-full flex items-center justify-center bg-[#232425]">

                    {/* Overlay Explanation */}
                    <div
                        className="absolute top-6 left-1/2 -translate-x-1/2 z-20 bg-[#232425]/80 px-6 py-3 rounded-full text-sm text-white border border-[#9EE37D]/20 shadow-lg"
                        style={{ backdropFilter: "blur(12px)" }}
                    >
                        Live Demo — Joko.AI
                    </div>

                    <video
                        className="max-h-full max-w-full object-contain rounded-2xl"
                        autoPlay
                        muted
                        loop
                        playsInline
                        poster="/assets/demo-joko-ai.png"
                    >
                        <source
                            src="/assets/demo-record-joko-ai.mp4"
                            type="video/mp4"
                        />
                    </video>
                </div>
            </ContainerScroll>

            <p className="mt-10 text-center text-white/60 text-sm">
                Semua lewat chat. Gak perlu buka sistem ribet.
            </p>
        </section>
    );
}