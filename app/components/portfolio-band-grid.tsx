"use client";

import React, { useLayoutEffect, useRef, useState } from "react";
import AboutMe from "./about_me";
import ProfileBar from "./profile_bar";
import ProjsExp from "./projs_exp";
import SkillsTech from "./skills_tech";
import { StaggerItem } from "./stagger-item";

const LG_MIN_PX = 1024;

/**
 * Three-column band: measures Profile.bar (aside) height at lg+ and sets the
 * center and projects parents to that exact height. Children use h-full +
 * min-h-0 + internal scroll so they fill the band instead of growing the row.
 */
export default function PortfolioBandGrid() {
  const measureRef = useRef<HTMLElement>(null);
  const [bandPx, setBandPx] = useState<number | undefined>(undefined);
  const [isLg, setIsLg] = useState(false);

  useLayoutEffect(() => {
    const mq = window.matchMedia(`(min-width: ${LG_MIN_PX}px)`);
    const sync = () => setIsLg(mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  useLayoutEffect(() => {
    const el = measureRef.current;
    if (!isLg || !el) {
      setBandPx(undefined);
      return;
    }
    const update = () => setBandPx(el.getBoundingClientRect().height);
    const ro = new ResizeObserver(update);
    ro.observe(el);
    update();
    return () => ro.disconnect();
  }, [isLg]);

  /** Fixed height + clip; scrolling happens inside each column’s children. */
  const bandParentStyle: React.CSSProperties | undefined =
    isLg && bandPx !== undefined
      ? { height: bandPx, minHeight: 0, overflow: "hidden" }
      : undefined;

  return (
    <div
      className="mx-auto grid min-h-0 w-full max-w-full min-w-0 grid-cols-1 gap-[1.171875rem] md:gap-[1.46484375rem] lg:w-full lg:grid-cols-[minmax(12.65rem,0.88fr)_minmax(0,2fr)_minmax(0,1.35fr)] lg:items-start"
      style={
        bandPx !== undefined && isLg
          ? ({ "--profile-band-h": `${bandPx}px` } as React.CSSProperties)
          : undefined
      }
    >
      <StaggerItem
        index={1}
        className="flex min-h-0 min-w-0 flex-col items-start"
      >
        <aside
          ref={measureRef}
          className="flex h-min min-h-0 w-full min-w-0 flex-col"
          aria-label="Profile"
        >
          <ProfileBar />
        </aside>
      </StaggerItem>

      <main
        className="grid min-h-0 min-w-0 grid-cols-1 gap-[1.171875rem] lg:grid-cols-2 lg:items-stretch lg:gap-[1.46484375rem] xl:gap-[1.7578125rem]"
        style={bandParentStyle}
      >
        <StaggerItem
          index={2}
          className="flex min-h-0 min-w-0 flex-col overflow-x-hidden lg:h-full lg:min-h-0 lg:overflow-hidden"
        >
          <AboutMe />
        </StaggerItem>
        <StaggerItem
          index={3}
          className="flex min-h-0 min-w-0 flex-col overflow-x-hidden lg:h-full lg:min-h-0 lg:overflow-hidden"
        >
          <SkillsTech />
        </StaggerItem>
      </main>

      <StaggerItem
        index={4}
        className="flex min-h-0 min-w-0 max-w-full lg:min-h-0"
      >
        <aside
          className="flex h-full min-h-0 w-full min-w-0 max-w-full flex-col overflow-x-hidden lg:min-h-0"
          style={bandParentStyle}
          aria-label="Projects"
        >
          <ProjsExp />
        </aside>
      </StaggerItem>
    </div>
  );
}
