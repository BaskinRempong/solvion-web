"use client";

import React, { useRef } from "react";
import { useScroll, useTransform, motion } from "framer-motion";

export const ContainerScroll = ({
    titleComponent,
    children,
}: {
    titleComponent: React.ReactNode;
    children: React.ReactNode;
}) => {
    const containerRef = useRef<HTMLDivElement>(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
    });

    const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
    const scale = useTransform(scrollYProgress, [0, 1], [1.05, 1]);
    const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <div
            ref={containerRef}
            className="min-h-screen flex flex-col items-center justify-center relative"
        >
            <div
                className="w-full relative"
                style={{ perspective: "1200px" }}
            >
                <motion.div
                    style={{ translateY: translate }}
                    className="max-w-4xl mx-auto text-center mb-12 px-6"
                >
                    {titleComponent}
                </motion.div>

                <motion.div
                    style={{
                        rotateX: rotate,
                        scale,
                    }}
                    className="max-w-5xl mx-auto w-full px-6"
                >
                    <div className="relative rounded-[30px] p-4 bg-zinc-900 border border-white/10 shadow-2xl">

                        <div className="relative h-[26rem] md:h-[34rem] w-full rounded-2xl overflow-hidden bg-black">
                            {children}
                        </div>

                    </div>
                </motion.div>
            </div>
        </div>
    );
};