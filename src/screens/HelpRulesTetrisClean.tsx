// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Help & Rules - Tetris Clean
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface HelpRulesTetrisCleanProps {}

export function HelpRulesTetrisClean(props: HelpRulesTetrisCleanProps) {
  return (
    <>
      {/* Top Navigation for Sub-page */}
      <header className="bg-surface dark:bg-surface border-b border-outline-variant flex justify-between items-center w-full px-lg h-16 z-50 sticky top-0">
      <div className="flex items-center gap-sm">
      <button className="text-primary-container dark:text-primary-container hover:bg-surface-variant dark:hover:bg-surface-variant transition-colors duration-200 p-sm rounded-lg flex items-center justify-center">
      <span className="material-symbols-outlined" data-icon="arrow_back">arrow_back</span>
      </button>
      <span className="text-title-sm font-title-sm font-bold text-on-surface dark:text-on-surface ml-sm">Menu</span>
      </div>
      <div className="text-headline-md font-headline-md font-bold text-on-surface dark:text-on-surface">
                  Tetris Clean
              </div>
      <div className="w-[40px]"></div> {/* Spacer for centering */}
      </header>
      {/* Main Content Canvas */}
      <main className="flex-1 w-full max-w-4xl mx-auto px-lg py-xl">
      <div className="mb-xl">
      <h1 className="font-display-lg text-display-lg text-on-surface mb-sm">System Documentation</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Review the operational parameters and control schematics below to optimize your performance.</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter">
      {/* System Objectives Module */}
      <section className="bg-[#1E293B] border border-[#334155] rounded-DEFAULT flex flex-col">
      <header className="border-b border-[#334155] px-[12px] py-[8px]">
      <h2 className="font-label-caps text-label-caps text-on-surface uppercase">System Objectives</h2>
      </header>
      <div className="p-panel-padding flex-1">
      <ul className="space-y-md font-body-md text-body-md text-on-surface-variant">
      <li className="flex items-start gap-sm">
      <span className="material-symbols-outlined text-primary-container mt-xs" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span><strong>Clear Lines:</strong> Maneuver descending geometric modules to form unbroken horizontal sequences.</span>
      </li>
      <li className="flex items-start gap-sm">
      <span className="material-symbols-outlined text-primary-container mt-xs" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span><strong>Prevent Overflow:</strong> Maintain the structural integrity of the operational matrix by preventing modules from reaching the upper threshold.</span>
      </li>
      <li className="flex items-start gap-sm">
      <span className="material-symbols-outlined text-primary-container mt-xs" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span><strong>Maximize Efficiency:</strong> Execute simultaneous multi-line clears to exponentially increase resource accumulation (score).</span>
      </li>
      <li className="flex items-start gap-sm">
      <span className="material-symbols-outlined text-primary-container mt-xs" style={{fontVariationSettings: "'FILL' 1"}}>check_circle</span>
      <span><strong>Module Stashing:</strong> Utilize the 'Hold' buffer to temporarily store a module for strategic deployment at a later cycle.</span>
      </li>
      </ul>
      </div>
      </section>
      {/* Control Schematics Module */}
      <section className="bg-[#1E293B] border border-[#334155] rounded-DEFAULT flex flex-col">
      <header className="border-b border-[#334155] px-[12px] py-[8px]">
      <h2 className="font-label-caps text-label-caps text-on-surface uppercase">Control Schematics</h2>
      </header>
      <div className="p-panel-padding">
      <div className="mb-md">
      <h3 className="font-title-sm text-title-sm text-on-surface mb-sm border-b border-[#334155] pb-xs">Keyboard Interface</h3>
      <div className="grid grid-cols-2 gap-y-sm font-mono-data text-mono-data text-on-surface-variant">
      <div className="flex items-center gap-sm">
      <kbd className="bg-surface-variant border border-outline-variant rounded px-sm py-xs text-on-surface">← / →</kbd>
      </div>
      <div>Lateral Shift</div>
      <div className="flex items-center gap-sm">
      <kbd className="bg-surface-variant border border-outline-variant rounded px-sm py-xs text-on-surface">↑</kbd>
      </div>
      <div>Rotate CW</div>
      <div className="flex items-center gap-sm">
      <kbd className="bg-surface-variant border border-outline-variant rounded px-sm py-xs text-on-surface">Z</kbd>
      </div>
      <div>Rotate CCW</div>
      <div className="flex items-center gap-sm">
      <kbd className="bg-surface-variant border border-outline-variant rounded px-sm py-xs text-on-surface">↓</kbd>
      </div>
      <div>Soft Drop</div>
      <div className="flex items-center gap-sm">
      <kbd className="bg-surface-variant border border-outline-variant rounded px-[12px] py-xs text-on-surface">Space</kbd>
      </div>
      <div>Hard Drop</div>
      <div className="flex items-center gap-sm">
      <kbd className="bg-surface-variant border border-outline-variant rounded px-sm py-xs text-on-surface">C</kbd>
      </div>
      <div>Hold Module</div>
      </div>
      </div>
      <div>
      <h3 className="font-title-sm text-title-sm text-on-surface mb-sm border-b border-[#334155] pb-xs mt-md">Haptic Gestures</h3>
      <div className="grid grid-cols-2 gap-y-sm font-body-sm text-body-sm text-on-surface-variant">
      <div>Swipe Left/Right</div>
      <div>Lateral Shift</div>
      <div>Tap Screen</div>
      <div>Rotate CW</div>
      <div>Swipe Down</div>
      <div>Soft Drop</div>
      <div>Flick Down</div>
      <div>Hard Drop</div>
      <div>Tap Hold Zone</div>
      <div>Hold Module</div>
      </div>
      </div>
      </div>
      </section>
      </div>
      <div className="mt-xl flex justify-center">
      <button className="bg-primary-container text-[#F8FAFC] font-body-md text-body-md px-xl py-sm rounded-DEFAULT hover:brightness-110 active:scale-98 transition-all flex items-center gap-sm">
      <span className="material-symbols-outlined" data-icon="videogame_asset">videogame_asset</span>
                      Initialize Sequence
                  </button>
      </div>
      </main>
    </>
  );
}
