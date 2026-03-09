import { cn } from "@/lib/utils";
import React from "react";

export function RetroGrid({
    className,
    angle = 65,
}: {
    className?: string;
    angle?: number;
}) {
    return (
        <div
            className={cn(
                "pointer-events-none absolute inset-0 overflow-hidden opacity-30 [perspective:300px]",
                className
            )}
            style={{ "--grid-angle": `${angle}deg` } as React.CSSProperties}
        >
            {/* Rotated container */}
            <div
                className="absolute inset-0"
                style={{ transform: "rotateX(var(--grid-angle))" }}
            >
                <div
                    className={cn(
                        "[animation:retroGridMove_25s_linear_infinite]",
                        "[background-repeat:repeat]",
                        "[background-size:60px_60px]",
                        "[height:300vh]",
                        "[width:600vw]",
                        "[margin-left:-50%]",
                        "[background-image:linear-gradient(to_right,rgba(158,227,125,0.7)_1px,transparent_0),linear-gradient(to_bottom,rgba(158,227,125,0.7)_1px,transparent_0)]"
                    )}
                />
            </div>

            {/* Fade gradient for depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#232425] via-[#232425]/70 to-transparent" />
        </div>
    );
}