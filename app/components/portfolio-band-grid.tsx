import React from "react";
import AboutMe from "./about_me";
import ProfileBar from "./profile_bar";
import ProjsExp from "./projs_exp";
import SkillsTech from "./skills_tech";
import { StaggerItem } from "./stagger-item";

/**
 * Three-column band: each column is content-sized (no shared fixed height),
 * so About, Skills, and Projects are never clipped by a parent overflow.
 */
export default function PortfolioBandGrid() {
  return (
    <div className="mx-auto grid min-h-0 w-full max-w-full min-w-0 grid-cols-1 gap-[0.625rem] md:gap-[0.75rem] lg:w-full lg:grid-cols-[minmax(9.75rem,0.76fr)_minmax(0,1.88fr)_minmax(0,1.15fr)] lg:gap-[0.75rem] lg:items-start">
      <StaggerItem
        index={1}
        className="flex min-h-0 min-w-0 flex-col items-start lg:min-h-0"
      >
        <aside
          className="flex h-min min-h-0 w-full min-w-0 flex-col"
          aria-label="Profile"
        >
          <ProfileBar />
        </aside>
      </StaggerItem>

      <main className="grid min-h-0 min-w-0 grid-cols-1 gap-[0.625rem] lg:grid-cols-2 lg:items-start lg:gap-[0.875rem] xl:gap-[1rem]">
        <StaggerItem
          index={2}
          className="flex min-h-0 min-w-0 flex-col overflow-x-hidden lg:min-h-0 lg:w-full lg:self-start lg:overflow-visible"
        >
          <AboutMe />
        </StaggerItem>
        <StaggerItem
          index={3}
          className="flex min-h-0 min-w-0 flex-col overflow-x-hidden lg:min-h-0 lg:w-full lg:self-start lg:overflow-visible"
        >
          <SkillsTech />
        </StaggerItem>
      </main>

      <StaggerItem
        index={4}
        className="flex min-h-0 min-w-0 max-w-full lg:min-h-0"
      >
        <aside
          className="flex min-h-0 w-full min-w-0 max-w-full flex-col overflow-x-hidden lg:overflow-visible"
          aria-label="Projects"
        >
          <ProjsExp />
        </aside>
      </StaggerItem>
    </div>
  );
}
