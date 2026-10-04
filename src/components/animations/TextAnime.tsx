"use client";

import React, { useRef, useEffect, useState } from "react";

export interface TextAnimeProps {
  children?: React.ReactNode;
  text?: string;
  className?: string;
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "p" | "span" | "div";
  delay?: number;
  threshold?: number;
}

export default function TextAnime({
  children,
  text,
  className = "",
  as: Component = "h2",
  delay = 0.1,
  threshold = 0.15,
}: TextAnimeProps) {
  const containerRef = useRef<HTMLElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
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
        rootMargin: "0px 0px -50px 0px",
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);

  // Extract text content if children are passed or text prop
  const extractTextAndElements = (
    node: React.ReactNode
  ): (string | React.ReactElement)[] => {
    if (typeof node === "string") return [node];
    if (typeof node === "number") return [String(node)];
    if (Array.isArray(node)) {
      return node.flatMap(extractTextAndElements);
    }
    if (React.isValidElement(node)) {
      return [node];
    }
    return [];
  };

  const rawElements = text ? [text] : extractTextAndElements(children);

  let globalCharIndex = 0;

  const renderContent = () => {
    return rawElements.map((item, idx) => {
      if (typeof item === "string") {
        // Split by words first to preserve wrapping
        const words = item.split(" ");
        return (
          <React.Fragment key={idx}>
            {words.map((word, wordIdx) => {
              const chars = Array.from(word);
              const wordNode = (
                <span
                  key={wordIdx}
                  className="inline-block whitespace-nowrap"
                  style={{ perspective: "600px" }}
                >
                  {chars.map((char, charIdx) => {
                    const currentIdx = globalCharIndex++;
                    const charDelay = delay + currentIdx * 0.016;

                    return (
                      <span
                        key={charIdx}
                        className="inline-block transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]"
                        style={{
                          opacity: isInView ? 1 : 0,
                          transform: isInView
                            ? "translate3d(0, 0, 0) rotateX(0deg)"
                            : "translate3d(35px, 0, 0) rotateX(15deg)",
                          transitionDelay: `${charDelay}s`,
                          willChange: "transform, opacity",
                        }}
                      >
                        {char}
                      </span>
                    );
                  })}
                  {wordIdx < words.length - 1 && (
                    <span className="inline-block">&nbsp;</span>
                  )}
                </span>
              );
              return wordNode;
            })}
          </React.Fragment>
        );
      }
      // If it's a JSX element like <br />
      return <React.Fragment key={idx}>{item}</React.Fragment>;
    });
  };

  const Tag = Component as React.ElementType;

  return (
    <Tag
      ref={containerRef}
      className={`text-anime-style-3 ${className}`}
      style={{ perspective: "800px" }}
    >
      {renderContent()}
    </Tag>
  );
}
