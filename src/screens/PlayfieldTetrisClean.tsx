// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Playfield - Tetris Clean
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface PlayfieldTetrisCleanProps {}

export function PlayfieldTetrisClean(props: PlayfieldTetrisCleanProps) {
  return (
    <>
      {/* TopNavBar (Mobile) */}
      <nav className="bg-surface dark:bg-surface border-b border-outline-variant flex justify-between items-center w-full px-lg h-16 z-50 lg:hidden fixed top-0 left-0">
      <div className="text-headline-md font-headline-md font-bold text-on-surface dark:text-on-surface">Tetris Clean</div>
      <div className="flex gap-md">
      <button className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">
      <span className="material-symbols-outlined">help</span>
      </button>
      <button className="text-on-surface-variant hover:text-on-surface transition-colors duration-200">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </nav>
      {/* SideNavBar (Desktop) */}
      <nav className="bg-surface-container dark:bg-surface-container hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-xl pb-md border-r border-outline-variant w-64 z-40">
      <div className="px-lg mb-xl">
      <h1 className="text-title-sm font-title-sm font-bold text-primary dark:text-primary">Tetris Clean</h1>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Pro Account</p>
      </div>
      <div className="flex flex-col gap-xs px-sm flex-1">
      {/* Active Tab */}
      <a className="flex items-center gap-md bg-primary-container text-on-primary-container rounded-xl px-md py-sm scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" data-weight="fill">play_arrow</span>
      <span className="font-label-caps text-label-caps">Play</span>
      </a>
      {/* Inactive Tabs */}
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
      {/* Main Canvas */}
      <main className="flex-1 lg:ml-64 pt-16 lg:pt-0 min-h-screen flex items-center justify-center bg-grid-pattern relative">
      {/* Radial gradient to fade grid edges */}
      <div className="absolute inset-0 bg-radial-gradient from-transparent to-surface pointer-events-none" style={{background: "radial-gradient(circle at center, transparent 0%, #11131b 80%)"}}></div>
      {/* Game Bento Layout */}
      <div className="flex flex-col md:flex-row gap-lg p-lg relative z-10 w-full max-w-5xl justify-center items-stretch md:items-start">
      {/* Left Sidebar (Hold & Stats) */}
      <div className="flex flex-row md:flex-col gap-md w-full md:w-32 lg:w-40 justify-center">
      {/* Hold Panel */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-sm flex flex-col gap-sm flex-1 md:flex-none">
      <div className="font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant pb-xs px-xs">Hold</div>
      <div className="aspect-square bg-surface-container-highest rounded flex items-center justify-center p-sm border border-outline-variant/50">
      {/* Simulated Hold Piece (I-block) */}
      <div className="grid grid-cols-4 grid-rows-4 gap-[1px] w-full h-full opacity-50">
      <div className="col-start-1 row-start-2 w-full h-full bg-secondary-fixed"></div>
      <div className="col-start-2 row-start-2 w-full h-full bg-secondary-fixed"></div>
      <div className="col-start-3 row-start-2 w-full h-full bg-secondary-fixed"></div>
      <div className="col-start-4 row-start-2 w-full h-full bg-secondary-fixed"></div>
      </div>
      </div>
      </div>
      {/* Stats Panel */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-md flex flex-col gap-md flex-1 md:flex-none">
      <div className="font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant pb-xs">Telemetry</div>
      <div className="flex flex-col gap-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Score</span>
      <span className="font-mono-data text-mono-data text-primary">024,590</span>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Level</span>
      <span className="font-mono-data text-mono-data text-primary">08</span>
      </div>
      <div className="flex flex-col gap-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Lines</span>
      <span className="font-mono-data text-mono-data text-primary">042</span>
      </div>
      </div>
      </div>
      {/* Central Game Grid (10x20) */}
      <div className="bg-surface-container-highest border border-outline-variant p-[2px] rounded flex-shrink-0 mx-auto">
      <div className="grid grid-cols-10 grid-rows-[repeat(20,minmax(0,1fr))] gap-[1px] bg-outline-variant/30 w-[240px] h-[480px]">
      {/* Empty Cells (Top portion) */}
      {/* Row 1 to 14 (140 cells simulated loosely for brevity, just defining the background color) */}
      <div className="col-span-10 row-span-14 bg-surface-container-highest opacity-90"></div>
      {/* Row 15 */}
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div> {/* Active Piece Part */}
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      {/* Row 16 */}
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div> {/* Active Piece Part */}
      <div className="bg-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div> {/* Active Piece Part */}
      <div className="bg-primary shadow-[inset_0_0_0_1px_rgba(255,255,255,0.2)]"></div> {/* Active Piece Part */}
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      {/* Row 17 */}
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-primary-container border border-primary opacity-20"></div> {/* Ghost Piece */}
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      {/* Row 18 */}
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-primary-container border border-primary opacity-20"></div> {/* Ghost Piece */}
      <div className="bg-primary-container border border-primary opacity-20"></div> {/* Ghost Piece */}
      <div className="bg-primary-container border border-primary opacity-20"></div> {/* Ghost Piece */}
      <div className="bg-surface-container-highest"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-surface-container-highest"></div>
      {/* Row 19 */}
      <div className="bg-secondary-container"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      {/* Row 20 */}
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-surface-container-highest"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      <div className="bg-secondary-container"></div>
      </div>
      </div>
      {/* Right Sidebar (Next & Controls) */}
      <div className="flex flex-row md:flex-col gap-md w-full md:w-32 lg:w-40 justify-between md:justify-start">
      {/* Next Piece Panel */}
      <div className="bg-surface-container border border-outline-variant rounded-xl p-sm flex flex-col gap-sm flex-1 md:flex-none">
      <div className="font-label-caps text-label-caps text-on-surface-variant border-b border-outline-variant pb-xs px-xs">Next</div>
      <div className="aspect-square bg-surface-container-highest rounded flex items-center justify-center p-sm border border-outline-variant/50">
      {/* Simulated Next Piece (Z-block) */}
      <div className="grid grid-cols-4 grid-rows-4 gap-[1px] w-full h-full opacity-80">
      <div className="col-start-1 row-start-2 w-full h-full bg-error-container"></div>
      <div className="col-start-2 row-start-2 w-full h-full bg-error-container"></div>
      <div className="col-start-2 row-start-3 w-full h-full bg-error-container"></div>
      <div className="col-start-3 row-start-3 w-full h-full bg-error-container"></div>
      </div>
      </div>
      </div>
      {/* Pause Control */}
      <button className="bg-primary-container text-on-primary-container font-label-caps text-label-caps rounded-xl px-md py-md flex items-center justify-center gap-sm hover:brightness-110 active:scale-[0.98] transition-all flex-1 md:flex-none border border-primary/20 shadow-sm mt-auto md:mt-0">
      <span className="material-symbols-outlined" data-weight="fill">pause</span>
                          Pause
                      </button>
      </div>
      </div>
      </main>
    </>
  );
}
