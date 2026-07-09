import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/FadeUp";
import PillarRow from "@/components/PillarRow";

export const metadata: Metadata = {
  title: "About",
  description:
    "Behavioural science taught me to notice patterns. Where I focus: project coordination, partnerships, implementation, continuous improvement, and creative design.",
};

const pillars = [
  {
    title: "Project Coordination",
    sub: "Keeping programs on track by managing logistics, timelines, and stakeholder communication from planning through to delivery.",
    bg: "bg-ink/5",
    fg: "text-ink/60",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    ),
  },
  {
    title: "Partnerships",
    sub: "Building and coordinating cross-sector partnerships that connect institutions with the communities they serve.",
    bg: "bg-lavender-tint",
    fg: "text-lavender-deep",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    title: "Implementation",
    sub: "Turning research and knowledge into programming that actually works on the ground.",
    bg: "bg-terracotta-tint",
    fg: "text-terracotta",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="4" width="18" height="18" rx="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
  },
  {
    title: "Continuous Improvement",
    sub: "Using data and emerging tools to make smarter decisions and strengthen how services are designed and delivered.",
    bg: "bg-teal-tint",
    fg: "text-teal",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
  },
  {
    title: "Creative Design",
    sub: "Full cycle creative work, from strategy and concept through production to evaluation.",
    bg: "bg-terracotta-tint",
    fg: "text-terracotta",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 2v3M12 19v3M4.22 4.22l2.12 2.12M17.66 17.66l2.12 2.12M2 12h3M19 12h3M4.22 19.78l2.12-2.12M17.66 6.34l2.12-2.12" />
      </svg>
    ),
  },
];

export default function About() {
  return (
    <>
      <section className="bg-lavender overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20 flex items-center justify-between gap-6">
          <div>
            <FadeUp delay={0}>
              <p className="font-script text-2xl text-ink mb-4">A little about me</p>
            </FadeUp>
            <FadeUp delay={0.12}>
              <h1
                className="font-display uppercase text-terracotta leading-[0.9]"
                style={{ fontSize: "clamp(3rem, 10vw, 7rem)" }}
              >
                ABOUT
              </h1>
            </FadeUp>
          </div>
          <FadeUp delay={0.2}>
            <div className="relative w-24 md:w-52 aspect-square shrink-0 mr-3 md:mr-8">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[126%] aspect-square"
              >
                <svg viewBox="0 0 100 100" className="w-full h-full animate-spin-slow">
                  <circle
                    cx="50"
                    cy="50"
                    r="48.5"
                    fill="none"
                    pathLength={96}
                    stroke="var(--terracotta)"
                    strokeWidth="1.5"
                    strokeDasharray="10 6"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <div className="relative z-10 w-full h-full rounded-full overflow-hidden border-2 border-ink/20">
                <div
                  className="absolute"
                  style={{ top: "-30%", left: "-30%", width: "160%", height: "160%" }}
                >
                  <Image
                    src="/images/portrait-v2.jpg"
                    alt="Portrait of Lilainie Adjei-Addo"
                    fill
                    sizes="(min-width: 768px) 208px, 96px"
                    className="object-cover"
                    style={{ objectPosition: "50% 25%" }}
                  />
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-12 md:py-24 grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
          <div className="md:col-span-3 space-y-6 md:space-y-8">
            <FadeUp>
              <p className="text-2xl md:text-[2rem] font-bold text-terracotta leading-snug">
                The first thing I ever built was a space that didn&apos;t exist
                yet.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="text-base md:text-xl leading-relaxed">
                In university there was nowhere for Black students to talk about
                mental health, so I co-founded a wellness group alongside the
                only Black female counsellor available to students at the time.
                Then came McMaster&apos;s first podcast and radio show centred on
                African immigrant student life, made for any student who needed
                to hear their own experience reflected back.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="text-base md:text-xl leading-relaxed">
                Those projects taught me something I&apos;ve never let go of:{" "}
                <span className="font-bold text-terracotta">
                  good intentions start things, but structure is what keeps them
                  standing.
                </span>{" "}
                Every program I&apos;ve coordinated since has been an exercise in
                building the scaffolding first.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="text-base md:text-xl leading-relaxed">
                My background in Human Behavioural Sciences is why I catch gaps
                like that in the first place. I notice patterns quickly, and when
                I find a problem I don&apos;t stop at the surface, I dig for its
                &ldquo;why.&rdquo;{" "}
                <span className="font-bold text-terracotta">
                  People will tell you where a system is failing long before the
                  data does,
                </span>{" "}
                if you know how to pay attention.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="text-base md:text-xl leading-relaxed">
                That builder&apos;s streak is also how this site exists.{" "}
                <span className="font-bold text-terracotta">
                  I taught myself to code with AI so I could design and build it
                  entirely on my own,
                </span>{" "}
                and I&apos;ve stayed close to where the technology is heading ever
                since. Whatever I make, I want it to be unique but never at the
                cost of being accessible.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="text-base md:text-xl leading-relaxed">
                And the care that started all of this doesn&apos;t stop when the
                workday does.{" "}
                <span className="font-bold text-terracotta">
                  It&apos;s what pushes me to give my free time to doing better,
                </span>{" "}
                as a child life volunteer at SickKids and a member of the
                Research Advisory Committee at MLSE LaunchPad.
              </p>
            </FadeUp>
          </div>

          <div className="md:col-span-2 md:sticky md:top-24 -mx-6 -mb-12 px-6 py-10 bg-lavender-tint md:mx-0 md:mb-0 md:px-0 md:py-0 md:bg-transparent">
            <FadeUp>
              <p className="font-script text-2xl text-ink md:hidden">
                Where I focus
              </p>
              <p className="text-sm text-ink-muted mb-5 md:hidden">
                Five ways the work shows up
              </p>
              <p className="hidden md:block font-body text-xs uppercase tracking-[0.15em] text-ink-hint mb-3">
                Where I focus
              </p>
            </FadeUp>
            <PillarRow count={pillars.length + 1}>
              {pillars.map((p, i) => (
                <FadeUp
                  key={p.title}
                  delay={i * 0.08}
                  className="min-w-[80%] snap-start md:min-w-0"
                >
                  <div className="flex items-start gap-3.5 p-4 h-full border border-border rounded-md bg-white md:bg-white/60 hover:border-border-strong transition-colors">
                    <div className={`w-9 h-9 rounded-sm flex items-center justify-center shrink-0 ${p.bg} ${p.fg}`}>
                      {p.icon}
                    </div>
                    <div>
                      <p className="font-body font-bold text-sm mb-1">{p.title}</p>
                      <p className="text-sm text-ink-muted leading-relaxed">
                        {p.sub}
                      </p>
                    </div>
                  </div>
                </FadeUp>
              ))}
              <FadeUp
                delay={pillars.length * 0.08}
                className="min-w-[80%] snap-start md:min-w-0"
              >
                <Link
                  href="/projects"
                  className="group flex items-center justify-between gap-3.5 p-4 h-full border border-border rounded-md bg-terracotta-tint hover:border-terracotta transition-colors"
                >
                  <div>
                    <p className="font-body font-bold text-sm mb-1 text-terracotta">
                      See it in practice
                    </p>
                    <p className="text-sm text-ink-muted leading-relaxed">
                      The projects where this work shows up.
                    </p>
                  </div>
                  <span
                    className="text-terracotta text-xl group-hover:translate-x-1 transition-transform"
                    aria-hidden="true"
                  >
                    &rarr;
                  </span>
                </Link>
              </FadeUp>
            </PillarRow>
          </div>
        </div>
      </section>
    </>
  );
}
