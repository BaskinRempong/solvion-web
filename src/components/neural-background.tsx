"use client";

import React, { useEffect, useState } from "react";

interface NeuralNode {
    x: number;
    y: number;
    r: number;
}

interface NeuralLine {
    x1: number;
    y1: number;
    x2: number;
    y2: number;
    opacity: number;
}

interface NeuralBackgroundProps {
    nodeCount?: number;
    lineOpacity?: number;
    className?: string;
}

export default function NeuralBackground({
    nodeCount = 35,
    lineOpacity = 0.35,
    className = "",
}: NeuralBackgroundProps) {
    const [nodes, setNodes] = useState<NeuralNode[]>([]);
    const [lines, setLines] = useState<NeuralLine[]>([]);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);

        const width = 1200;
        const height = 600;

        const generatedNodes: NeuralNode[] = [];
        for (let i = 0; i < nodeCount; i++) {
            generatedNodes.push({
                x: Math.random() * width,
                y: Math.random() * height,
                r: 1.5 + Math.random() * 1.5,
            });
        }

        const generatedLines: NeuralLine[] = [];

        for (let i = 0; i < generatedNodes.length; i++) {
            for (let j = i + 1; j < generatedNodes.length; j++) {
                const dx = generatedNodes[i].x - generatedNodes[j].x;
                const dy = generatedNodes[i].y - generatedNodes[j].y;
                const dist = Math.sqrt(dx * dx + dy * dy);

                if (dist < 180) {
                    generatedLines.push({
                        x1: generatedNodes[i].x,
                        y1: generatedNodes[i].y,
                        x2: generatedNodes[j].x,
                        y2: generatedNodes[j].y,
                        opacity: lineOpacity * (1 - dist / 180),
                    });
                }
            }
        }

        setNodes(generatedNodes);
        setLines(generatedLines);
    }, [nodeCount, lineOpacity]);

    if (!mounted) return null;

    return (
        <div className={className}>
            <svg
                viewBox="0 0 1200 600"
                preserveAspectRatio="xMidYMid slice"
                style={{ width: "100%", height: "100%" }}
            >
                <g
                    style={{
                        animation:
                            "neuralFlow 18s ease-in-out infinite alternate",
                        transformOrigin: "center center",
                    }}
                >
                    {lines.map((line, i) => (
                        <line
                            key={`l-${i}`}
                            x1={line.x1}
                            y1={line.y1}
                            x2={line.x2}
                            y2={line.y2}
                            className="neural-line"
                            style={{ opacity: line.opacity }}
                        />
                    ))}

                    {nodes.map((node, i) => (
                        <circle
                            key={`n-${i}`}
                            cx={node.x}
                            cy={node.y}
                            r={node.r}
                            className="neural-dot"
                        />
                    ))}
                </g>
            </svg>
        </div>
    );
}