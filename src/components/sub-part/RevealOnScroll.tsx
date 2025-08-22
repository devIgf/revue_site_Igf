import React, { useRef, useState, useEffect, ReactNode } from "react";

interface RevealOnScrollProps {
  children: ReactNode;
}

const RevealOnScroll: React.FC<RevealOnScrollProps> = ({ children }) => {
  const ref = useRef<HTMLElement | null>(null);
  const [hasRevealed, setHasRevealed] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasRevealed(true);
          observer.disconnect(); // Stop observing after reveal
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className={`transition-all duration-1000 ease-out transform ${
        hasRevealed
          ? "opacity-100 translate-y-0 scale-100"
          : "opacity-0 translate-y-12 scale-[0.98] pointer-events-none"
      }`}
    >
      {children}
    </section>
  );
};

export default RevealOnScroll;
