"use client";

import type { ReactNode } from "react";
import { useEffect, useRef, useState } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setVisible(true);
      return;
    }

    let obs: IntersectionObserver | null = null;
    let finished = false;

    const show = () => {
      if (finished) return;
      finished = true;
      setVisible(true);
      obs?.disconnect();
      obs = null;
    };

    /** Si el bloque ya está en la ventana (p. ej. hero), no depender solo del observer. */
    const inViewport = () => {
      const rect = el.getBoundingClientRect();
      const vh = window.innerHeight || document.documentElement.clientHeight;
      return rect.top < vh && rect.bottom > 0;
    };

    const run = () => {
      if (inViewport()) {
        show();
        return;
      }
      obs = new IntersectionObserver(
        (entries) => {
          const e = entries[0];
          if (e?.isIntersecting) show();
        },
        { threshold: 0, rootMargin: "0px 0px 32px 0px" },
      );
      obs.observe(el);
    };

    requestAnimationFrame(() => requestAnimationFrame(run));

    return () => {
      finished = true;
      obs?.disconnect();
    };
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out motion-reduce:transition-none motion-reduce:!translate-y-0 motion-reduce:!opacity-100 ${
        visible
          ? "translate-y-0 opacity-100"
          : "translate-y-5 opacity-0 sm:translate-y-6"
      } ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" }}
    >
      {children}
    </div>
  );
}
