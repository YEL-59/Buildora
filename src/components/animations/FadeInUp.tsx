"use client";

import React, { useRef, useEffect, useState } from "react";

export interface FadeInUpProps {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "zoom" | "none";
  distance?: number;
  className?: string;
  threshold?: number;
  as?: "div" | "span" | "p" | "section" | "article" | "li";
}

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.8,
  direction = "up",
  distance = 35,
  className = "",
  threshold = 0.12,
  as: Component = "div",
}: FadeInUpProps) {
  const elementRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = elementRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.unobserve(el);
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -40px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  const getInitialTransform = () => {
    switch (direction) {
      case "up":
        return `translate3d(0, ${distance}px, 0)`;
      case "down":
        return `translate3d(0, -${distance}px, 0)`;
      case "left":
        return `translate3d(-${distance}px, 0, 0)`;
      case "right":
        return `translate3d(${distance}px, 0, 0)`;
      case "zoom":
        return "scale(0.92)";
      case "none":
        return "none";
      default:
        return `translate3d(0, ${distance}px, 0)`;
    }
  };

  const Tag = Component as React.ElementType;

  return (
    <Tag
      ref={elementRef}
      className={`wow fadeInUp ${className}`}
      style={{
        opacity: isInView ? 1 : 0,
        transform: isInView
          ? direction === "zoom"
            ? "scale(1)"
            : "translate3d(0, 0, 0)"
          : getInitialTransform(),
        transition: `opacity ${duration}s cubic-bezier(0.25, 1, 0.5, 1), transform ${duration}s cubic-bezier(0.25, 1, 0.5, 1)`,
        transitionDelay: `${delay}s`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </Tag>
  );
}
