"use client";

import { useState, useRef, useEffect } from "react";
import { portfolioProjects as projects } from "./projectsData";

const GithubIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const ExternalIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
    <path d="M18 13v6a2 2 0 01-2 2H5a2 2 0 01-2-2V8a2 2 0 012-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

function FlipCard({ project, flipped, onClick, embedded = false }) {
  const outerStyle = embedded
    ? {
        width: "100%",
        height: "100%",
        maxWidth: "100%",
        maxHeight: "100%",
        boxSizing: "border-box",
      }
    : undefined;

  const inner3dStyle = {
    width: "100%",
    height: "100%",
    position: "relative",
    transformStyle: "preserve-3d",
    transition: "transform 0.55s cubic-bezier(0.4, 0.2, 0.2, 1)",
    transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
  };

  const faceBase = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    backfaceVisibility: "hidden",
    WebkitBackfaceVisibility: "hidden",
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className={
        embedded
          ? "project-flip-card project-flip-card--embedded cursor-pointer touch-manipulation outline-none focus-visible:ring-2 focus-visible:ring-[var(--retro-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--retro-meta-bg)]"
          : "project-flip-card max-w-full cursor-pointer touch-manipulation outline-none focus-visible:ring-2 focus-visible:ring-[var(--retro-accent)] focus-visible:ring-offset-2 focus-visible:ring-offset-[var(--retro-meta-bg)]"
      }
      style={outerStyle}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      <div style={inner3dStyle}>
        <div
          style={{
            ...faceBase,
            background: project.color,
            border: `4px solid ${project.accent}`,
            borderRadius: "4px",
            boxShadow: `6px 6px 0px ${project.accent}`,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "1rem",
            fontFamily: "'Courier New', Courier, monospace",
          }}
        >
          <div
            style={{
              fontSize: "clamp(2.75rem, 12vmin, 4rem)",
              lineHeight: 1,
              marginBottom: "0.5rem",
            }}
          >
            {project.emoji}
          </div>
          <h2
            style={{
              fontSize: "clamp(16px, 4.5vmin, 22px)",
              fontWeight: "bold",
              color: project.accent,
              margin: "0 0 0.65rem 0",
              textAlign: "center",
              letterSpacing: "-0.5px",
              lineHeight: 1.15,
            }}
          >
            {project.title}
          </h2>
          <div
            style={{
              fontSize: "10px",
              fontWeight: "bold",
              color: project.accent,
              background: "rgba(255,255,255,0.45)",
              border: `2px solid ${project.accent}`,
              borderRadius: "2px",
              padding: "4px 10px",
              letterSpacing: "1px",
            }}
          >
            CLICK TO FLIP ▶
          </div>
        </div>

        <div
          style={{
            ...faceBase,
            transform: "rotateY(180deg)",
            background: "#1a1a2e",
            border: `4px solid ${project.color}`,
            borderRadius: "4px",
            boxShadow: `6px 6px 0px ${project.color}`,
            display: "flex",
            flexDirection: "column",
            padding: "0.85rem",
            fontFamily: "'Courier New', Courier, monospace",
            color: project.color,
            overflowY: "auto",
            minHeight: 0,
          }}
        >
          <div
            style={{
              fontSize: "11px",
              opacity: 0.68,
              letterSpacing: "2px",
              marginBottom: "0.25rem",
              fontWeight: 700,
            }}
          >
            ◀ FLIP BACK
          </div>
          <h3
            style={{
              fontSize: "15px",
              fontWeight: "bold",
              color: project.color,
              margin: "0 0 2px 0",
            }}
          >
            {project.title}
          </h3>
          <p style={{ fontSize: "11px", color: project.color, opacity: 0.6, margin: "0 0 0.35rem 0" }}>
            {project.year}
          </p>

          <div
            style={{
              flex: "1 1 auto",
              minHeight: 0,
              display: "grid",
              gridTemplateRows: "3fr 2fr",
              gap: "0.5rem",
              marginTop: "0.25rem",
            }}
          >
            <div
              style={{
                minHeight: 0,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                borderBottom: `2px dashed ${project.color}`,
                paddingBottom: "0.35rem",
              }}
            >
              <span
                style={{
                  fontSize: "12px",
                  opacity: 0.82,
                  letterSpacing: "1.2px",
                  marginBottom: "0.35rem",
                  fontWeight: 700,
                }}
              >
                DESCRIPTION
              </span>
              <p
                style={{
                  fontSize: "clamp(11px, 3vmin, 15px)",
                  lineHeight: 1.4,
                  color: project.color,
                  opacity: 0.92,
                  margin: 0,
                  flex: "1 1 auto",
                }}
              >
                {project.description}
              </p>
            </div>

            <div
              style={{
                minHeight: 0,
                overflowY: "auto",
                display: "flex",
                flexDirection: "column",
                gap: "6px",
                justifyContent: "flex-start",
              }}
            >
              <span
                style={{
                  fontSize: "13px",
                  opacity: 0.82,
                  letterSpacing: "1.2px",
                  fontWeight: 700,
                }}
              >
                LINKS
              </span>
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: project.color,
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: "bold",
                  background: "rgba(255,255,255,0.07)",
                  border: `2px solid ${project.color}`,
                  borderRadius: "3px",
                  padding: "5px 8px",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
              >
                <ExternalIcon /> Live Site
              </a>
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => e.stopPropagation()}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                  color: project.color,
                  textDecoration: "none",
                  fontSize: "11px",
                  fontWeight: "bold",
                  background: "rgba(255,255,255,0.07)",
                  border: `2px solid ${project.color}`,
                  borderRadius: "3px",
                  padding: "5px 8px",
                  transition: "background 0.15s",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.07)";
                }}
              >
                <GithubIcon /> GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ProjectRail({ projects, activeId, onSelect, embedded = false }) {
  const navStyle = embedded
    ? {
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }
    : undefined;

  return (
    <nav
      style={navStyle}
      className={
        embedded
          ? "project-showcase-rail shrink-0 overflow-hidden rounded-[4px] border-[3px] border-[var(--retro-accent)] bg-[var(--retro-meta-bg)] shadow-[4px_4px_0_0_var(--retro-accent)]"
          : "project-showcase-rail flex h-full min-h-0 w-full min-w-0 max-w-full shrink-0 flex-col self-stretch overflow-hidden rounded-[4px] border-[3px] border-[var(--retro-accent)] bg-[var(--retro-meta-bg)] shadow-[4px_4px_0_0_var(--retro-accent)]"
      }
      aria-label="Project list"
    >
      <div
        className="project-showcase-rail-heading shrink-0 px-2.5 py-1.5 font-mono font-bold tracking-[0.2em]"
        style={{
          background: "var(--retro-accent)",
          color: "#f8fafc",
        }}
      >
        PROJECTS
      </div>
      <ul
        className={
          embedded
            ? "m-0 flex flex-1 flex-col list-none p-0"
            : "m-0 flex min-h-0 flex-1 flex-col list-none p-0"
        }
      >
        {projects.map((p, i) => {
          const isActive = p.id === activeId;
          const liClass = embedded
            ? `flex flex-1 flex-col ${i > 0 ? "border-t-2 border-dashed border-[color-mix(in_srgb,var(--retro-muted)_50%,transparent)]" : ""}`
            : `flex min-h-0 flex-1 flex-col ${i > 0 ? "border-t-2 border-dashed border-[color-mix(in_srgb,var(--retro-muted)_50%,transparent)]" : ""}`;
          const btnClass = embedded
            ? "flex w-full min-h-[4.15rem] flex-1 cursor-pointer items-center gap-1.5 px-2 py-1.5 text-left font-mono transition-colors sm:px-2.5"
            : "flex h-full min-h-0 w-full flex-1 cursor-pointer items-center gap-1.5 px-2.5 py-1.5 text-left font-mono transition-colors";
          return (
            <li key={p.id} className={liClass}>
              <button
                type="button"
                aria-current={isActive ? "true" : undefined}
                onMouseEnter={() => onSelect(p.id)}
                onFocus={() => onSelect(p.id)}
                onClick={() => onSelect(p.id)}
                className={btnClass}
                style={{
                  background: isActive ? p.color : "transparent",
                }}
              >
                <span className="shrink-0 text-base" aria-hidden>
                  {p.emoji}
                </span>
                <span className="min-w-0 flex-1">
                  <span
                    className="block text-[11px] font-bold leading-snug break-words sm:text-[12px]"
                    style={{ color: isActive ? p.accent : "var(--retro-accent)" }}
                  >
                    {p.title}
                  </span>
                  <span
                    className="block text-[10px] tracking-wide"
                    style={{
                      color: isActive ? p.accent : "var(--retro-muted)",
                      opacity: isActive ? 0.75 : 1,
                    }}
                  >
                    {p.year}
                  </span>
                </span>
                {isActive ? (
                  <span className="shrink-0 text-xs font-bold" style={{ color: p.accent }} aria-hidden>
                    ▶
                  </span>
                ) : null}
              </button>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

/**
 * @param {{ embedded?: boolean }} props
 *   embedded — strip page chrome; use inside Projects.log / RetroWidget.
 *   Layout: vertical hover rail (left) · flip card (right), Profile.bar–style column pairing.
 */
export default function ProjectShowcase({ embedded = false }) {
  const [activeId, setActiveId] = useState(projects[0].id);
  const [flipped, setFlipped] = useState(false);
  const flippedRef = useRef(false);

  useEffect(() => {
    flippedRef.current = flipped;
  }, [flipped]);

  const handleSelect = (id) => {
    if (id === activeId) return;
    const wasFlipped = flippedRef.current;
    setFlipped(false);
    setTimeout(
      () => {
        setActiveId(id);
      },
      wasFlipped ? 320 : 0,
    );
  };

  const activeProject = projects.find((p) => p.id === activeId) ?? projects[0];

  if (embedded) {
    /** Self-sized box so parent does not need a fixed height (avoids clipping siblings). */
    const embedBox = {
      minHeight: "clamp(20rem, 56vh, 32rem)",
      height: "clamp(20rem, 56vh, 32rem)",
      maxHeight: "min(92vh, 32rem)",
    };

    return (
      <div
        className="project-showcase-embed flex w-full min-w-0 shrink-0 flex-col"
        style={embedBox}
      >
        <div
          className="project-showcase-log-panel min-h-0 flex-1"
          style={{
            display: "grid",
            gridTemplateColumns: "minmax(8.35rem, 2fr) minmax(0, 3fr)",
            gap: "0.4rem",
            alignItems: "stretch",
            flex: "1 1 auto",
            minHeight: 0,
            height: "100%",
            overflow: "hidden",
            boxSizing: "border-box",
          }}
        >
          <div
            style={{
              height: "100%",
              minHeight: 0,
              minWidth: 0,
              display: "flex",
              flexDirection: "column",
              overflow: "hidden",
            }}
          >
            <ProjectRail
              embedded
              projects={projects}
              activeId={activeId}
              onSelect={handleSelect}
            />
          </div>
          <div
            className="project-flip-card-wrap"
            style={{
              height: "100%",
              minHeight: 0,
              minWidth: 0,
              display: "flex",
              flexDirection: "row",
              alignItems: "stretch",
              justifyContent: "center",
              overflow: "hidden",
            }}
          >
            <FlipCard embedded project={activeProject} flipped={flipped} onClick={() => setFlipped((f) => !f)} />
          </div>
        </div>
      </div>
    );
  }

  const body = (
    <div className="project-showcase-split flex w-full min-w-0 flex-col gap-8 sm:flex-row">
      <div className="flex shrink-0 justify-center sm:justify-start sm:self-stretch">
        <ProjectRail projects={projects} activeId={activeId} onSelect={handleSelect} />
      </div>
      <div className="flex min-h-0 min-w-0 flex-1 justify-center sm:justify-end">
        <FlipCard project={activeProject} flipped={flipped} onClick={() => setFlipped((f) => !f)} />
      </div>
    </div>
  );

  return (
    <section className="px-2 py-1 font-mono sm:px-3 sm:py-1.5">
      <h1 className="mb-4 text-[1.65rem] font-bold tracking-tight text-[var(--color-text-primary,#f8fafc)]">
        Projects
      </h1>
      {body}
      <p className="mt-3 text-[11px] tracking-wide text-[var(--color-text-secondary,#cbd5e1)]">
        HOVER OR FOCUS THE LIST TO SWITCH · CLICK THE CARD TO FLIP
      </p>
    </section>
  );
}
