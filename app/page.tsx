// Main landing page for the portfolio site.

import React from "react";
import Header from "./components/header";
import GrassFooter from "./components/grass-footer";
import PortfolioBandGrid from "./components/portfolio-band-grid";
import { StaggerItem } from "./components/stagger-item";

export default function Home() {
  return (
    <div className="relative box-border flex min-h-dvh w-full min-w-0 flex-col overflow-x-hidden overflow-y-auto px-[max(0.65rem,min(3.25vw,2rem))] py-1 pb-1.5 md:h-dvh md:min-h-0 md:max-h-dvh md:overflow-y-hidden md:py-1 md:pb-1.5">
      <GrassFooter />

      <div className="relative z-10 mx-auto flex min-h-0 w-full min-w-0 max-w-[min(100%,96rem)] flex-1 flex-col gap-1.5 overflow-visible md:gap-2 md:overflow-hidden">
        <StaggerItem index={0} className="shrink-0">
          <header>
            <Header />
          </header>
        </StaggerItem>

        <div className="my-2.5 flex min-h-0 w-full min-w-0 justify-center overflow-x-hidden overflow-y-visible sm:my-4 md:my-7 md:flex-1 md:overflow-y-auto lg:my-8">
          <PortfolioBandGrid />
        </div>
      </div>
    </div>
  );
}
