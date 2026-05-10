// AUTO-GENERATED from Stitch — DO NOT modify layout or CSS
// Screen: Settings - Tetris Clean
// 
// AGENT INSTRUCTIONS:
// 1. DO NOT change className values or layout structure
// 2. Add useState for dynamic values (replace hardcoded text)
// 3. Add onClick/onChange handlers to interactive elements
// 4. Replace placeholder data with props/state

import { useState } from "react";

interface SettingsTetrisCleanProps {}

export function SettingsTetrisClean(props: SettingsTetrisCleanProps) {
  return (
    <>
      {/* SideNavBar */}
      <nav className="hidden lg:flex flex-col h-screen fixed left-0 top-0 pt-xl pb-md border-r border-outline-variant bg-surface-container w-64 z-40">
      <div className="px-lg mb-xl">
      <div className="flex items-center gap-sm mb-md">
      <span className="text-title-sm font-title-sm font-bold text-primary">Tetris Clean</span>
      </div>
      <div className="flex items-center gap-md p-sm bg-surface rounded-lg border border-outline-variant">
      <div className="w-8 h-8 rounded-full bg-secondary-container flex items-center justify-center">
      <span className="material-symbols-outlined text-on-secondary-container" style={{fontSize: "20px"}}>person</span>
      </div>
      <div>
      <p className="font-body-sm text-body-sm text-on-surface">Pro Account</p>
      </div>
      </div>
      </div>
      <div className="flex-1 px-md space-y-sm">
      <a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface px-md py-sm hover:bg-surface-variant transition-all duration-200 rounded-lg" href="#">
      <span className="material-symbols-outlined">play_arrow</span>
      <span className="font-label-caps text-label-caps uppercase">Play</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface px-md py-sm hover:bg-surface-variant transition-all duration-200 rounded-lg" href="#">
      <span className="material-symbols-outlined">bar_chart</span>
      <span className="font-label-caps text-label-caps uppercase">Stats</span>
      </a>
      <a className="flex items-center gap-md text-on-surface-variant hover:text-on-surface px-md py-sm hover:bg-surface-variant transition-all duration-200 rounded-lg" href="#">
      <span className="material-symbols-outlined">leaderboard</span>
      <span className="font-label-caps text-label-caps uppercase">Leaderboard</span>
      </a>
      <a className="flex items-center gap-md bg-primary-container text-on-primary-container rounded-xl px-md py-sm scale-[0.98] transition-transform duration-150" href="#">
      <span className="material-symbols-outlined" style={{fontVariationSettings: "'FILL' 1"}}>settings</span>
      <span className="font-label-caps text-label-caps uppercase">Settings</span>
      </a>
      </div>
      </nav>
      {/* Mobile TopNavBar (Simplified for small screens) */}
      <nav className="lg:hidden flex justify-between items-center w-full px-lg h-16 z-50 bg-surface border-b border-outline-variant fixed top-0 left-0">
      <div className="text-headline-md font-headline-md font-bold text-on-surface">Tetris Clean</div>
      <div className="flex items-center gap-md">
      <button className="text-on-surface-variant hover:bg-surface-variant transition-colors duration-200 p-sm rounded-full">
      <span className="material-symbols-outlined">settings</span>
      </button>
      </div>
      </nav>
      {/* Main Content Area */}
      <main className="flex-1 lg:ml-64 h-full flex flex-col pt-16 lg:pt-0 overflow-y-auto bg-background">
      {/* Header */}
      <header className="px-xl py-lg border-b border-outline-variant bg-surface flex-shrink-0">
      <h1 className="font-display-lg text-display-lg text-on-surface mb-xs">System Configuration</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">Adjust game mechanics, audio, and controls.</p>
      </header>
      {/* Content Canvas */}
      <div className="flex-1 p-xl overflow-y-auto max-w-5xl mx-auto w-full space-y-xl pb-32">
      {/* Audio Settings Module */}
      <section className="bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden">
      <div className="border-b border-outline-variant px-md py-sm bg-surface">
      <h2 className="font-label-caps text-label-caps text-on-surface tracking-wider">Audio Configuration</h2>
      </div>
      <div className="p-lg space-y-lg">
      {/* Master Volume */}
      <div className="flex items-center justify-between">
      <div className="flex-1">
      <label className="font-body-md text-body-md text-on-surface block mb-xs">Master Volume</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Overall system audio level.</p>
      </div>
      <div className="w-64 flex items-center gap-md">
      <span className="material-symbols-outlined text-on-surface-variant text-sm">volume_mute</span>
      <input className="w-full h-1 bg-[#475569] rounded-full appearance-none outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" max="100" min="0" type="range" value="80" />
      <span className="material-symbols-outlined text-on-surface-variant text-sm">volume_up</span>
      </div>
      </div>
      {/* Divider */}
      <hr className="border-outline-variant" />
      {/* Music Volume */}
      <div className="flex items-center justify-between">
      <div className="flex-1">
      <label className="font-body-md text-body-md text-on-surface block mb-xs">Music</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Background soundtrack volume.</p>
      </div>
      <div className="w-64 flex items-center gap-md">
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-[#F8FAFC] border-4 border-surface-container-low appearance-none cursor-pointer z-10" id="music-toggle" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-[#475569] cursor-pointer" htmlFor="music-toggle"></label>
      </div>
      <input className="flex-1 h-1 bg-[#475569] rounded-full appearance-none outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" max="100" min="0" type="range" value="60" />
      </div>
      </div>
      {/* Divider */}
      <hr className="border-outline-variant" />
      {/* SFX Volume */}
      <div className="flex items-center justify-between">
      <div className="flex-1">
      <label className="font-body-md text-body-md text-on-surface block mb-xs">Sound Effects</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Feedback sounds for movement and line clears.</p>
      </div>
      <div className="w-64 flex items-center gap-md">
      <div className="relative inline-block w-12 mr-2 align-middle select-none transition duration-200 ease-in">
      <input checked={true} className="toggle-checkbox absolute block w-6 h-6 rounded-full bg-[#F8FAFC] border-4 border-surface-container-low appearance-none cursor-pointer z-10" id="sfx-toggle" name="toggle" type="checkbox" />
      <label className="toggle-label block overflow-hidden h-6 rounded-full bg-[#475569] cursor-pointer" htmlFor="sfx-toggle"></label>
      </div>
      <input className="flex-1 h-1 bg-[#475569] rounded-full appearance-none outline-none focus:ring-2 focus:ring-primary-container focus:ring-offset-2 focus:ring-offset-background" max="100" min="0" type="range" value="100" />
      </div>
      </div>
      </div>
      </section>
      {/* Difficulty Module */}
      <section className="bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden">
      <div className="border-b border-outline-variant px-md py-sm bg-surface">
      <h2 className="font-label-caps text-label-caps text-on-surface tracking-wider">Difficulty &amp; Mechanics</h2>
      </div>
      <div className="p-lg">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-lg">
      <div className="flex-1">
      <label className="font-body-md text-body-md text-on-surface block mb-xs">Starting Level</label>
      <p className="font-body-sm text-body-sm text-on-surface-variant">Higher levels increase initial drop speed.</p>
      </div>
      <div className="flex gap-xs flex-wrap">
      {/* Level Selectors 1-10 */}
      <button className="w-10 h-10 rounded border border-outline-variant bg-surface hover:bg-surface-variant text-on-surface font-mono-data text-mono-data focus:outline-none focus:border-primary-container focus:ring-1 focus:ring-primary-container transition-colors">1</button>
      <button className="w-10 h-10 rounded border border-outline-variant bg-surface hover:bg-surface-variant text-on-surface font-mono-data text-mono-data focus:outline-none transition-colors">2</button>
      <button className="w-10 h-10 rounded border border-outline-variant bg-surface hover:bg-surface-variant text-on-surface font-mono-data text-mono-data focus:outline-none transition-colors">3</button>
      <button className="w-10 h-10 rounded border border-outline-variant bg-surface hover:bg-surface-variant text-on-surface font-mono-data text-mono-data focus:outline-none transition-colors">4</button>
      <button className="w-10 h-10 rounded border border-primary-container bg-surface-variant text-primary font-mono-data text-mono-data focus:outline-none scale-95 shadow-[0_0_0_1px_rgba(37,99,235,1)]">5</button>
      <button className="w-10 h-10 rounded border border-outline-variant bg-surface hover:bg-surface-variant text-on-surface font-mono-data text-mono-data focus:outline-none transition-colors">6</button>
      <button className="w-10 h-10 rounded border border-outline-variant bg-surface hover:bg-surface-variant text-on-surface font-mono-data text-mono-data focus:outline-none transition-colors">7</button>
      <button className="w-10 h-10 rounded border border-outline-variant bg-surface hover:bg-surface-variant text-on-surface font-mono-data text-mono-data focus:outline-none transition-colors">8</button>
      <button className="w-10 h-10 rounded border border-outline-variant bg-surface hover:bg-surface-variant text-on-surface font-mono-data text-mono-data focus:outline-none transition-colors">9</button>
      <button className="w-10 h-10 rounded border border-outline-variant bg-surface hover:bg-surface-variant text-on-surface font-mono-data text-mono-data focus:outline-none transition-colors">10</button>
      </div>
      </div>
      </div>
      </section>
      {/* Input Mapping Module */}
      <section className="bg-surface-container-low border border-outline-variant rounded-lg overflow-hidden">
      <div className="border-b border-outline-variant px-md py-sm bg-surface">
      <h2 className="font-label-caps text-label-caps text-on-surface tracking-wider">Input Mapping</h2>
      </div>
      <table className="w-full text-left border-collapse">
      <thead>
      <tr className="border-b border-outline-variant bg-surface">
      <th className="py-sm px-lg font-label-caps text-label-caps text-on-surface-variant font-medium">Action</th>
      <th className="py-sm px-lg font-label-caps text-label-caps text-on-surface-variant font-medium">Primary Key</th>
      <th className="py-sm px-lg font-label-caps text-label-caps text-on-surface-variant font-medium">Secondary Key</th>
      </tr>
      </thead>
      <tbody className="font-body-sm text-body-sm">
      <tr className="border-b border-outline-variant hover:bg-surface-variant/50 transition-colors">
      <td className="py-md px-lg text-on-surface">Move Left</td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">ArrowLeft</button>
      </td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">A</button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-variant/50 transition-colors">
      <td className="py-md px-lg text-on-surface">Move Right</td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">ArrowRight</button>
      </td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">D</button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-variant/50 transition-colors">
      <td className="py-md px-lg text-on-surface">Rotate Clockwise</td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">ArrowUp</button>
      </td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">W</button>
      </td>
      </tr>
      <tr className="border-b border-outline-variant hover:bg-surface-variant/50 transition-colors">
      <td className="py-md px-lg text-on-surface">Soft Drop</td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">ArrowDown</button>
      </td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">S</button>
      </td>
      </tr>
      <tr className="hover:bg-surface-variant/50 transition-colors">
      <td className="py-md px-lg text-on-surface">Hard Drop</td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">Space</button>
      </td>
      <td className="py-md px-lg">
      <button className="px-sm py-xs border border-outline-variant rounded bg-surface font-mono-data text-mono-data text-on-surface hover:border-primary focus:border-primary outline-none min-w-[80px] text-center">None</button>
      </td>
      </tr>
      </tbody>
      </table>
      </section>
      </div>
      {/* Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 lg:left-64 right-0 bg-surface border-t border-outline-variant p-md flex justify-between items-center z-30">
      <button className="px-lg py-sm border border-outline-variant text-[#F8FAFC] font-label-caps text-label-caps uppercase rounded-lg hover:bg-surface-variant active:scale-98 transition-all">
              Reset to Defaults
            </button>
      <button className="px-lg py-sm bg-primary-container text-[#F8FAFC] font-label-caps text-label-caps uppercase rounded-lg hover:brightness-110 active:scale-98 transition-all">
              Save Changes
            </button>
      </div>
      </main>
    </>
  );
}
