// File for displaying skills and tech icons
// Cloud SVGs: Simple Icons (CC0) — https://github.com/simple-icons/simple-icons
import Image from "next/image";
import React from "react";
import { RetroWidget } from "./retro-widget";

const DATA_ENG_SKILLS: {
  src: string;
  label: string;
  alt: string;
  iconClassName?: string;
}[] = [
  { src: "/skill-python.png", label: "Python", alt: "Python" },
  { src: "/skill-numpy.png", label: "NumPy", alt: "NumPy" },
  { src: "/skill-pandas.png", label: "Pandas", alt: "Pandas" },
  {
    src: "/skill-scikit-learn.png",
    label: "scikit-learn",
    alt: "scikit-learn",
  },
  { src: "/skill-terraform.png", label: "Terraform", alt: "Terraform" },
  { src: "/skill-sql.png", label: "SQL", alt: "SQL" },
  { src: "/skill-docker.png", label: "Docker", alt: "Docker" },
];

const PROGRAMMING_SKILLS: { src: string; label: string; alt: string }[] = [
  { src: "/skill-linux.png", label: "Linux", alt: "Linux" },
  { src: "/skill-java.png", label: "Java", alt: "Java" },
  { src: "/skill-bash.png", label: "Bash", alt: "Bash shell" },
  {
    src: "/skill-github-actions.png",
    label: "GitHub Actions",
    alt: "GitHub Actions",
  },
  { src: "/skill-git.png", label: "Git", alt: "Git" },
];

/** Simple Icons paths under /public/cloud-icons (product logos where available). */
const CLOUD_SKILLS: { src: string; label: string; alt: string }[] = [
  {
    src: "/gcp-icon.png",
    label: "Google Cloud Platform",
    alt: "Google Cloud Platform",
  },
  {
    src: "/cloud-icons/cloud-storage.png",
    label: "Google Cloud Storage",
    alt: "Google Cloud Storage",
  },
  {
    src: "/cloud-icons/cloud-sdk.png",
    label: "gcloud SDK",
    alt: "Google Cloud SDK",
  },
  {
    src: "/cloud-icons/pubsub.png",
    label: "Pub/Sub",
    alt: "Google Cloud Pub/Sub",
  },
  {
    src: "/cloud-icons/bigquery.png",
    label: "BigQuery",
    alt: "Google BigQuery",
  },
  {
    src: "/cloud-icons/cloud-run.png",
    label: "Cloud Run",
    alt: "Google Cloud Run",
  },
  {
    src: "/cloud-icons/artifact-registry.png",
    label: "Artifact Registry",
    alt: "Google Artifact Registry",
  },
  {
    src: "/cloud-icons/vertex-ai.png",
    label: "Vertex AI",
    alt: "Google Vertex AI",
  },
];

const SKILL_ICON_PX = 512;

function DataEngSkillIcon({
  src,
  alt,
  iconClassName,
}: {
  src: string;
  alt: string;
  iconClassName?: string;
}) {
  const frameClass = `retro-frame h-10 w-10 shrink-0 object-contain p-0.5${iconClassName ? ` ${iconClassName}` : ""}`;
  if (src.endsWith(".svg")) {
    return (
      <img
        src={src}
        alt={alt}
        width={40}
        height={40}
        className={frameClass}
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={SKILL_ICON_PX}
      height={SKILL_ICON_PX}
      className={frameClass}
    />
  );
}

function CloudSkillIcon({ src, alt }: { src: string; alt: string }) {
  if (src.endsWith(".svg")) {
    return (
      <img
        src={src}
        alt=""
        width={40}
        height={40}
        className="retro-frame h-10 w-10 shrink-0 object-contain p-0.5"
      />
    );
  }
  return (
    <Image
      src={src}
      alt={alt}
      width={SKILL_ICON_PX}
      height={SKILL_ICON_PX}
      unoptimized
      className="retro-frame h-10 w-10 shrink-0 object-contain p-0.5"
    />
  );
}

export default function SkillsTech() {
  return (
    <RetroWidget
      theme="lime"
      label="Stack"
      title="Skills.sys"
      subtitle="Tools & languages — loaded at boot."
      className="skills-sys-widget flex h-auto min-h-0 w-full min-w-0 max-w-full shrink-0 flex-col"
      bodyClassName="flex w-full flex-col items-stretch !pt-1 !pb-0"
    >
      {/* Content-sized body — no flex-1 stretch, no overflow scroll */}
      <div className="grid w-full min-w-0 grid-cols-1 content-start gap-3 sm:gap-4">
        <section
          aria-labelledby="skills-cloud-heading"
          className="mt-2.5 flex w-full min-w-0 flex-col gap-1 sm:mt-3"
        >
          <h3 id="skills-cloud-heading" className="retro-toolbar">
            Cloud Skills
          </h3>
          <div className="retro-inset retro-inset--surface subsection-inset px-1 py-0.5">
            <ul className="m-0 grid w-full list-none grid-cols-2 gap-x-1 gap-y-1 p-0 sm:grid-cols-3 lg:grid-cols-4">
              {CLOUD_SKILLS.map((item) => (
                <li
                  key={`${item.src}-${item.label}`}
                  className="flex min-w-0 flex-col items-center gap-0.5 text-center"
                >
                  <CloudSkillIcon src={item.src} alt={item.alt} />
                  <span className="text-[0.72rem] leading-tight text-[color:var(--retro-muted)] sm:text-[0.78rem]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="skills-data-eng-analysis-heading"
          className="flex w-full min-w-0 flex-col gap-1"
        >
          <h3
            id="skills-data-eng-analysis-heading"
            className="retro-toolbar"
          >
            Data Engineering and Analysis
          </h3>
          <div className="retro-inset retro-inset--surface subsection-inset px-1 py-0.5">
            <ul className="m-0 grid w-full list-none grid-cols-2 gap-x-1 gap-y-1 p-0 sm:grid-cols-3 lg:grid-cols-4">
              {DATA_ENG_SKILLS.map((item) => (
                <li
                  key={item.src}
                  className="flex min-w-0 flex-col items-center gap-0.5 text-center"
                >
                  <DataEngSkillIcon
                    src={item.src}
                    alt={item.alt}
                    iconClassName={item.iconClassName}
                  />
                  <span className="text-[0.72rem] leading-tight text-[color:var(--retro-muted)] sm:text-[0.78rem]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section
          aria-labelledby="skills-programming-heading"
          className="flex w-full min-w-0 flex-col gap-1"
        >
          <h3 id="skills-programming-heading" className="retro-toolbar">
            Programming
          </h3>
          <div className="retro-inset retro-inset--surface subsection-inset px-1 py-0.5">
            <ul className="m-0 grid w-full list-none grid-cols-2 gap-x-1 gap-y-1 p-0 sm:grid-cols-3 lg:grid-cols-4">
              {PROGRAMMING_SKILLS.map((item) => (
                <li
                  key={item.src}
                  className="flex min-w-0 flex-col items-center gap-0.5 text-center"
                >
                  <DataEngSkillIcon src={item.src} alt={item.alt} />
                  <span className="text-[0.72rem] leading-tight text-[color:var(--retro-muted)] sm:text-[0.78rem]">
                    {item.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </section>
      </div>
    </RetroWidget>
  );
}
