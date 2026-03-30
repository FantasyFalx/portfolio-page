// Main landing page for the portfolio site.

import React from "react";
import Header from "./components/header";
import GrassFooter from "./components/grass-footer";
import PortfolioBandGrid from "./components/portfolio-band-grid";
import { StaggerItem } from "./components/stagger-item";

export default function Home() {
  return (
    <div className="relative box-border flex h-dvh min-h-0 max-h-dvh w-full min-w-0 flex-col overflow-x-hidden overflow-y-hidden px-[max(0.75rem,min(3.75vw,2.25rem))] py-1.5 pb-2 md:py-1.5 md:pb-2.5">
      <GrassFooter />

      <div className="relative z-10 mx-auto flex min-h-0 w-full min-w-0 max-w-[min(100%,110.4rem)] flex-1 flex-col gap-[0.9765625rem] md:gap-[1.171875rem] overflow-hidden">
        <StaggerItem index={0} className="shrink-0">
          <header>
            <Header />
          </header>
        </StaggerItem>

        <div className="flex min-h-0 w-full min-w-0 flex-1 justify-center overflow-x-hidden overflow-y-auto">
          <PortfolioBandGrid />
        </div>
      </div>
    </div>
  );
}
