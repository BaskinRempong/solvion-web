"use client";

import React, { useEffect, useRef } from "react";

interface SquareProps {
    id: number;
    size: number;
    delay: number;
    x: number;
    y: number;
    opacity: number;
}

function generateSquares(count: number): SquareProps[] {
    const squares: SquareProps[] = [];
    for (let i = 0; i < count; i++) {
        squares.push({
            id: i,
            size: Math.random() * 60 + 20,
            delay: Math.random() * 8,
            x: Math.random() * 100,
            y: Math.random() * 100,
            opacity: Math.random() * 0.1 + 0.02,
        });
    }
    return squares;
}

export function AnimatedSquaresBackground({
    className = "",
}: {
    className?: string;
}) {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const animFrameRef = useRef<number>(0);

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d");
        if (!ctx) return;

        let w = 0;
        let h = 0;

        const resize = () => {
            const rect = canvas.getBoundingClientRect();
            w = canvas.width = rect.width;
            h = canvas.height = rect.height;
        };

        resize();
        window.addEventListener("resize", resize);

        const particleCount = 50;
        const particles: {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            pulse: number;
            pulseSpeed: number;
        }[] = [];

        for (let i = 0; i < particleCount; i++) {
            particles.push({
                x: Math.random() * w,
                y: Math.random() * h,
                size: Math.random() * 3 + 1,
                speedX: (Math.random() - 0.5) * 0.3,
                speedY: (Math.random() - 0.5) * 0.3,
                opacity: Math.random() * 0.4 + 0.1,
                pulse: Math.random() * Math.PI * 2,
                pulseSpeed: Math.random() * 0.02 + 0.005,
            });
        }

        const squareCount = 12;
        const squares: {
            x: number;
            y: number;
            size: number;
            rotation: number;
            rotSpeed: number;
            opacity: number;
            borderOnly: boolean;
        }[] = [];

        for (let i = 0; i < squareCount; i++) {
            squares.push({
                x: Math.random() * w,
                y: Math.random() * h,
                size: Math.random() * 80 + 30,
                rotation: Math.random() * Math.PI * 2,
                rotSpeed: (Math.random() - 0.5) * 0.003,
                opacity: Math.random() * 0.06 + 0.02,
                borderOnly: Math.random() > 0.4,
            });
        }

        const animate = () => {
            ctx.clearRect(0, 0, w, h);

            // Draw squares
            for (const sq of squares) {
                sq.rotation += sq.rotSpeed;
                ctx.save();
                ctx.translate(sq.x, sq.y);
                ctx.rotate(sq.rotation);

                if (sq.borderOnly) {
                    ctx.strokeStyle = `rgba(158, 227, 125, ${sq.opacity})`;
                    ctx.lineWidth = 1;
                    ctx.strokeRect(
                        -sq.size / 2,
                        -sq.size / 2,
                        sq.size,
                        sq.size
                    );
                } else {
                    ctx.fillStyle = `rgba(158, 227, 125, ${sq.opacity * 0.5})`;
                    ctx.fillRect(
                        -sq.size / 2,
                        -sq.size / 2,
                        sq.size,
                        sq.size
                    );
                }
                ctx.restore();
            }

            // Draw particles
            for (const p of particles) {
                p.x += p.speedX;
                p.y += p.speedY;
                p.pulse += p.pulseSpeed;

                if (p.x < 0) p.x = w;
                if (p.x > w) p.x = 0;
                if (p.y < 0) p.y = h;
                if (p.y > h) p.y = 0;

                const currentOpacity =
                    p.opacity * (0.5 + 0.5 * Math.sin(p.pulse));

                ctx.beginPath();
                ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(158, 227, 125, ${currentOpacity})`;
                ctx.fill();
            }

            // Draw connections
            for (let i = 0; i < particles.length; i++) {
                for (let j = i + 1; j < particles.length; j++) {
                    const dx = particles[i].x - particles[j].x;
                    const dy = particles[i].y - particles[j].y;
                    const dist = Math.sqrt(dx * dx + dy * dy);
                    if (dist < 150) {
                        ctx.beginPath();
                        ctx.moveTo(particles[i].x, particles[i].y);
                        ctx.lineTo(particles[j].x, particles[j].y);
                        ctx.strokeStyle = `rgba(158, 227, 125, ${0.06 * (1 - dist / 150)})`;
                        ctx.lineWidth = 0.5;
                        ctx.stroke();
                    }
                }
            }

            animFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        return () => {
            window.removeEventListener("resize", resize);
            cancelAnimationFrame(animFrameRef.current);
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className={`absolute inset-0 pointer-events-none ${className}`}
            style={{ width: "100%", height: "100%" }}
        />
    );
}
