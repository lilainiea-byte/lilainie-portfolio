import type { Metadata } from "next";
import FadeUp from "@/components/FadeUp";

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
      <section className="bg-lavender">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-12 md:pt-24 md:pb-20">
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
      </section>

      <section className="bg-cream">
        <div className="mx-auto max-w-6xl px-6 py-16 md:py-24 grid md:grid-cols-5 gap-12 md:gap-16 items-start">
          <div className="md:col-span-3 space-y-8">
            <FadeUp>
              <p className="text-lg md:text-xl leading-relaxed">
                To know me is to understand that I believe{" "}
                <span className="font-bold text-terracotta">
                  systems and programs are only as good as the structure holding
                  them up.
                </span>
              </p>
            </FadeUp>

            <FadeUp>
              <p className="text-lg md:text-xl leading-relaxed">
                My background in Human Behavioural Sciences is why I notice
                patterns so easily. When I identify a problem, I don&apos;t just
                see the surface of it, I uncover its &ldquo;why.&rdquo; That
                understanding of people is what lets me{" "}
                <span className="font-bold text-terracotta">
                  build partnerships that hold and design systems around how
                  people actually behave,
                </span>{" "}
                not how they&apos;re assumed to.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="text-lg md:text-xl leading-relaxed">
                I&apos;m also a full cycle creative, and that instinct to build
                things myself is how this site exists.{" "}
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
              <p className="text-lg md:text-xl leading-relaxed">
                <span className="font-bold text-terracotta">
                  University is where I first built instead of just participating.
                </span>{" "}
                When there wasn&apos;t a space for Black students on campus to talk
                about mental health, I co-founded a Black mental health wellness
                group alongside the only Black female counsellor available to
                students at the time. Around the same time, I co-created
                McMaster&apos;s first podcast and radio show centred on African
                immigrant student life. I&apos;ve been chasing that instinct ever
                since.
              </p>
            </FadeUp>

            <FadeUp>
              <p className="text-lg md:text-xl leading-relaxed">
                That care for people doesn&apos;t stop when the workday does.{" "}
                <span className="font-bold text-terracotta">
                  It&apos;s what pushes me to give my free time to doing better,
                </span>{" "}
                as a child life volunteer at SickKids and a member of the
                Research Advisory Committee at MLSE LaunchPad.
              </p>
            </FadeUp>
          </div>

          <div className="md:col-span-2 flex flex-col gap-3">
            <FadeUp>
              <p className="font-body text-xs uppercase tracking-[0.15em] text-ink-hint mb-1">
                Where I focus
              </p>
            </FadeUp>
            {pillars.map((p, i) => (
              <FadeUp key={p.title} delay={i * 0.08}>
                <div className="flex items-start gap-3.5 p-4 border border-border rounded-md bg-white/60 hover:border-border-strong transition-colors">
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
          </div>
        </div>
      </section>
    </>
  );
}
