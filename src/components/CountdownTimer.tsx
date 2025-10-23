"use client";

import { useEffect, useState } from "react";
import { getCountdown, launchDate } from "@/lib/launch-date";

const timeUnits: { label: string; key: "days" | "hours" | "minutes" | "seconds" }[] = [
  { label: "Days", key: "days" },
  { label: "Hours", key: "hours" },
  { label: "Minutes", key: "minutes" },
  { label: "Seconds", key: "seconds" }
];

export function CountdownTimer() {
  const [timeLeft, setTimeLeft] = useState(() => getCountdown(launchDate));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft(getCountdown(launchDate));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center gap-3 rounded-full bg-white/80 px-6 py-3 text-sm font-medium text-slate-700 shadow">
      <span className="font-semibold uppercase tracking-wide text-brand-denim">
        Launching Soon
      </span>
      <div className="flex gap-3 text-slate-900">
        {timeUnits.map(({ label, key }) => (
          <div key={key} className="flex flex-col items-center">
            <span className="text-xl font-bold tabular-nums">
              {String(timeLeft[key]).padStart(2, "0")}
            </span>
            <span className="text-[0.65rem] uppercase tracking-wide text-slate-500">
              {label}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
