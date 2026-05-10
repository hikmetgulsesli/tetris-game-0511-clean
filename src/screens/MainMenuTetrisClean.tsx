// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Main Menu - Tetris Clean
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface MainMenuTetrisCleanProps {}

export function MainMenuTetrisClean(props: MainMenuTetrisCleanProps) {
  return (
    <>
      {/* SideNavBar Component */}
      <nav className="bg-surface-container dark:bg-surface-container docked full-height left-0 w-64 border-r border-outline-variant flat no shadows hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-xl pb-md border-r border-outline-variant z-40">
      <div className="px-md mb-xl flex flex-col gap-sm">
      <div className="text-title-sm font-title-sm font-bold text-primary dark:text-primary">Tetris Clean</div>
      <div className="flex items-center gap-xs">
      <div className="w-2 h-2 rounded-full bg-[#10B981]"></div>
      <span className="font-body-sm text-body-sm text-on-surface-variant">System Online</span>
      </div>
      </div>
      <div className="px-md mb-lg flex items-center gap-md">
      <div className="w-10 h-10 rounded-full bg-surface-variant border border-outline-variant overflow-hidden flex items-center justify-center">
      <span className="material-symbols-outlined text-on-surface-variant">person</span>
      </div>
      <div className="flex flex-col">
      <span className="font-label-caps text-label-caps text-on-surface">Pro Account</span>
      <span className="font-body-sm text-body-sm text-on-surface-variant">Player Profile</span>
      </div>
      </div>
      <div className="flex flex-col gap-xs px-sm flex-1">
      <a className="flex items-center gap-md bg-primary-container text-on-primary-container rounded-xl px-md py-sm scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
      <span className="font-label-caps text-label-caps">Play</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-200 rounded-xl" href="#">
      <span className="material-symbols-outlined">bar_chart</span>
      <span className="font-label-caps text-label-caps">Stats</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-200 rounded-xl" href="#">
      <span className="material-symbols-outlined">leaderboard</span>
      <span className="font-label-caps text-label-caps">Leaderboard</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface px-md py-sm hover:bg-surface-variant dark:hover:bg-surface-variant transition-all duration-200 rounded-xl" href="#">
      <span className="material-symbols-outlined">settings</span>
      <span className="font-label-caps text-label-caps">Settings</span>
      </a>
      </div>
      </nav>
      {/* Main Content Canvas */}
      <main className="flex-1 flex flex-col h-screen lg:ml-64 relative bg-background overflow-y-auto">
      {/* TopNavBar for mobile (Hidden on lg) */}
      <header className="bg-surface dark:bg-surface docked full-width top-0 border-b border-outline-variant flat no shadows flex justify-between items-center w-full px-lg h-16 z-50 lg:hidden">
      <div className="text-headline-md font-headline-md font-bold text-on-surface dark:text-on-surface">Tetris Clean</div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant p-sm rounded-full transition-colors duration-200">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="text-on-surface-variant hover:text-on-surface hover:bg-surface-variant p-sm rounded-full transition-colors duration-200">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </header>
      <div className="p-lg md:p-xl flex flex-col lg:flex-row gap-lg h-full max-w-7xl mx-auto w-full">
      {/* Left/Center Column: Active Session */}
      <div className="flex-1 flex flex-col gap-lg">
      <h1 className="font-display-lg text-display-lg text-on-surface mb-xs hidden lg:block">Dashboard</h1>
      {/* Active Session Card */}
      <div className="module-panel flex-1 flex flex-col relative overflow-hidden min-h-[400px]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-surface-container-highest via-surface-container-high to-surface-container-high opacity-50 z-0"></div>
      <div className="module-header relative z-10 flex justify-between items-center border-b border-outline-variant bg-surface-container-high">
      <span className="font-label-caps text-label-caps text-on-surface">ACTIVE SESSION</span>
      <span className="font-mono-data text-mono-data text-on-surface-variant">ID: 8847-TC</span>
      </div>
      <div className="flex-1 p-xl flex flex-col items-center justify-center relative z-10">
      <div className="w-64 h-64 border border-outline-variant bg-surface-container-lowest rounded-lg mb-lg relative overflow-hidden flex items-center justify-center">
      {/* Schematic Grid Pattern Background */}
      <div className="absolute inset-0" style={{backgroundImage: "linear-gradient(theme('colors.outline-variant') 1px, transparent 1px), linear-gradient(90deg, theme('colors.outline-variant') 1px, transparent 1px)", backgroundSize: "16px 16px", opacity: "0.1"}}></div>
      <div className="text-center z-10">
      <div className="font-display-lg text-display-lg text-on-surface">PAUSED</div>
      <div className="font-mono-data text-mono-data text-primary mt-sm">LEVEL 14</div>
      </div>
      </div>
      <div className="flex gap-md w-full max-w-md">
      <button className="flex-1 bg-primary-container text-on-primary-container font-label-caps text-label-caps py-md px-lg rounded-DEFAULT hover:brightness-110 active:scale-[0.98] transition-all duration-200 border border-transparent">
                                      RESUME GAME
                                  </button>
      <button className="flex-1 bg-transparent border border-outline-variant text-on-surface font-label-caps text-label-caps py-md px-lg rounded-DEFAULT hover:bg-surface-variant active:scale-[0.98] transition-all duration-200">
                                      NEW GAME
                                  </button>
      </div>
      </div>
      </div>
      </div>
      {/* Right Column: Metrics & Leaderboard */}
      <div className="w-full lg:w-80 flex flex-col gap-lg shrink-0">
      {/* Session Metrics */}
      <div className="module-panel flex flex-col">
      <div className="module-header">
      <span className="font-label-caps text-label-caps text-on-surface">SESSION METRICS</span>
      </div>
      <div className="p-md flex flex-col gap-md">
      <div className="flex justify-between items-center border-b border-outline-variant pb-sm">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Lines Cleared</span>
      <span className="font-mono-data text-mono-data text-on-surface">142</span>
      </div>
      <div className="flex justify-between items-center border-b border-outline-variant pb-sm">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Score Rate</span>
      <span className="font-mono-data text-mono-data text-on-surface">1,240/min</span>
      </div>
      <div className="flex justify-between items-center border-b border-outline-variant pb-sm">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Pieces/Min</span>
      <span className="font-mono-data text-mono-data text-on-surface">86</span>
      </div>
      <div className="flex justify-between items-center">
      <span className="font-body-sm text-body-sm text-on-surface-variant">Current Score</span>
      <span className="font-mono-data text-mono-data text-primary">84,500</span>
      </div>
      </div>
      </div>
      {/* Top Operatives */}
      <div className="module-panel flex-1 flex flex-col">
      <div className="module-header flex justify-between items-center">
      <span className="font-label-caps text-label-caps text-on-surface">TOP OPERATIVES</span>
      <span className="material-symbols-outlined text-on-surface-variant text-[16px]">open_in_new</span>
      </div>
      <div className="flex flex-col">
      {/* Header Row */}
      <div className="flex px-md py-sm bg-surface-variant border-b border-outline-variant">
      <div className="w-8 font-label-caps text-label-caps text-on-surface-variant">#</div>
      <div className="flex-1 font-label-caps text-label-caps text-on-surface-variant">ID</div>
      <div className="w-20 text-right font-label-caps text-label-caps text-on-surface-variant">SCORE</div>
      </div>
      {/* List Rows */}
      <div className="flex px-md py-sm border-b border-outline-variant items-center bg-surface-container-high hover:bg-surface-variant transition-colors">
      <div className="w-8 font-mono-data text-mono-data text-primary">01</div>
      <div className="flex-1 font-mono-data text-mono-data text-on-surface">CYBER_NINJA</div>
      <div className="w-20 text-right font-mono-data text-mono-data text-on-surface">999,999</div>
      </div>
      <div className="flex px-md py-sm border-b border-outline-variant items-center bg-surface-container-high hover:bg-surface-variant transition-colors">
      <div className="w-8 font-mono-data text-mono-data text-on-surface-variant">02</div>
      <div className="flex-1 font-mono-data text-mono-data text-on-surface">TETRIS_GOD</div>
      <div className="w-20 text-right font-mono-data text-mono-data text-on-surface">854,320</div>
      </div>
      <div className="flex px-md py-sm border-b border-outline-variant items-center bg-surface-container-high hover:bg-surface-variant transition-colors">
      <div className="w-8 font-mono-data text-mono-data text-on-surface-variant">03</div>
      <div className="flex-1 font-mono-data text-mono-data text-on-surface">BLOCK_MSTR</div>
      <div className="w-20 text-right font-mono-data text-mono-data text-on-surface">762,100</div>
      </div>
      <div className="flex px-md py-sm items-center bg-surface-container-high hover:bg-surface-variant transition-colors">
      <div className="w-8 font-mono-data text-mono-data text-on-surface-variant">04</div>
      <div className="flex-1 font-mono-data text-mono-data text-on-surface">YOU</div>
      <div className="w-20 text-right font-mono-data text-mono-data text-primary">84,500</div>
      </div>
      </div>
      </div>
      </div>
      </div>
      </main>
    </>
  );
}
