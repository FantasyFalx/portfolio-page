import React from "react";

/** Pixel-ish grass strip for the terminal dashboard floor — decorative only. */
export default function GrassFooter() {
  return (
    <div
      className="pointer-events-none fixed inset-x-0 bottom-0 z-0 h-12 overflow-hidden select-none"
      aria-hidden
    >
      <svg
        className="h-full w-full text-emerald-500/35"
        preserveAspectRatio="none"
        viewBox="0 0 1440 48"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="grass-fade" x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="currentColor" stopOpacity="0.55" />
            <stop offset="100%" stopColor="currentColor" stopOpacity="0" />
          </linearGradient>
        </defs>
        <rect fill="url(#grass-fade)" height="48" width="1440" y="0" />
        <g fill="currentColor" opacity="0.9">
          {Array.from({ length: 48 }).map((_, i) => {
            const x = i * 30 + (i % 3) * 4;
            const h = 14 + (i % 5) * 3;
            const w = 3 + (i % 2);
            return (
              <rect
                key={i}
                height={h}
                rx="1"
                width={w}
                x={x}
                y={48 - h}
              />
            );
          })}
        </g>
        <g fill="currentColor" opacity="0.65">
          {Array.from({ length: 36 }).map((_, i) => {
            const x = i * 40 + 12;
            const h = 10 + (i % 4) * 2;
            return (
              <rect
                key={`b-${i}`}
                height={h}
                rx="1"
                width="2"
                x={x}
                y={48 - h}
              />
            );
          })}
        </g>
      </svg>
    </div>
  );
}
