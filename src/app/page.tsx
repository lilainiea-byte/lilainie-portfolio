import Link from "next/link";
import Image from "next/image";
import FadeUp from "@/components/FadeUp";
import FadeIn from "@/components/FadeIn";
import ScrollScale from "@/components/ScrollScale";
import Marquee from "@/components/Marquee";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-lavender overflow-hidden">
        <div className="mx-auto max-w-6xl px-6 pt-16 pb-10 md:pt-24 md:pb-16">
          <FadeUp delay={0}>
            <p className="font-body font-bold tracking-[0.3em] text-sm uppercase mb-6">
              Lilainie Adjei-Addo
            </p>
          </FadeUp>

          <FadeUp delay={0.12}>
            <div className="inline-flex items-center gap-2 font-body text-xs uppercase tracking-[0.15em] text-ink/60 mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-terracotta" />
              Behavioural Science &middot; Creativity &middot; Partnerships &middot; Implementation
            </div>
          </FadeUp>

          <div className="relative">
            <FadeUp delay={0.22}>
              <ScrollScale>
                <h1
                  className="font-display uppercase leading-[1.05] text-terracotta select-none"
                  style={{ fontSize: "clamp(3.5rem, 14vw, 11rem)" }}
                >
                  PEOPLE.
                  <br />
                  SYSTEMS.
                  <br />
                  IMPACT.
                </h1>
              </ScrollScale>
            </FadeUp>

            {/* Photo, overlapping the type like the inspiration image */}
            <div className="relative md:absolute md:top-0 md:right-0 md:translate-x-[10%] w-full md:w-[40%] aspect-[3/4] mt-8 md:mt-0">
              <div
                aria-hidden="true"
                className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[130%] aspect-square"
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
              <FadeIn delay={0.35} className="relative z-10 w-full h-full rounded-sm overflow-hidden border-2 border-ink/20">
                <div className="absolute" style={{ top: "-30%", left: "-30%", width: "160%", height: "160%" }}>
                  <Image
                    src="/images/portrait-v2.jpg"
                    alt="Lilainie Adjei-Addo"
                    fill
                    priority
                    sizes="(min-width: 768px) 60vw, 160vw"
                    className="object-cover"
                    style={{ objectPosition: "50% 25%" }}
                  />
                </div>
              </FadeIn>
            </div>
          </div>

          <FadeUp delay={0.45}>
            <p className="font-script text-2xl md:text-3xl text-ink mt-8 max-w-md">
              A connector at heart, a strategist by skill.
            </p>
          </FadeUp>

          <FadeUp delay={0.55}>
            <div className="flex flex-wrap gap-3 mt-8 font-body">
              <Link
                href="/projects"
                className="inline-block bg-ink text-cream font-bold uppercase tracking-wide text-sm px-7 py-3.5 rounded-sm hover:opacity-80 transition-opacity"
              >
                View my work
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      <Marquee />

      {/* INTRO STATEMENT */}
      <section className="bg-cream">
        <div className="mx-auto max-w-3xl px-6 py-20 md:py-28">
          <FadeUp>
            <p className="font-display text-3xl md:text-5xl uppercase leading-tight mb-8">
              Behavioural science meets implementation.
            </p>
          </FadeUp>
          <FadeUp delay={0.1}>
            <p className="text-lg md:text-xl leading-relaxed text-ink/80">
              Behavioural science taught me to notice patterns. Growing up
              moving through systems like healthcare, education, and community
              networks that worked, I saw firsthand what happens to people when
              those same systems don&apos;t exist or don&apos;t reach them. That
              contrast stayed with me, and I&apos;ve been spotting the same
              pattern everywhere since, in classrooms, in workplaces, in
              programs meant to help people that quietly weren&apos;t built to.
            </p>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="font-script text-2xl text-ink mt-6">
              Glad you&apos;re here, getting to know me.
            </p>
          </FadeUp>
          <FadeUp delay={0.24}>
            <div className="mt-10">
              <Link
                href="/about"
                className="inline-block font-body font-bold uppercase tracking-wide text-sm border-b-2 border-terracotta pb-1 hover:text-terracotta transition-colors"
              >
                More about me &rarr;
              </Link>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* CTA TO CONTACT */}
      <section className="bg-ink text-cream">
        <div className="mx-auto max-w-6xl px-6 py-20 md:py-28 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <FadeUp>
            <h2 className="font-display uppercase text-4xl md:text-6xl leading-tight">
              Let&apos;s
              <br />
              connect.
            </h2>
          </FadeUp>
          <FadeUp delay={0.15}>
            <Link
              href="/contact"
              className="inline-block bg-terracotta text-cream font-body font-bold uppercase tracking-wide text-sm px-8 py-4 rounded-sm hover:bg-terracotta-deep transition-colors"
            >
              Get In Touch
            </Link>
          </FadeUp>
        </div>
      </section>
    </>
  );
}
