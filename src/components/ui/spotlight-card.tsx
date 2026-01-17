"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";

export const SpotlightCard = ({
    children,
    className = "",
}: {
    children: React.ReactNode;
    className?: string;
}) => {
    const divRef = useRef<HTMLDivElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [opacity, setOpacity] = useState(0);

    const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
        if (!divRef.current || isFocused) return;

        const div = divRef.current;
        const rect = div.getBoundingClientRect();

        setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };

    const handleFocus = () => {
        setIsFocused(true);
        setOpacity(1);
    };

    const handleBlur = () => {
        setIsFocused(false);
        setOpacity(0);
    };

    const handleMouseEnter = () => {
        setOpacity(1);
    };

    const handleMouseLeave = () => {
        setOpacity(0);
    };

    return (
        <div
            ref={divRef}
            onMouseMove={handleMouseMove}
            onFocus={handleFocus}
            onBlur={handleBlur}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={cn(
                // Light Mode: FORCE White background
                "bg-white text-slate-950 border-zinc-200 shadow-sm hover:shadow-xl transition-all duration-300",
                // Dark Mode: Dark card
                "dark:bg-slate-950 dark:border-white/10 dark:text-zinc-50 dark:shadow-none dark:hover:shadow-primary/10",
                className
            )}
        >
            {/* Spotlight Gradient - adjusted for visibility in both modes */}
            <div
                className="pointer-events-none absolute -inset-px transition duration-300 opacity-0 z-10 mix-blend-soft-light"
                style={{
                    opacity,
                    background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(79, 70, 229, 0.4), transparent 40%)`,
                }}
            />
            {/* Content wrapper with z-index to sit above spotlight */}
            <div className="relative z-20 h-full">
                {children}
            </div>
        </div>
    );
};
