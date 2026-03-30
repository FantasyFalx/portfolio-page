// Single left column: profile photo, contact icons, education — one vertical panel.
import Image from "next/image";
import React from "react";
import { RetroWidget } from "./retro-widget";

const CONTACT_ICON = 44;

export default function ProfileBar() {
  return (
    <RetroWidget
      theme="cyan"
      label="Sidebar"
      title="Profile.bar"
      subtitle="Portrait → links → degrees, top to bottom."
      className="profile-bar-widget flex h-auto min-h-0 w-full min-w-0 flex-col"
      bodyClassName="flex w-full min-w-0 flex-col gap-0 !pt-1 !pb-0"
    >
      {/* 1. Photo */}
      <section
        aria-labelledby="profile-bar-photo-heading"
        className="mt-2.5 flex flex-shrink-0 flex-col gap-1 sm:mt-3"
      >
        <h3 id="profile-bar-photo-heading" className="retro-toolbar">
          Photo · profile
        </h3>
        <div className="flex w-full min-w-0 justify-center px-2.5 pb-2 pt-2 sm:px-3 sm:pb-2.5 sm:pt-2.5">
          <div className="profile-photo-pixel-frame-outer">
            <div className="profile-photo-pixel-frame">
              <Image
                src="/profile-photo.png"
                alt="Profile photo"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 90vw, min(27vw, 20rem)"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <hr className="profile-bar-rule" aria-hidden />

      {/* 2. Contact */}
      <section
        aria-labelledby="profile-bar-contact-heading"
        className="flex flex-shrink-0 flex-col gap-1"
      >
        <h3 id="profile-bar-contact-heading" className="retro-toolbar">
          Links · contact
        </h3>
        <p className="m-0 text-[0.72rem] leading-snug text-[color:var(--retro-muted)] sm:text-[0.76rem]">
          Tap an icon — mail, phone, GitHub, LinkedIn.
        </p>
        <div className="retro-inset subsection-inset py-1">
          <div className="grid grid-cols-2 justify-items-center gap-x-0.5 gap-y-0.5 sm:grid-cols-4">
            <a
              href="mailto:cstim.murdoch@gmail.com"
              className="retro-contact-icon"
              aria-label="Email"
            >
              <Image
                src="/icon-email-pixel.png"
                alt=""
                width={512}
                height={512}
                unoptimized
                className="h-12 w-12 object-contain [image-rendering:pixelated]"
              />
            </a>
            <a
              href="tel:+12023205948"
              className="retro-contact-icon"
              aria-label="Phone"
            >
              <Image
                src="/smartphone-call.png"
                alt=""
                width={CONTACT_ICON}
                height={CONTACT_ICON}
                unoptimized
                className="h-12 w-12 object-contain [image-rendering:pixelated]"
              />
            </a>
            <a
              href="https://github.com/FantasyFalx"
              className="retro-contact-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Image
                src="/github.png"
                alt=""
                width={CONTACT_ICON}
                height={CONTACT_ICON}
                unoptimized
                className="h-12 w-12 object-contain [image-rendering:pixelated]"
              />
            </a>
            <a
              href="https://www.linkedin.com/in/george-stimson-248446252/"
              className="retro-contact-icon"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Image
                src="/linkedin.png"
                alt=""
                width={CONTACT_ICON}
                height={CONTACT_ICON}
                unoptimized
                className="h-12 w-12 object-contain [image-rendering:pixelated]"
              />
            </a>
          </div>
        </div>
      </section>

      <hr className="profile-bar-rule" aria-hidden />

      {/* 3. Education */}
      <section
        aria-labelledby="profile-bar-edu-heading"
        className="mt-2.5 flex min-h-0 flex-col gap-1.5 sm:mt-3"
      >
        <h3 id="profile-bar-edu-heading" className="retro-toolbar">
          Education · degrees.txt
        </h3>
        <p className="m-0 text-[0.72rem] leading-snug text-[color:var(--retro-muted)] sm:text-[0.76rem]">
          University & major — plain text, no DRM.
        </p>
        <div className="flex min-h-0 flex-col gap-1.5">
          <div className="retro-inset subsection-inset flex flex-col gap-1.5 p-1.5 sm:flex-row sm:items-center">
            <Image
              src="/miami.png"
              alt=""
              width={48}
              height={48}
              className="retro-frame h-10 w-10 shrink-0 object-contain p-0.5"
            />
            <ul className="m-0 min-w-0 list-none pl-0 text-[0.78rem] leading-snug sm:text-[0.82rem]">
              <li>
                <strong>University of Miami</strong>
              </li>
              <li>Graduated December 2024</li>
            </ul>
          </div>
          <div className="retro-inset subsection-inset flex flex-col gap-1.5 p-1.5 sm:flex-row sm:items-center">
            <Image
              src="/degree-icon.png"
              alt=""
              width={48}
              height={48}
              className="retro-frame h-10 w-10 shrink-0 object-contain p-0.5"
            />
            <ul className="m-0 min-w-0 list-none pl-0 text-[0.78rem] leading-snug sm:text-[0.82rem]">
              <li>
                <strong>B.A. Computer Science</strong>
              </li>
              <li>Minor Political Science</li>
            </ul>
          </div>
        </div>
      </section>
    </RetroWidget>
  );
}
