import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/**/*.{ts,tsx}",
    ],
    theme: {
        extend: {
            animation: {
                grid: "grid 20s linear infinite",
            },
            keyframes: {
                grid: {
                    "0%": { transform: "translateY(-50%)" },
                    "100%": { transform: "translateY(0%)" },
                },
            },
        },
    },
    plugins: [],
};

export default config;