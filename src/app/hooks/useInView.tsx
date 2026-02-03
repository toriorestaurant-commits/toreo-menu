"use client";

import { useEffect, useRef, useState } from "react";

type Options = {
  root?: Element | null;
  rootMargin?: string;
  threshold?: number | number[];
  once?: boolean;
};

export function useInView<T extends HTMLElement = HTMLElement>(options: Options = {}) {
  const ref = useRef<T | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry?.isIntersecting) {
          setInView(true);
          if (options.once) obs.unobserve(el);
        }
      },
      {
        root: options.root ?? null,
        rootMargin: options.rootMargin ?? "0px",
        threshold: options.threshold ?? 0.12,
      }
    );

    obs.observe(el);
    return () => obs.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [ref.current]);

  return { ref, inView } as const;
}
