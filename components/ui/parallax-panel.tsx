"use client";

import { useEffect, useRef, useState } from "react";

type ParallaxPanelProps = {
  children: React.ReactNode;
  className?: string;
};

export function ParallaxPanel({
  children,
  className = ""
}: ParallaxPanelProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const node = ref.current;

      if (!node) {
        return;
      }

      const rect = node.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const elementCenter = rect.top + rect.height / 2;
      const distance = (elementCenter - viewportCenter) * -0.04;

      setOffset(Math.max(Math.min(distance, 22), -22));
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className={`parallax-panel ${className}`.trim()}
      style={{ transform: `translate3d(0, ${offset}px, 0)` }}
    >
      {children}
    </div>
  );
}

