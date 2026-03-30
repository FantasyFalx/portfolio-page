import React from "react";

export type RetroTheme =
  | "amber"
  | "cyan"
  | "coral"
  | "emerald"
  | "rose"
  | "lime"
  | "violet";

export type RetroWidgetProps = {
  label?: string;
  title: string;
  subtitle?: string;
  children?: React.ReactNode;
  className?: string;
  bodyClassName?: string;
  /** Dashed rule between meta header and body (header already has a bottom border) */
  showDivider?: boolean;
  theme?: RetroTheme;
};

function cn(...parts: (string | undefined | false)[]): string {
  return parts.filter(Boolean).join(" ");
}

export function RetroWidget({
  label,
  title,
  subtitle,
  children,
  className,
  bodyClassName,
  showDivider = false,
  theme = "amber",
}: RetroWidgetProps) {
  return (
    <section
      data-theme={theme}
      className={cn("retro-widget flex min-h-0 flex-col", className)}
    >
      <header className="retro-widget-header">
        {label ? <span className="retro-widget-label">{label}</span> : null}
        <h2 className="retro-widget-title">{title}</h2>
        {subtitle ? <p className="retro-widget-subtitle">{subtitle}</p> : null}
      </header>
      {showDivider ? <hr className="retro-divider" /> : null}
      {children ? (
        <div className={cn("retro-widget-body min-h-0", bodyClassName)}>
          {children}
        </div>
      ) : null}
    </section>
  );
}
