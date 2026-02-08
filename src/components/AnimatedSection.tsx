"use client";

import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  animationType?: "fade-up" | "fade" | "scale" | "slide-left" | "slide-right";
  delay?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  animationType = "fade-up",
  delay = 0,
}: AnimatedSectionProps) {
  const { ref, isVisible } = useScrollAnimation<HTMLDivElement>();

  const animationClass = {
    "fade-up": "scroll-fade-up",
    fade: "scroll-animate",
    scale: "scroll-scale",
    "slide-left": "scroll-fade-left",
    "slide-right": "scroll-fade-right",
  }[animationType];

  return (
    <div
      ref={ref}
      className={`${animationClass} ${isVisible ? "visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}
