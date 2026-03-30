// File for listing and linking projects and experience — same section pattern as Profile.bar
import React from "react";
import ProjectShowcase from "./ProjectShowcase";
import { RetroWidget } from "./retro-widget";

export default function ProjsExp() {
  return (
    <RetroWidget
      theme="violet"
      label="Log"
      title="Projects.log"
      subtitle="Hover the project rail to preview · click the card to flip for links."
      className="flex h-auto min-h-0 w-full min-w-0 shrink-0 flex-col"
      bodyClassName="flex w-full min-w-0 flex-col gap-0 !pt-1 !pb-0"
    >
      <section
        aria-labelledby="projects-log-heading"
        className="mt-2.5 flex flex-col gap-0.5 sm:mt-3"
      >
        <h3 id="projects-log-heading" className="retro-toolbar">
          Showcase · rail + flip
        </h3>
        <p className="m-0 text-[0.6rem] leading-snug text-[color:var(--retro-muted)]">
          Hover a row to preview · click the card for live site & repo.
        </p>
        <div className="projects-log-panel retro-inset subsection-inset flex min-w-0 flex-col overflow-x-hidden overflow-y-visible p-1.5 sm:p-2">
          <ProjectShowcase embedded />
        </div>
      </section>
    </RetroWidget>
  );
}
