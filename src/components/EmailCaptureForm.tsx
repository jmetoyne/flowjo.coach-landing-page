"use client";

import { useState, type FormEvent } from "react";

export function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("beta");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus("submitting");

    setTimeout(() => {
      console.log("Captured lead", { email, interest });
      setStatus("success");
    }, 800);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex w-full flex-col gap-3 rounded-2xl bg-white/90 p-4 shadow-lg backdrop-blur sm:flex-row sm:items-center sm:gap-4 sm:p-5"
    >
      <div className="flex-1">
        <label htmlFor="email" className="sr-only">
          Email address
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          placeholder="you@example.com"
          className="h-12 w-full rounded-xl border border-brand-sand/70 bg-white px-4 text-base shadow-sm focus:border-brand-ember focus:outline-none"
        />
      </div>
      <div className="sm:w-48">
        <label htmlFor="interest" className="sr-only">
          Interest
        </label>
        <select
          id="interest"
          className="h-12 w-full rounded-xl border border-brand-sand/70 bg-white px-3 text-sm font-medium shadow-sm focus:border-brand-ember focus:outline-none"
          value={interest}
          onChange={(event) => setInterest(event.target.value)}
        >
          <option value="beta">Join the Beta</option>
          <option value="notify">Notify Me</option>
        </select>
      </div>
      <button
        type="submit"
        disabled={status !== "idle"}
        className="h-12 rounded-xl bg-brand-ember px-6 text-sm font-semibold uppercase tracking-wide text-white shadow-lg transition hover:bg-brand-clay disabled:cursor-not-allowed disabled:bg-brand-ember/70"
      >
        {status === "success" ? "You're on the list!" : status === "submitting" ? "Submitting..." : "Get Early Access"}
      </button>
    </form>
  );
}
