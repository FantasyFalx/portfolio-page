// Main landing page for the portfolio site.

import React from "react";
import Header from "./components/header";
import GrassFooter from "./components/grass-footer";
import PortfolioBandGrid from "./components/portfolio-band-grid";
import { StaggerItem } from "./components/stagger-item";

export default function Home() {
  return (
    <div className="relative box-border flex h-dvh min-h-0 max-h-dvh w-full min-w-0 flex-col overflow-x-hidden overflow-y-hidden px-[max(0.65rem,min(3.25vw,2rem))] py-1 pb-1.5 md:py-1 md:pb-1.5">
      <GrassFooter />

      <div className="relative z-10 mx-auto flex min-h-0 w-full min-w-0 max-w-[min(100%,96rem)] flex-1 flex-col gap-1.5 overflow-hidden md:gap-2">
        <StaggerItem index={0} className="shrink-0">
          <header>
            <Header />
          </header>
        </StaggerItem>

        <div className="my-2.5 flex min-h-0 w-full min-w-0 flex-1 justify-center overflow-x-hidden overflow-y-auto sm:my-4 md:my-7 lg:my-8">
          <PortfolioBandGrid />
        </div>
      </div>
    </div>
  );
}
