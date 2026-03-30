"use client";

import {
  useEffect,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type StaggerItemProps = {
  /** Order in the sequence (0 = first). */
  index: number;
  children: ReactNode;
  className?: string;
  /** Milliseconds between each step. */
  staggerMs?: number;
  /** Duration of each item’s transition. */
  durationMs?: number;
  /** Extra wait before the whole sequence starts (ms). */
  initialDelayMs?: number;
};

/**
 * Fade + slight rise-in after mount, with staggered delay by index.
 * Defaults are slower for a calmer, “gracier” entrance. Respects `prefers-reduced-motion: reduce`.
 */
export function StaggerItem({
  index,
  children,
  className,
  staggerMs = 155,
  durationMs = 720,
  initialDelayMs = 180,
}: StaggerItemProps) {
  const [active, setActive] = useState(false);
  const [reduceMotion, setReduceMotion] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    setReduceMotion(mq.matches);
    const handler = () => setReduceMotion(mq.matches);
    mq.addEventListener("change", handler);

    const start = () => setActive(true);
    if (mq.matches) {
      start();
      return () => mq.removeEventListener("change", handler);
    }
    const t = window.setTimeout(start, initialDelayMs);
    return () => {
      clearTimeout(t);
      mq.removeEventListener("change", handler);
    };
  }, [initialDelayMs]);

  /** Stagger after `active` flips; initial pause is handled by `setTimeout` above. */
  const delay = reduceMotion ? 0 : index * staggerMs;

  const style: CSSProperties | undefined = reduceMotion
    ? undefined
    : {
        opacity: active ? 1 : 0,
        transform: active
          ? "translate3d(0,0,0)"
          : "translate3d(0,18px,0)",
        transitionProperty: "opacity, transform",
        transitionDuration: `${durationMs}ms`,
        transitionTimingFunction: "cubic-bezier(0.25, 0.9, 0.35, 1)",
        transitionDelay: `${delay}ms`,
      };

  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}
