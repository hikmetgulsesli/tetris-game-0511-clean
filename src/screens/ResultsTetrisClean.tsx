// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Results - Tetris Clean
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface ResultsTetrisCleanProps {}

export function ResultsTetrisClean(props: ResultsTetrisCleanProps) {
  return (
    <>
      {/* Dimmed Background Overlay simulating inactive game board */}
      <div aria-hidden={true} className="absolute inset-0 bg-background/80 flex items-center justify-center backdrop-blur-sm z-0">
      {/* Abstract grid pattern simulating the board behind the modal */}
      <div className="w-full h-full opacity-10" style={{backgroundImage: "linear-gradient(to right, #434655 1px, transparent 1px), linear-gradient(to bottom, #434655 1px, transparent 1px)", backgroundSize: "32px 32px"}}></div>
      </div>
      {/* Modal Container */}
      <main className="relative z-10 w-full max-w-md bg-surface-container border border-outline-variant rounded-xl p-xl flex flex-col gap-xl shadow-2xl">
      {/* Header Section */}
      <header className="flex flex-col items-center gap-sm text-center">
      <span className="font-label-caps text-label-caps text-on-surface-variant uppercase tracking-widest">Session Terminated</span>
      <h1 className="font-display-lg text-display-lg text-on-surface">Game Over</h1>
      </header>
      {/* Primary Score Section */}
      <section className="flex flex-col items-center gap-sm bg-surface border border-outline-variant rounded-lg p-lg relative overflow-hidden">
      {/* Subtle highlight top border */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-primary-container"></div>
      <h2 className="font-label-caps text-label-caps text-on-surface-variant">Total Score</h2>
      <div className="font-display-lg text-display-lg text-primary-container tracking-tight">
                      845,290
                  </div>
      {/* New Record Badge */}
      <div className="mt-xs bg-primary-container/10 border border-primary-container text-primary-container font-label-caps text-label-caps px-md py-xs rounded-full flex items-center justify-center gap-xs">
      <span className="material-symbols-outlined text-[14px]">emoji_events</span>
                      New Record!
                  </div>
      </section>
      {/* Secondary Stats Grid */}
      <section className="grid grid-cols-2 gap-md">
      {/* Level Reached Module */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col gap-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Level Reached</span>
      <span className="font-mono-data text-mono-data text-on-surface text-lg">24</span>
      </div>
      {/* Lines Cleared Module */}
      <div className="bg-surface border border-outline-variant rounded-lg p-md flex flex-col gap-xs">
      <span className="font-label-caps text-label-caps text-on-surface-variant">Lines Cleared</span>
      <span className="font-mono-data text-mono-data text-on-surface text-lg">218</span>
      </div>
      </section>
      {/* Actions / CTAs */}
      <footer className="flex flex-col gap-md pt-sm">
      {/* Primary Action */}
      <button className="w-full flex items-center justify-center gap-sm bg-primary-container text-on-primary-container font-title-sm text-title-sm py-md rounded-lg hover:brightness-110 active:scale-[0.98] transition-all duration-150">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>play_arrow</span>
                      Play Again
                  </button>
      {/* Secondary Actions Row */}
      <div className="flex gap-md w-full">
      <button className="flex-1 flex items-center justify-center gap-xs border border-outline-variant bg-transparent text-on-surface font-title-sm text-title-sm py-sm rounded-lg hover:bg-surface-variant active:scale-[0.98] transition-all duration-150">
      <span className="material-symbols-outlined text-[18px]">share</span>
                          Share Score
                      </button>
      <button className="flex-1 flex items-center justify-center gap-xs border border-outline-variant bg-transparent text-on-surface font-title-sm text-title-sm py-sm rounded-lg hover:bg-surface-variant active:scale-[0.98] transition-all duration-150">
      <span className="material-symbols-outlined text-[18px]">menu</span>
                          Main Menu
                      </button>
      </div>
      </footer>
      </main>
    </>
  );
}
