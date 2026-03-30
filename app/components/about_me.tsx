// File that will display an info card that describes me.

import Image from "next/image";
import React from "react";
import { RetroWidget } from "./retro-widget";

const PALOMAR_LINKEDIN =
  "https://www.linkedin.com/company/palomar-group-ai/posts/?feedView=all";

export default function AboutMe() {
  return (
    <RetroWidget
      theme="rose"
      label="About"
      title="About_Me.doc"
      subtitle="Draft — not saved to floppy."
      className="about-me-widget flex h-auto min-h-0 w-full min-w-0 shrink-0 flex-col"
      bodyClassName="flex w-full flex-col gap-0 !pt-1 !pb-0"
    >
      <div className="flex flex-col gap-3 sm:gap-4">
        <section
          aria-labelledby="about-who-i-am-heading"
          className="mt-2.5 flex shrink-0 flex-col gap-1.5 sm:mt-3"
        >
          <h3 id="about-who-i-am-heading" className="retro-toolbar">
            Who I Am
          </h3>
          <div className="retro-inset subsection-inset py-1.5 text-[0.98rem] leading-snug sm:text-[1.04rem] md:text-[1.08rem] lg:text-[1.12rem]">
            <p className="m-0">
              Data Engineer and Analyst with a passion for planning, architecting,
              creating, and deploying optimized data pipelines in the Google Cloud
              environment. Thrives in fast-paced, matrix team-oriented environments.
              Strong skills in research, communication, and Google Cloud Platforms.
            </p>
          </div>
        </section>

        <section
          aria-labelledby="about-current-role-heading"
          className="flex shrink-0 flex-col gap-1.5"
        >
          <h3 id="about-current-role-heading" className="retro-toolbar">
            Current Role
          </h3>
          <div className="retro-inset subsection-inset flex flex-col gap-2 p-2 text-[0.88rem] leading-snug sm:flex-row sm:items-start sm:gap-2.5 sm:text-[0.94rem] md:text-[0.98rem]">
            <div className="retro-frame relative mx-auto h-14 w-14 shrink-0 overflow-hidden bg-white p-0.5 sm:mx-0 sm:h-16 sm:w-16">
              <Image
                src="/palomar-group-ai.png"
                alt="Palomar Group Ai logo"
                fill
                className="object-contain p-0.5"
                sizes="80px"
              />
            </div>
            <div className="min-w-0 flex-1 text-[color:var(--retro-muted)]">
              <p className="m-0 font-semibold text-[color:var(--retro-accent)]">
                Palomar Group Ai
              </p>
              <p className="mt-0.5 mb-2 text-[0.9rem] text-[color:var(--retro-muted)] sm:text-[0.94rem]">
                Data Engineer / Analyst
              </p>
              <p className="m-0 mb-2">
                Palomar Group Ai works with organizations to deliver AI and data
                solutions—from strategy through implementation—helping teams turn
                complex information into reliable, production-ready systems.
              </p>
              <p className="m-0">
                <a
                  href={PALOMAR_LINKEDIN}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[color:var(--retro-accent)] underline decoration-dotted underline-offset-2 transition-opacity hover:opacity-90"
                >
                  Company on LinkedIn
                </a>
              </p>
            </div>
          </div>
        </section>
      </div>
    </RetroWidget>
  );
}
