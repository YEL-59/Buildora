"use client";

import { useState, useEffect } from "react";

export function useCountUp(
  target: number,
  duration: number = 2000,
  trigger: boolean = false,
  decimals: number = 0
) {
  const [count, setCount] = useState<number>(0);

  useEffect(() => {
    if (!trigger) {
      setCount(0);
      return;
    }

    let start = 0;
    const end = target;
    let startTime: number | null = null;
    let animationFrameId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // easeOutCubic curve
      const easeProgress = 1 - Math.pow(1 - progress, 3);
      const currentVal = start + (end - start) * easeProgress;

      if (decimals > 0) {
        setCount(parseFloat(currentVal.toFixed(decimals)));
      } else {
        setCount(Math.round(currentVal));
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(step);
      } else {
        setCount(end);
      }
    };

    animationFrameId = requestAnimationFrame(step);

    return () => cancelAnimationFrame(animationFrameId);
  }, [target, duration, trigger, decimals]);

  return count;
}
