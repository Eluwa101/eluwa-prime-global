"use client";

import { useEffect, useRef, useState } from "react";

type AnimatedCounterProps = {
  value: number;
  suffix?: string;
};

export function AnimatedCounter({ value, suffix = "" }: AnimatedCounterProps) {
  const ref = useRef<HTMLSpanElement | null>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const node = ref.current;

    if (!node) {
      return;
    }

    let animationFrame = 0;
    let hasStarted = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || hasStarted) {
          return;
        }

        hasStarted = true;
        const duration = 1200;
        const start = performance.now();

        const tick = (timestamp: number) => {
          const progress = Math.min((timestamp - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplayValue(Math.round(value * eased));

          if (progress < 1) {
            animationFrame = window.requestAnimationFrame(tick);
          }
        };

        animationFrame = window.requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.5 }
    );

    observer.observe(node);

    return () => {
      observer.disconnect();
      window.cancelAnimationFrame(animationFrame);
    };
  }, [value]);

  return (
    <span ref={ref}>
      {displayValue}
      {suffix}
    </span>
  );
}

