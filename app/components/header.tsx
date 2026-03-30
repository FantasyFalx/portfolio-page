// File that holds the header component.

export default function Header() {
  return (
    <div className="flex w-full flex-col items-center gap-1.5 text-center sm:gap-2">
      <h1
        className="m-0 leading-tight tracking-tight text-sky-400 [font-family:var(--font-press-start),var(--font-jetbrains),monospace]"
        style={{
          fontSize: "clamp(1.1rem, 4.2vw, 2.35rem)",
          textShadow:
            "0 0 14px color-mix(in srgb, rgb(56 189 248) 40%, transparent)",
        }}
      >
        George Stimson
      </h1>
      <p
        className="m-0 leading-snug text-slate-100 [font-family:var(--font-press-start),var(--font-jetbrains),monospace]"
        style={{
          fontSize: "clamp(0.62rem, 1.8vw, 1rem)",
          textShadow:
            "0 0 10px color-mix(in srgb, rgb(148 163 184) 25%, transparent)",
        }}
      >
        Data Engineering Portfolio
      </p>
    </div>
  );
}
