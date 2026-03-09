"use client";

import { ContainerScroll } from "@/components/ui/container-scroll-animation";

export function JokoScrollDemo() {
    return (
        <ContainerScroll
            titleComponent={
                <>
                    <span className="inline-block mb-4 rounded-full bg-emerald-300/10 px-4 py-2 text-sm font-semibold text-emerald-300">
                        Kenalin, ini Joko. Karyawan AI Salesmu
                    </span>

                    <h2 className="text-4xl md:text-6xl font-bold leading-tight">
                        Yang Ngejarin Calon Pembeli,
                        <br />
                        Biar Kamu Gak Capek.
                    </h2>

                    <p className="mt-6 text-lg text-white/70 max-w-2xl mx-auto">
                        Kamu tinggal nanya: <b>"Ada yang hampir closing?"</b>
                    </p>
                </>
            }
        >
            <div className="relative w-full h-full flex items-center justify-center bg-black">
                <div className="absolute top-6 left-1/2 -translate-x-1/2 z-10 
                  bg-black/60 backdrop-blur-md px-6 py-3 
                  rounded-full text-sm text-white/90 
                  border border-white/10 shadow-lg">
                    Live Demo
                </div>

                <video
                    className="max-h-full max-w-full object-contain rounded-2xl"
                    autoPlay
                    muted
                    loop
                    playsInline
                >
                    <source src="/assets/demo-record-joko-ai.mp4" type="video/mp4" />
                </video>
            </div>
        </ContainerScroll>
    );
}