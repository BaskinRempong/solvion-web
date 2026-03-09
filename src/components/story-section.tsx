"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";

interface StoryFeature {
    text: string;
}

interface StorySectionProps {
    id: string;
    label: string;
    title: string;
    description: string;
    features: StoryFeature[];
    imageSrc: string;
    imageAlt: string;
    reverse?: boolean;
    caption?: string;
    microNote?: string;
}

export default function StorySection({
    id,
    label,
    title,
    description,
    features,
    imageSrc,
    imageAlt,
    reverse = false,
    caption,
    microNote,
}: StorySectionProps) {
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

        const screenshots = section.querySelectorAll(".story-screenshot");
        const ssObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate-in");
                        ssObserver.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.15, rootMargin: "0px 0px -60px 0px" }
        );
        screenshots.forEach((el) => ssObserver.observe(el));

        return () => {
            observer.disconnect();
            ssObserver.disconnect();
        };
    }, []);

    return (
        <section className="story-section" id={id} ref={sectionRef}>
            <div className="container">
                <div className={`story-grid${reverse ? " reverse" : ""}`}>
                    <div className="story-content fade-up">
                        <span className="story-label">{label}</span>
                        <h2>{title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: description }} />
                        {microNote && <p className="story-micro-note">{microNote}</p>}
                        <ul className="story-features">
                            {features.map((f, i) => (
                                <li key={i}>
                                    <span className="check">✓</span>
                                    <span>{f.text}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="story-visual fade-up">
                        <div className="story-screenshot-wrap">
                            <Image
                                src={imageSrc}
                                alt={imageAlt}
                                width={600}
                                height={500}
                                className="story-screenshot"
                                loading="lazy"
                            />
                        </div>
                        {caption && <p className="story-caption fade-up">{caption}</p>}
                    </div>
                </div>
            </div>
        </section>
    );
}
