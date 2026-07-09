"use client";

import { useState } from "react";

export default function ResumeRequest() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [reason, setReason] = useState("");
  const [message, setMessage] = useState("");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const subject = `Resume request — ${reason} (${name})`;
    const body = `Hi Lilainie,\n\nI'd like to request your resume.\n\nName: ${name}\nEmail: ${email}\nReason: ${reason}${message ? `\n\n${message}` : ""}`;
    window.location.href = `mailto:lilainiea@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white/70 border border-border rounded-md p-7">
      <div className="mb-4">
        <label htmlFor="name" className="font-body text-xs uppercase tracking-[0.15em] text-ink-hint mb-1.5 block">
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-white border border-border rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="font-body text-xs uppercase tracking-[0.15em] text-ink-hint mb-1.5 block">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-white border border-border rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="reason" className="font-body text-xs uppercase tracking-[0.15em] text-ink-hint mb-1.5 block">
          Reason
        </label>
        <select
          id="reason"
          required
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          className="w-full bg-white border border-border rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-terracotta transition-colors"
        >
          <option value="" disabled>
            Select a reason
          </option>
          <option value="Job opportunity">Job opportunity</option>
          <option value="Project / collaboration">Project / collaboration</option>
          <option value="Other">Other</option>
        </select>
      </div>

      <div className="mb-4">
        <label htmlFor="message" className="font-body text-xs uppercase tracking-[0.15em] text-ink-hint mb-1.5 block">
          Message <span className="normal-case tracking-normal">(optional)</span>
        </label>
        <textarea
          id="message"
          rows={3}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Anything you'd like to add — role, company, timeline…"
          className="w-full bg-white border border-border rounded-md px-3.5 py-2.5 text-sm focus:outline-none focus:border-terracotta transition-colors"
        />
      </div>

      <button
        type="submit"
        className="bg-terracotta text-cream font-body font-bold uppercase tracking-wide text-sm px-6 py-3 rounded-sm hover:bg-terracotta-deep transition-colors"
      >
        Request resume
      </button>
      <p className="text-xs text-ink-hint mt-3">
        Submitting opens your email app with everything pre-filled — nothing is stored on this site.
      </p>
    </form>
  );
}
