"use client";

import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

type Season = "spring" | "summer" | "autumn" | "winter";
type Override = "auto" | Season;

const OPTIONS: { key: Override; label: string }[] = [
  { key: "auto", label: "Auto" },
  { key: "spring", label: "Spring" },
  { key: "summer", label: "Summer" },
  { key: "autumn", label: "Autumn" },
  { key: "winter", label: "Winter" },
];

const STORAGE_OVERRIDE = "season-override";
const STORAGE_HIDDEN = "season-debug-hidden";

export function SeasonDebugger() {
  const [mounted, setMounted] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [override, setOverride] = useState<Override>("auto");
  const [serverSeason, setServerSeason] = useState<Season>("autumn");

  useEffect(() => {
    const html = document.documentElement;
    const initial = (html.dataset.season as Season | undefined) ?? "autumn";
    setServerSeason(initial);

    const debugParam = new URL(window.location.href).searchParams.has("debug");
    if (debugParam) localStorage.removeItem(STORAGE_HIDDEN);
    setHidden(localStorage.getItem(STORAGE_HIDDEN) === "1");

    const stored = localStorage.getItem(STORAGE_OVERRIDE) as Override | null;
    if (stored && stored !== "auto") {
      setOverride(stored);
      html.dataset.season = stored;
    }
    setMounted(true);
  }, []);

  function pick(o: Override) {
    setOverride(o);
    localStorage.setItem(STORAGE_OVERRIDE, o);
    document.documentElement.dataset.season = o === "auto" ? serverSeason : o;
  }

  function hide() {
    setHidden(true);
    setOpen(false);
    localStorage.setItem(STORAGE_HIDDEN, "1");
  }

  if (!mounted || hidden) return null;

  const active = override === "auto" ? serverSeason : override;
  const abbr = active.charAt(0).toUpperCase();

  return (
    <div className="fixed bottom-4 right-4 z-[60] font-sans text-[12px] print:hidden">
      {open && (
        <div className="mb-2 w-44 border border-line bg-canvas shadow-lg p-2 rounded-sm">
          <div className="flex items-center justify-between border-b border-line pb-1.5 mb-1.5">
            <span className="text-[10px] uppercase tracking-[0.14em] text-ink-soft">
              Season debug
            </span>
            <button
              onClick={hide}
              className="text-[10px] text-ink-soft hover:text-brand-burgundy underline-offset-2 hover:underline cursor-pointer"
              title="Hide. Re-enable with ?debug in URL."
            >
              hide
            </button>
          </div>
          <div className="flex flex-col">
            {OPTIONS.map((opt) => {
              const selected = override === opt.key;
              return (
                <button
                  key={opt.key}
                  onClick={() => pick(opt.key)}
                  className={cn(
                    "text-left px-2 py-1 rounded-sm transition-colors cursor-pointer flex items-center justify-between",
                    selected
                      ? "bg-brand-burgundy text-ivory"
                      : "hover:bg-line-soft text-ink"
                  )}
                >
                  <span>{opt.label}</span>
                  {opt.key === "auto" && (
                    <span
                      className={cn(
                        "text-[10px]",
                        selected ? "text-ivory/70" : "text-ink-soft"
                      )}
                    >
                      {serverSeason}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((v) => !v)}
        aria-label={`Season debug — ${active}`}
        className="h-9 w-9 rounded-full bg-brand-burgundy text-ivory flex items-center justify-center shadow-lg hover:scale-105 active:scale-95 transition-transform cursor-pointer font-medium"
      >
        {abbr}
      </button>
    </div>
  );
}
